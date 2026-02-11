import { formatDate } from '../utils/formatDate'

export const ARTICLE_AND_NEWS = [
  {
    title: 'Setup your own podcast',
    category: 'podcast',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
    date: formatDate('2021-09-14'),
    tags: ['business', 'startup'],
    coverImage: '/src/assets/articles/setup-your-own-podcast.png',
    alt: 'The image shows microphones and headphones arranged for podcast recording, typically used in a studio setting for capturing audio conversations or interviews.',
  },
  {
    title: 'Doodle artwork 101',
    category: 'TIPS & TRICK',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
    date: formatDate('2021-09-12'),
    tags: ['art', 'creative', 'tips and trick'],
    coverImage: '/src/assets/articles/doodle-artwork-101.png',
    alt: 'The image shows a doodle artwork with various artistic elements and patterns.',
  },
  {
    title: 'Mother Nature Taking Over',
    category: 'NEWS',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris... ',
    date: formatDate('2021-09-10'),
    tags: ['news', 'nature'],
    coverImage: '/src/assets/articles/mother-nature-taking-over.png',
    alt: 'The image shows a scene of nature reclaiming an urban area, with plants and greenery growing over buildings and streets.',
  },
  {
    title: 'How to Be Productive',
    category: 'PRODUCTIVITY',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
    date: formatDate('2021-09-10'),
    tags: ['productivity', 'mindset'],
    coverImage: '/src/assets/articles/how-to-be-productive.png',
    alt: 'The image shows a person sitting at a desk with a laptop, surrounded by productivity tools and resources, such as a calendar, to-do list, and motivational quotes.',
  },
]
