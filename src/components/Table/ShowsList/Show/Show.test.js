import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Show from "./Show";

configure({ adapter: new Adapter() });

const show = {
  title: "The Act",
  year: 2019,
  ids: {
    trakt: 138758,
    slug: "the-act-2019",
    tvdb: 354765,
    imdb: "tt8682948",
    tmdb: 82883,
    tvrage: null
  },
  overview:
    "The Act is a seasonal anthology series that tells startling, stranger-than-fiction true crime stories. The first season follows Gypsy Blanchard, a girl trying to escape the toxic relationship she has with her overprotective mother. Her quest for independence opens a Pandora's box of secrets, one that ultimately leads to murder.",
  status: "returning series",
  rating: 8.28571,
  genres: ["drama", "crime"],
  aired_episodes: 5,
  poster: "https://image.tmdb.org/t/p/original//vb1sQLC2MqfCPOFqHd8SyVsyDVB.jpg"
};

const showWithoutOverview = {
  title: "The Act",
  year: 2019,
  ids: {
    trakt: 138758,
    slug: "the-act-2019",
    tvdb: 354765,
    imdb: "tt8682948",
    tmdb: 82883,
    tvrage: null
  },
  status: "returning series",
  rating: 8.28571,
  genres: ["drama", "crime"],
  aired_episodes: 5,
  poster: "https://image.tmdb.org/t/p/original//vb1sQLC2MqfCPOFqHd8SyVsyDVB.jpg"
};

const showWithoutPoster = {
  title: "The Act",
  year: 2019,
  ids: {
    trakt: 138758,
    slug: "the-act-2019",
    tvdb: 354765,
    imdb: "tt8682948",
    tmdb: 82883,
    tvrage: null
  },
  overview:
    "The Act is a seasonal anthology series that tells startling, stranger-than-fiction true crime stories. The first season follows Gypsy Blanchard, a girl trying to escape the toxic relationship she has with her overprotective mother. Her quest for independence opens a Pandora's box of secrets, one that ultimately leads to murder.",
  status: "returning series",
  rating: 8.28571,
  genres: ["drama", "crime"],
  aired_episodes: 5
};

const showWithoutRating = {
  title: "The Act",
  year: 2019,
  ids: {
    trakt: 138758,
    slug: "the-act-2019",
    tvdb: 354765,
    imdb: "tt8682948",
    tmdb: 82883,
    tvrage: null
  },
  overview:
    "The Act is a seasonal anthology series that tells startling, stranger-than-fiction true crime stories. The first season follows Gypsy Blanchard, a girl trying to escape the toxic relationship she has with her overprotective mother. Her quest for independence opens a Pandora's box of secrets, one that ultimately leads to murder.",
  status: "returning series",
  rating: 0,
  genres: ["drama", "crime"],
  aired_episodes: 5
};

describe("<Show />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Show number={100} show={{}} />);
  });

  it("should render one show without crashing if show and number properties exist", () => {
    shallow(<Show number={100} show={show} />);
  });

  it("should cut and add three dots to overview if it's longer than 100 letters", () => {
    wrapper.setProps({ show: show });
    expect(wrapper.find(".Table__td--description").text()).toHaveLength(103);
  });

  it("should render default text instead of description if overview doesn't exist", () => {
    wrapper.setProps({ show: showWithoutOverview });
    expect(wrapper.find(".Table__td--description").text()).toBe(
      "There is no description for this show"
    );
  });

  it("should render default poster if poster property doesn't exist", () => {
    wrapper.setProps({ show: showWithoutPoster });
    expect(wrapper.find("img").prop("src")).toEqual(
      "https://st.kp.yandex.net/images/movies/poster_none.png"
    );
  });

  it("should render rating fixed to two numbers[8.29] if rating isn't equal to zero ", () => {
    wrapper.setProps({ show: show });
    expect(wrapper.find(".Table__td--rating").text()).toBe("8.29");
  });

  it("should render default text instead of rating if rating is equal to zero ", () => {
    wrapper.setProps({ show: showWithoutRating });
    expect(wrapper.find(".Table__td--rating").text()).toBe("not rated yet");
  });

  it("should render list of genres if genres propery exists", () => {
    wrapper.setProps({ show: show });
    expect(wrapper.find(".Table__td--genres").text()).not.toBe("");
  });
});
