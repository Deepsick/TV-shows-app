import React from "react";
import { Link } from "react-router-dom";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Pagination from "./Pagination";

configure({ adapter: new Adapter() });

describe("<SearchTable />", () => {
  it("should render element without crashing", () => {
    shallow(
      <Pagination
        value={1}
        pagination={{ amountOfPages: 1, page: 1, amountOfPaginationLinks: 1 }}
        onClickHandler={() => {}}
        onChangeNadler={() => {}}
      />
    );
  });


  it("should render pagination nav links if amount of pages is greater than one", () => {
    const wrapper = shallow(
      <Pagination
        value={1}
        pagination={{ amountOfPages: 3, page: 1, amountOfPaginationLinks: 5 }}
        onClickHandler={() => {}}
        onChangeNadler={() => {}}
      />
    );
    expect(wrapper.find('.Pagination__link--start')).toHaveLength(1);
  });

  it("shouldn't render pagination nav links if amount of pages equals to one", () => {
    const wrapper = shallow(
      <Pagination
        value={1}
        pagination={{ amountOfPages: 1, page: 1, amountOfPaginationLinks: 5 }}
        onClickHandler={() => {}}
        onChangeNadler={() => {}}
      />
    );
    expect(wrapper.find('.Pagination__link--start')).not.toHaveLength(1);
  });

  it("should contain disabled classname if page equals to amount of pages", () => {
    const wrapper = shallow(
      <Pagination
        value={1}
        pagination={{ amountOfPages: 3, page: 3, amountOfPaginationLinks: 5 }}
        onClickHandler={() => {}}
        onChangeNadler={() => {}}
      />
    );
    expect(
      wrapper
        .find(".Pagination__link--next")
        .hasClass("Pagination__link--disabled")
    ).toEqual(true);
    expect(
      wrapper
        .find(".Pagination__link--end")
        .hasClass("Pagination__link--disabled")
    ).toEqual(true);
  });


  it("should contain disabled classname if page equals to one", () => {
    const wrapper = shallow(
      <Pagination
        value={1}
        pagination={{ amountOfPages: 3, page: 1, amountOfPaginationLinks: 5 }}
        onClickHandler={() => {}}
        onChangeNadler={() => {}}
      />
    );
    expect(
      wrapper
        .find(".Pagination__link--previous")
        .hasClass("Pagination__link--disabled")
    ).toEqual(true);
    expect(
      wrapper
        .find(".Pagination__link--start")
        .hasClass("Pagination__link--disabled")
    ).toEqual(true);
  });
});
