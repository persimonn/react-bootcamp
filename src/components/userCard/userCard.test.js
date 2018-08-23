import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import UserCard, { sum } from "./index.js";

describe("testing postCard", () => {
  const wrapper = shallow(<UserCard />);

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("renders snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
