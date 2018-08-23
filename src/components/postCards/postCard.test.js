import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import PostCard, { sum } from "./index.js";

describe("testing postCard", () => {
  const wrapper = shallow(<PostCard />);

  it("sums to numbers", () => {
    expect(sum(3, 5)).toEqual(8);
  });

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("renders snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
