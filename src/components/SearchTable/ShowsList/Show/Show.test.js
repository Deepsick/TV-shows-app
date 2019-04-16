import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Show from "./Show";

configure({ adapter: new Adapter() });

const show = {
  title: "The Act",
  year: 2019,
  poster: "https://image.tmdb.org/t/p/original//vb1sQLC2MqfCPOFqHd8SyVsyDVB.jpg"
};

const showWithoutPoster = {
  title: "The Act",
  year: 2019
};

describe("<Show />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Show number={100} show={{}} />);
  });

  it("should render one show without crashing if show and number properties exist", () => {
    shallow(<Show number={100} show={show} />);
  });

  it("should render default poster if poster property doesn't exist", () => {
    wrapper.setProps({ show: showWithoutPoster });
    expect(wrapper.find("img").prop("src")).toEqual(
      "https://st.kp.yandex.net/images/movies/poster_none.png"
    );
  });
});
