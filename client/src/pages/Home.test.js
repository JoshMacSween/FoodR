import Home from "./Home";
import { shallow } from "enzyme";
import React from "react";

describe("Home Page Tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
    // console.log(wrapper.debug());
  });
  it("Renders welcome text", () => {
    expect(wrapper.find("h2").text()).toBe("Welcome to Fooder");
  });
  it("Renders two buttons", () => {
    expect(wrapper.find("Button")).toHaveLength(2);
  });
});
