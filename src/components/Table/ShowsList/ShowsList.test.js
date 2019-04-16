import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowsList from './ShowsList';
import Show from './Show/Show';

configure({adapter: new Adapter()});

const shows = [
    {
      title: 'The Act',
      year: 2019,
      ids: {
        trakt: 138758,
        slug: 'the-act-2019',
        tvdb: 354765,
        imdb: 'tt8682948',
        tmdb: 82883,
        tvrage: null
      },
      overview: 'The Act is a seasonal anthology series that tells startling, stranger-than-fiction true crime stories. The first season follows Gypsy Blanchard, a girl trying to escape the toxic relationship she has with her overprotective mother. Her quest for independence opens a Pandora\'s box of secrets, one that ultimately leads to murder.',
      status: 'returning series',
      rating: 8.28571,
      genres: [
        'drama',
        'crime'
      ],
      aired_episodes: 5,
      poster: 'https://image.tmdb.org/t/p/original//vb1sQLC2MqfCPOFqHd8SyVsyDVB.jpg'
    },
    {
      title: 'Doom Patrol',
      year: 2019,
      ids: {
        trakt: 140008,
        slug: 'doom-patrol',
        tvdb: 355622,
        imdb: 'tt8416494',
        tmdb: 79501,
        tvrage: null
      },
      overview: 'The Doom Patrol’s members each suffered horrible accidents that gave them superhuman abilities — but also left them scarred and disfigured. Traumatized and downtrodden, the team found purpose through The Chief, who brought them together to investigate the weirdest phenomena in existence — and to protect Earth from what they find.',
      first_aired: '2019-02-15T19:00:00.000Z',
      airs: {
        day: 'Friday',
        time: '14:00',
        timezone: 'America/New_York'
      },
      runtime: 60,
      certification: 'TV-MA',
      network: 'DC Universe',
      country: 'us',
      trailer: 'http://youtube.com/watch?v=6wtGnnLfTqA',
      homepage: 'https://www.dcuniverse.com/videos/doom-patrol/181',
      status: 'returning series',
      rating: 8.05648,
      votes: 301,
      comment_count: 10,
      updated_at: '2019-04-15T10:55:40.000Z',
      language: 'en',
      genres: [
        'action',
        'fantasy',
        'science-fiction',
        'adventure',
        'crime',
        'drama'
      ],
      aired_episodes: 9,
      poster: 'https://image.tmdb.org/t/p/original//nVN7Dt0Xr78gnJepRsRLaLYklbY.jpg'
    },
    {
      title: 'Hanna',
      year: 2019,
      ids: {
        trakt: 142443,
        slug: 'hanna',
        tvdb: 357690,
        imdb: 'tt6932244',
        tmdb: 54155,
        tvrage: null
      },
      overview: 'In equal parts high-concept thriller and coming-of-age drama, Hanna follows the journey of an extraordinary young girl raised in the forest, as she evades the relentless pursuit of an off-book CIA agent and tries to unearth the truth behind who she is.',
      first_aired: '2019-02-03T08:00:00.000Z',
      airs: {
        day: 'Friday',
        time: '03:00',
        timezone: 'America/New_York'
      },
      runtime: 50,
      certification: 'TV-MA',
      network: 'Amazon',
      country: 'us',
      trailer: 'http://youtube.com/watch?v=v75RmNuZgTs',
      homepage: 'https://www.amazon.com/dp/B07L5WLYG6/',
      status: 'returning series',
      rating: 7.80496,
      votes: 282,
      comment_count: 0,
      updated_at: '2019-04-14T10:32:05.000Z',
      language: 'en',
      genres: [
        'action',
        'drama',
        'adventure'
      ],
      aired_episodes: 8,
      poster: 'https://image.tmdb.org/t/p/original//5nSSkcM3TgpllZ7yTyBOQEgAX36.jpg'
    }];

describe('<ShowsList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ShowsList shows={[]}/>);
    });


    it("should render element without crashing if shows property exists", () => {
        shallow(<ShowsList shows={shows} />);
    })

    it('should render three <Show /> elements if shows array length is three', () => {
        wrapper.setProps({shows: shows});
        expect(wrapper.find(Show)).toHaveLength(3);
    });

    it('should render paragraph element if shows array length is zero', () => {
        wrapper.setProps({shows: []});
        expect(wrapper.children()).toHaveLength(1);
    });

});