/**
 * Episodes Constants
 */
import perplexedMind from '../assets/episodes/perplexed-mind.png'
import socialClass from '../assets/episodes/social-class.png'
import selfConfidence from '../assets/episodes/self-confidence.png'
import womensRights from '../assets/episodes/womens-rights.png'
import teslaAutopilot from '../assets/episodes/tesla-autopilot.png'
import covid19Endemic from '../assets/episodes/covid-19-endemic.png'
import avatar1 from '../assets/episodes/avatar1.jpg'
import avatar2 from '../assets/episodes/avatar2.jpg'

export const EPISODES = [
  {
    id: 1,
    number: 1,
    title: 'Perplexed Mind',
    subtitle: 'Are you a Perplexed Mind Person?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    category: 'Health',
    tags: ['mind-behaviour', 'health'],
    imageUrl: perplexedMind,
    hosts: [avatar1, avatar2],
  },
  {
    id: 2,
    number: '2',
    title: 'Social Class',
    subtitle: 'Type of Social Classes of People',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    category: 'Education',
    tags: ['social class', 'wealth'],
    imageUrl: socialClass,
    hosts: [avatar1, avatar2],
  },
  {
    id: 3,
    number: '3',
    title: 'Self-confidence',
    subtitle: 'How to Deal with Self-Confidence',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    category: 'Health',
    tags: ['self-esteem', 'health'],
    imageUrl: selfConfidence,
    hosts: [avatar1, avatar2],
  },
  {
    id: 4,
    number: '4',
    title: "Women's Rights",
    subtitle: "Women's Rights? Is it alright?",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    category: 'Education',
    tags: ["women's rights"],
    imageUrl: womensRights,
    hosts: [avatar1, avatar2],
  },
  {
    id: 5,
    number: '5',
    title: 'Tesla Autopilot',
    subtitle: 'Tesla Autopilot Controversy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    category: 'Tech',
    tags: ['automation', 'tech'],
    imageUrl: teslaAutopilot,
    hosts: [avatar1, avatar2],
  },
  {
    id: 6,
    number: '6',
    title: 'COVID-19 Endemic',
    subtitle: 'Pandemic Becoming Endemic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    category: 'Health',
    tags: ['covid-19', 'health'],
    imageUrl: covid19Endemic,
    hosts: [avatar1, avatar2],
  },
]
