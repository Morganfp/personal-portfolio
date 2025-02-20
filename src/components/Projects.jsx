import '../styles/global.css';
import { FaLink } from 'react-icons/fa6';
import fuelAIImg from '../assets/projects/fuel-ai.png';
import movieHubImg from '../assets/projects/movie-hub.png';
import expendoImg from '../assets/projects/expendo.png';
import coachesCornerImg from '../assets/projects/coaches-corner.png';
import ekoChatbotImg from '../assets/projects/eko-chatbot.png';
import moWeatherImg from '../assets/projects/mo-weather.png';
import cloudyCastImg from '../assets/projects/cloudy-cast.png';
import mistyAIImg from '../assets/projects/misty-ai.png';
import novamindImg from '../assets/projects/novamind.png';
import frankieAIImg from '../assets/projects/frankie-ai.png';

function Projects() {
  const projects = [
    {
      image: fuelAIImg,
      name: 'Fuel AI',
      link: 'https://gofuel.ai',
      about:
        'Fuel AI is a data marketplace where companies request custom datasets, and users earn by collecting data. As a Founding Full Stack Engineer, I helped build and scale the platform, growing the user base from 0 to 10,000+ across 100+ countries.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg',
      ],
    },
    {
      image: movieHubImg,
      name: 'Movie Hub',
      link: 'https://github.com/Morganfp/movie-hub',
      about:
        'A movie discovery application that allows users to search for movies by title and view key details such as release year, rating, and cover images. Built with React, this app offers a clean, responsive UI and seamless integration with the Movie Database (TMDB) API.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
      ],
    },
    {
      image: expendoImg,
      name: 'Expendo',
      link: 'https://github.com/Morganfp/expendo-finance-tracker',
      about:
        'A finance tracking application that helps users manage their finances by recording income and expenses. Built with React, this app features light/dark mode, persistent data storage, and intuitive transaction management.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
      ],
    },
    {
      image: coachesCornerImg,
      name: 'Coaches Corner',
      link: null,
      about:
        'I worked as a backend engineer with a team of 5 to build a scalable web application using Django, Python, and MySQL in an Agile environment, efficiently tracking and visualizing over 1,100 athlete performance metrics at Lindenwood University.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg',
      ],
    },
    {
      image: moWeatherImg,
      name: 'MoWeather',
      link: 'https://github.com/Morganfp/moweather-weather-app',
      about:
        'A weather app that allows users to search for locations and view the current weather, including temperature, city, and country. Built with React, this app fetches weather data from the Open-Meteo API and location data from OpenStreetMap.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
      ],
    },
    {
      image: ekoChatbotImg,
      name: 'Eko',
      link: 'https://github.com/Morganfp/eko-chatbot',
      about:
        'Eko Chatbot is a customizable customer support chatbot widget built with React, TypeScript, Python, and FastAPI. Designed to help businesses automate responses to common inquiries, Eko enables efficient customer interactions without the need for AI models.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg',
      ],
    },
    {
      image: novamindImg,
      name: 'Novamind',
      link: 'https://github.com/Morganfp/novamind-ai-mobile-chatbot',
      about:
        'A mobile application that utilizes the OpenAI API to provide users with a conversational AI experience. The app features a user-friendly interface with an intuitive design that allows users to interact with the AI in a natural and seamless way.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
      ],
    },
    {
      image: frankieAIImg,
      name: 'Frankie AI',
      link: 'https://github.com/Morganfp/frankie-ai',
      about:
        'A locally hosted AI chatbot built to allow users to utilize multiple models, including Llama 3.1, Phi 3, Mistral, Gemma 2, and more. It runs entirely without an internet connection, featuring an intuitive interface and supporting diverse use cases.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg',
      ],
    },
    {
      image: cloudyCastImg,
      name: 'Cloudy Cast',
      link: 'https://github.com/Morganfp/cloudy-cast-media-converter',
      about:
        'A desktop application that utilizes the OpenCV and MoviePY Python libraries to convert between image and video formats such as jpg to png, mp4 to mov, and mkv to mp4.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg',
      ],
    },
    {
      image: mistyAIImg,
      name: 'Misty',
      link: 'https://github.com/Morganfp/Misty-AI-Random-Fact',
      about:
        'A program that automates a web search using the Puppeteer Node.js library to scrape facts about the 50 US states and has the Misty robot speak a random fact using the Google text-to-speech API.',
      tech: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center mx-6 text-center md:mx-26">
        <h1 className="section-title pt-5">My Projects</h1>
        {/* Projects */}
        <div className="md:flex md:flex-wrap">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:w-[50%] md:mb-24"
            >
              <img
                src={proj.image}
                alt="Project Screenshot"
                className="w-[80%] rounded md:w-[65%]"
              />
              <div className="flex items-center gap-3 mt-4 mb-1 md:mt-5 md:mb-2">
                <h2 className="section-subtitle">{proj.name}</h2>
                {proj.link ? (
                  <button
                    onClick={() => window.open(proj.link)}
                    className="bg-[#00FFBB] py-1 px-2 rounded-2xl transform transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    <FaLink color="#212121" size={14} />
                  </button>
                ) : null}
              </div>
              <p className="section-text w-[90%] md:w-[75%]">{proj.about}</p>
              <div className="flex gap-3 mt-4 mb-2 md:mb-3 ">
                {proj.tech.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Tech Icon ${icon}`}
                    className="w-8 md:w-10"
                  />
                ))}
              </div>
              {index < projects.length - 1 ? (
                <hr className="w-[100%] border-t-1 border-slate-500 rounded-full my-12 mx-6 md:hidden" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
