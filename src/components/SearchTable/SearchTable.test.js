import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchTable from "./SearchTable";

configure({ adapter: new Adapter() });

describe("<SearchTable />", () => {
  let wrapper;

  it("should render element without crashing", () => {
    shallow(
      <SearchTable
        search={{ query: "xcxadas", searchShows: [], searching: false }}
        value=""
        onSubmitSearchHandler={() => {}}
        onSearchInputChangeHandler={() => {}}
      />
    );
  });

  it("should render default text if there are no matching results for this query", () => {
    const wrapper = shallow(
      <SearchTable
        search={{ query: "xcxadas", searchShows: [], searching: false }}
        value=""
        onSubmitSearchHandler={() => {}}
        onSearchInputChangeHandler={() => {}}
      />
    );
    expect(wrapper.find("p").text()).toBe(
      "Sorry, no matches were found for your query..."
    );
  });


  it("should render default text if there is no search query", () => {
    const wrapper = shallow(
      <SearchTable
        search={{ query: "", searchShows: null, searching: false }}
        value=""
        onSubmitSearchHandler={() => {}}
        onSearchInputChangeHandler={() => {}}
      />
    );
    expect(wrapper.find("p").text()).toBe(
      "Search something..."
    );
  });
});
