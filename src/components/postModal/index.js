import React, { Component } from "react";
import "./index.css";

class Modal extends Component {
  state = {
    imgUrl: null,
    formData: null,
    caption: ""
  };

  handleAddImage = event => {
    console.log("test");
    const file = event.target.files[0];

    const fileReader = new FileReader();
    const formData = new FormData();

    formData.append("media", file);

    fileReader.onloadend = () => {
      this.setState({ formData, imgUrl: fileReader.result });
    };

    fileReader.readAsDataURL(file);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { formData, caption } = this.state;
    this.props.submitPost(formData, caption).then(() => {
      this.props.getPosts();
    });
  };

  componentDidUpdate() {
    if (this.props.postsReducer.isSubmitted) {
      this.props.handleCloseModal();
    }
  }

  onChange = e => this.setState({ caption: e.target.value });

  render() {
    const { imgUrl } = this.state;

    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create post</h5>
            <button type="button" className="close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label>Caption</label>
                <input
                  className="form-control"
                  type="text"
                  onChange={this.onChange}
                />
              </div>
              <input type="file" onChange={this.handleAddImage} />
            </form>
            {imgUrl ? <img className="img-fluid" src={imgUrl} alt="" /> : null}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.handleCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
