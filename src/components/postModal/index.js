import React, { Component } from "react";
import "./index.css";

class Modal extends Component {
  state = {
    imgUrl: null
  };

  handleAddImage = event => {
    const file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        imgUrl: fileReader.result
      });
    };

    fileReader.readAsDataURL(file);
  };

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
                <input className="form-control" type="text" />
              </div>
              <input type="file" onChange={this.handleAddImage} />
            </form>
            {imgUrl ? <img src={imgUrl} alt="" /> : null}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.handleCloseModal}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
