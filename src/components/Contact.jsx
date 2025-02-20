import '../styles/global.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center mx-6 text-center md:mx-26">
        <h1 className="section-title mt-0">Contact Me</h1>
        <div className="flex gap-12 md:gap-30">
          <a
            href="https://www.linkedin.com/in/morganfpurcell"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:text-[#00FFBB] transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-[50px] md:text-[80px]" />
            <p className="text-sm md:text-xl font-semibold">LinkedIn</p>
          </a>

          <a
            href="mailto:morganfpurcell@gmail.com"
            className="flex flex-col items-center gap-2 hover:text-[#00FFBB] transition-all duration-300 transform hover:scale-110"
          >
            <MdEmail className="text-[50px] md:text-[80px]" />
            <p className="text-sm md:text-xl font-semibold">Email</p>
          </a>

          <a
            href="https://www.github.com/Morganfp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:text-[#00FFBB] transition-all duration-300 transform hover:scale-110"
          >
            <FaGithubSquare className="text-[50px] md:text-[80px]" />
            <p className="text-sm md:text-xl font-semibold">GitHub</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
