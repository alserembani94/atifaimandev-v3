import { getTools } from './toolbelt';

export const getJourney = () => {
  return [
    {
      "year": 2021,
      "activities": [
        {
          "milestone": "Application Developer @ toyyibPay (Aug)",
          "description": "Extremely excited to work along with the new generation of toyyibPay 😉"
        }
      ]
    },
    {
      "year": 2020,
      "activities": [
        {
          "milestone": "Full Stack Developer @ Qijang Technologies (Sept)",
          "description": "An e-commerce plaform, integrating Lazada, Shopee and others for omnichannel shopping experience. I was also head of two projects, in which I hope it will be launched in future."
        },
        {
          "milestone": "Developed Jombuat 👨‍👩‍👧‍👦",
          "description": "A listing platform, featuring all developers from Malaysia, Indonesia, Singapore and Brunei. Of course, others are welcome too! Starting as a just-an-impromptu hackaton with Fajar Siddiq during JomLaunch annual event, now it is live for everyone!"
        }
      ]
    },
    {
      "year": 2019,
      "activities": [
        {
          "milestone": "Frontend Developer @ SPEZA (Nov)",
          "description": "My first company, working on cryptocurrency trading platform. So excited for my first job!"
        }
      ]
    },
    {
      "year": 2018,
      "activities": [
        {
          "milestone": "Graduated from University of Malaya 👨‍🎓",
          "description": "Alhamdulillah, after 6 years of studies (foundation + bachelors), and now I am a proud graduate of University of Malaya, in Bachelor of Islamic Studies and Information Technology!"
        },
        {
          "milestone": "Embarking React ⚛",
          "description": "A new development milestone for me. One month before working as research assistant, I crunched myself learning React and React Native. It was crazy and worthwhile at the same time!"
        },
        {
          "milestone": "Research Assistant 🔬",
          "description": "My first development experience, developing an app Tahqeeq: Quran Authenticator - checking Quran authenticity. Using React Native ⚛."
        }
      ]
    },
    {
      "year": 2017,
      "activities": [
        {
          "milestone": "Internship @ Aventz Management 📺",
          "description": "Working on motion designs and advertisement strategies, I create videos for ads and billboard. Well, my videos has been in billboards and televisions for football match! How cool is that?"
        }
      ]
    },
    {
      "year": 2016,
      "activities": [
        {
          "milestone": "Founding al-Serembani Studio 📽",
          "description": "Evangelist on graphic and motion design, and produce products for events! I also give talks and workshops."
        },
        {
          "milestone": "2 Time Karate Bronze Medalist 🥉",
          "description": "Participated in Majlis Sukan Universiti Malaysia (MASUM) as karate athlete, bring back bronze for University of Malaya."
        }
      ]
    },
    {
      "year": 2013,
      "activities": [
        {
          "milestone": "Starting Programming Journey 👨‍💻",
          "description": "Taking introductory course for programming, I start my path to my programming journey. For a young blood, I learn C and Python. Kinda missed my lecturer, Mr. Z for his sporting charisma (we are still communicating!)."
        }
      ]
    },
    {
      "year": 2012,
      "activities": [
        {
          "milestone": "Replacement Teacher @ SRI Seremban 👨‍🏫",
          "description": "Taking my time off waiting for foundational study transition from Kelantan to Kuala Lumpur, Malaysia, I work as replacement teacher, teaching science for primary school at my hometown."
        },
        {
          "milestone": "Buying my first own laptop 💻",
          "description": "Using my hard earned money, I bought my first laptop for learning 😊"
        }
      ]
    },
    {
      "year": 2011,
      "activities": [
        {
          "milestone": "Graduated secondary school! 🎓",
          "description": "A proud SMKA Sheikh Hj Mohd Said student, 5-year study experience that I won't get anywhere!"
        }
      ]
    },
    {
      "year": 1994,
      "activities": [
        {
          "milestone": "Born 👶!"
        }
      ]
    }
  ];
};

export const getCareer = () => ([
  {
    "company": "toyyibPay Sdn. Bhd.",
    "position": "Application Developer",
    "url": "https://www.toyyibpay.com/",
    "start": "Aug 2021",
    "end": "Present",
    "logo": "/logo/logo-toyyibpay.webp",
    "description": "Develop and maintain both legacy and new toyyibPay application. Also, work on toyyibPay's new features and improvements.",
    "stacks": ['React', 'Next.js', 'VueJS', 'NestJS', 'Typescript', 'Node.js', 'Tailwind CSS', 'AWS', 'AWS Amplify', 'Material UI'].map(item => getTools(item)),
  },
  {
    "company": "Qijang Technologies Sdn. Bhd.",
    "position": "Full Stack Developer",
    "url": "https://www.qijang.com/",
    "start": "Sept 2020",
    "end": "July 2021",
    "logo": "/logo/logo-qijang.webp",
    "description": "An e-commerce plaform, integrating Lazada, Shopee and others for omnichannel shopping experience. I was also head of two projects, in which I hope it will be launched in future.",
    "stacks": ['React', 'Next.js', 'Node.js', 'AWS', 'Vercel', 'Tailwind CSS'].map(item => getTools(item)),
  },
  {
    "company": "SPEZA (Sinophil Economic Zone Dax Management Sdn. Bhd.)",
    "position": "Frontend Developer",
    "url": "https://www.speza.com/",
    "start": "Nov 2019",
    "end": "March 2020",
    "logo": "/logo/logo-speza.webp",
    "description": "My first company, working on cryptocurrency trading platform. So excited for my first job!",
    "stacks": ['React', 'PostCSS'].map(item => getTools(item)),
  },
  {
    "company": "University of Malaya",
    "position": "Research Assistant (Application Developer)",
    "url": "https://www.um.edu.my/",
    "start": "July 2018",
    "end": "May 2019",
    "logo": "/logo/logo-um.webp",
    "description": "Developing an app Tahqeeq: Quran Authenticator - checking Quran authenticity. Using React Native ⚛.",
    "stacks": ['React', 'Ant Design'].map(item => getTools(item)),
  },
  {
    "company": "Aventz Management Sdn. Bhd.",
    "position": "Intern (Motion & Graphic Designer)",
    "url": "https://www.aventz.com.my/",
    "start": "August 2016",
    "end": "February 2017",
    "logo": "/logo/logo-aventz.webp",
    "description": "Working on motion designs and advertisement strategies, I create videos for ads and billboard. Well, my videos has been in billboards and televisions for football match! How cool is that?",
    "stacks": [].map(item => getTools(item)),
  },
]);
