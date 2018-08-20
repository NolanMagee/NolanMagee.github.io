module.exports = {
  title: 'Nolan Magee',
  header: "Hi, I'm Nolan Magee",
  description: "I'm a student studying Computer Engineering up at SFU. I practice full stack web development, focusing on React and Node. Check out some stuff I made!",
  name: 'Nolan Magee',
  footerTitle: 'Software Engineer',
  email: 'nmagee@sfu.ca',
  cta: {
    label: 'Get my resume',
    url: 'resume.pdf',
  },
  socials: [
    { icon: 'twitter', url: '//' },
    { icon: 'github-circled', url: '//' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    { icon: 'dribbble', url: '//' },
    { icon: 'skype', url: '//' },
    { icon: 'linkedin-squared', url: '//' },
  ],
  projects: [
    {
      name: 'Chat with Redux',
      description: 'This chat app uses React/Redux with Websockets, allowing multiple users to communicate in real time. Open multiple tabs to test it out!',
      tags: ['React', 'Javascript', 'Redux', 'WebSocket'],
      alt: 'Combustion Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'combustion.png',
      url: 'https://fast-refuge-84984.herokuapp.com/'
    },
    {
      name: "What's Here?",
      description: 'Select a place anywhere on the globe to see what is going on there!',
      tags: ['React', 'Firebase'],
      img: 'merc-01.png',
      url: 'https://whatshere-1529274273415.firebaseapp.com/'
    }
  ],
  experiences: [
    {
      title: 'QA Co-op at Spot Solutions',
      timeline: 'Sep 2016 - Dec 2016',
      description: 'Tested for bugs and implemented fixes with HTML and CSS on Sharepoint based sites',

    }
    /*,
    {
      title: 'Fullstack Software Engineer at Company B',
      timeline: 'Feb 2015 - Dec 2015',
      responsibilities: [
        'Worked with a global team of developers and artists for the implementation of new features in Existing Codebase of a Free-to-play MMO',
        'Increased rate of tickets/tasks done by the team up to 300% within first few weeks!',
        'Added Abstractions on Server API to Minimize Duplicate Code'
      ]
    }
    */
  ],
  testimonials: [
    {
      quote: 'Incredibly talented and hardworking. A super friendly guy who is a frequent communicator',
      name: 'Person Name',
      title: 'CEO at Company'
    },
    {
      quote: 'Wow, thank you for this, you probably have the most intuitive explanation for this problem!',
      name: 'Person Name'
    }
  ]
}
