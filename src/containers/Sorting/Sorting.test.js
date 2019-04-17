import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Sorting } from "./Sorting";
import Spinner from "../../components/common/Spinner/Spinner";

configure({ adapter: new Adapter() });

describe("<Sorting />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Sorting
        shows={{}}
        pagination={{ itemsPerPage: 1 }}
        sorting={{}}
        search={{ query: "" }}
        location={{ search: "1" }}
        fetchShows={() => {}}
        setCurrentPage={() => {}}
        setCurrentLimit={() => {}}
        setSortingFilters={() => {}}
        setSearchQuery={() => {}}
      />
    );
  });

  it("should render element without crashing", () => {
    shallow(
      <Sorting
        pagination={{ itemsPerPage: 1 }}
        sorting={{}}
        shows={{}}
        search={{ query: "" }}
        location={{ search: "1" }}
        fetchShows={() => {}}
        setCurrentPage={() => {}}
        setCurrentLimit={() => {}}
        setSortingFilters={() => {}}
        setSearchQuery={() => {}}
      />
    );
  });

  it("should render Spinner if shows equal to null", () => {
    wrapper.setProps({ shows: { shows: null, loading: false } });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("should render Spinner if loading property is true", () => {
    wrapper.setProps({ shows: { shows: [], loading: true } });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
