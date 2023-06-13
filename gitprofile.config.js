// gitprofile.config.js

const config = {
  github: {
    username: 'zz9tf', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zheng-zheng-082420217/',
    github: 'zz9tf',
    instagram: 'selfchicken',
    medium: 'zz9tf',
    website: 'https://zz9tf.github.io/zheng_website/',
    phone: '5732021823',
    email: 'zhengzheng@brandeis.edu',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1LSZNBsRuzxueb5jU37DamhZ_xQwQvl7r/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'HTML/CSS',
    'JavaScript',
    'R',
    'C',
    'SQL',
    'CMD',
    'Latex',
    'Linux',
    'GitHub',
    'Docker',
    'Nginx',
    'Certbot',
    'React.js',
    'React Native',
    'Express',
    'Django',
    'VS code',
    'Eclipse',
    'AWS',
    'Godaddy',
    'MongoDB',
    'Google OAuth',
    'Stripe',
    'Pytorch',
    'Tensorflow',
    'Pandas',
    'Numpy',
    'Matplotlib',
    'babel.js',
    'nodemon',
    'bootstrap',
    'Redux',
    'Machine Learning',
    'Deep learning',
    'Natural Language Processing',
    'GPT models',
    'web scraping'
  ],
  experiences: [
    {
      company: 'Brandeis Computer Science Department',
      position: 'Teaching Assistant with Prof. Timothy J Hickey',
      from: 'May 2022',
      to: 'Current',
      companyLink: 'https://www.brandeis.edu/computer-science/',
    },
    {
      company: 'Brandeis Computer Science Department',
      position: 'Research Assistant with Prof. Pengyu Hong',
      from: 'Feb 2019',
      to: 'Current',
      companyLink: 'https://www.brandeis.edu/computer-science/',
    }, 
    {
      company: 'Brandeis Computer Science Department',
      position: 'Teaching Assistant with Prof. Timothy J Hickey',
      from: 'Aug 2022',
      to: 'Dec 2022',
      companyLink: 'https://www.brandeis.edu/computer-science/',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Brandeis University',
      degree: 'Master of Science in Computer Science',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Missouri University of Science and Technology',
      degree: 'Bachelor of Science in Geology and Geophysics',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'zz9tf', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
