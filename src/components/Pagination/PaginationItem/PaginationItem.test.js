import React from "react";
import { Link } from "react-router-dom";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PaginationItem from "./PaginationItem";

configure({ adapter: new Adapter() });

describe("<PaginationItem />", () => {
  it("should render element without crashing", () => {
    shallow(<PaginationItem page={2} currentPage={2} onClick={() => {}} />);
  });

  it("should contain active classname if page equals to current page", () => {
    const wrapper = shallow(
      <PaginationItem page={1} currentPage={1} onClick={() => {}} />
    );
    expect(wrapper.find(Link).hasClass("Pagination__link--active")).toEqual(
      true
    );
  });
});
