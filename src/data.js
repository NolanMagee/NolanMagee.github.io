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
    //{ icon: 'twitter', url: '//' },
    { icon: 'github-circled', url: 'https://github.com/NolanMagee' },
    //{ icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    //{ icon: 'dribbble', url: '//' },
    //{ icon: 'skype', url: '//' },
    { icon: 'linkedin-squared', url: 'https://www.linkedin.com/in/nolan-magee' },
  ],
  projects: [

    {
      name: "MongoMart",
      description: 'An ecommerce platform using MongoDB. Search, browse, and add items to cart! It connects to my database cluster hosted on MongoDB Atlas. (May have to refresh the page due to Heroku free hosting)',
      tags: ['Express', 'MongoDB', 'Nunjucks'],
      img: 'MongoMart.PNG',
      url: 'https://still-mountain-47794.herokuapp.com/'
    },
    {
      name: "What's Here?",
      description: 'Select a place anywhere on the globe to see what is going on there! Uses my own Google Firebase Cloud Function to perform the Oauth necessary for the Twitter API',
      tags: ['React', 'Firebase'],
      img: 'whatshere.PNG',
      url: 'https://whatshere-1529274273415.firebaseapp.com/'
    },
    {
      name: 'Chat with Redux',
      description: 'This chat app uses Node WebSocket server with React/Redux , allowing multiple users to communicate in real time. Open multiple tabs to test it out!',
      tags: ['React', 'Javascript', 'Redux', 'WebSocket'],

      img: 'chatredux.PNG',
      url: 'https://fast-refuge-84984.herokuapp.com/'
    }

  ],
  experiences: [
    {
      title: 'IT Help Desk Technician at Mark Anthony Group',
      timeline: 'Sep 2017 - Jan 2018',
      description: 'Communicated with a team of technicians to troubleshoot complex software, hardware, and network issues for staff over multiple departments in a timely manner'
    },
    {
      title: 'QA / Junior Developer Co-op at Spot Solutions',
      timeline: 'Sep 2015 - Dec 2015',
      description: 'Tested for bugs and implemented fixes with HTML and CSS on Sharepoint based sites',

    }

  ],
  testimonials: [

    {
      quote: 'A capable, intelligent worker. He is very handsome too',
      name: "Nolan's Mom"
    }
  ]
}
