import proileImage from '../assets/profile-no-bg.png';
import backgroundProfileImage from '../assets/background.png';

import { BsDash } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoIosCall } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import Carousel3D from '../components/header/carouse3d/Carousel3D';

//project image import
// import rupseCoverImage from '../assets/projects/rupse/rupseCoverImage.png';

const projects = [
  {
    title: 'Travel Booking',
    description: 'A world-wide tour booking site',
    image:
      'https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MzZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Library system',
    description: 'A system for library management',
    image:
      'https://images.unsplash.com/photo-1528208079124-a2387f039c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBzaGVsZnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'NFC Bus Payment',
    description: 'Smart GPS based NFC payment system',
    image:
      'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxidXMlMjBwYXltZW50fGVufDB8fDB8fHww',
  },
  {
    title: 'Food Recipe Gen',
    description: 'Generating recipe through ai text and images',
    image:
      'https://media.istockphoto.com/id/1004108530/photo/hand-holding-smartphone-taking-photo-of-beautiful-food-mix-fresh-green-salad.webp?b=1&s=170667a&w=0&k=20&c=0ji92aDcphAAoKyuo5DYTNdMDbAT450aeC57wRY5Y0Q=',
  },

  // Add more projects...
];

function Home() {
  return (
    <div className="relative">
      {/* first section introduction*/}
      <div className="flex  flex-col md:flex-row">
        {/* introduction part */}

        <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center  p-2 md:ml-12 lg:ml-20">
          <h2 className="w-full text-xl font-medium flex items-center ">
            {' '}
            <BsDash /> Hello
          </h2>
          <p className="w-full font-medium text-2xl">
            I am{' '}
            <span className="w-full text-red-munsell font-semibold text-2xl ">
              Jagadish Shrestha
            </span>
          </p>
          <p className="w-full text-sm ">
            Jagadish Shrestha a seasoned software developer renowned for his
            proficiency in backend development, frontend design, and DevOps
            practices, ensuring seamless integration and optimal performance
            across the full software development lifecycle.
          </p>
          <div className="m-6">
            <button className="bg-red-munsell text-ghost-white px-2 py-1">
              DOWNLOAD CV
            </button>
          </div>
          {/* connect section */}
          <div className="flex flex-col gap-1">
            <p className="text-red-munsell text-md font-semibold">
              {"< Lets' Connect />"}
            </p>
            <div className="flex w-28 justify-between  ml-2 ">
              <span>
                <FaFacebook color="#316FF6" size={18} />
              </span>
              <span>
                <FaLinkedin color="#0077b5" size={18} />
              </span>
              <span>
                <FaDiscord color="#5865F2" size={18} />
              </span>
              <span>
                <FaTelegram color="#0088cc" size={18} />
              </span>
              <span>
                <FaGithub color="#333333" size={18} />
              </span>
            </div>
            <div className="flex gap-2 items-center ml-2">
              <SiGmail color="#db4437" size={18} />{' '}
              <p className="text-sm">Jagadishdev403@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center ml-2">
              <IoIosCall color="#008000" size={20} />{' '}
              <p className="text-sm">+9779869194591</p>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="md:w-1/2 flex justify-center  ">
          <div
            style={{
              maxWidth: '600px',
              maxHeight: '400px',
              backgroundImage: `url(${backgroundProfileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              margin: '1rem',
            }}
          >
            {/* sssssssssssssssssssssssssssss */}
            <img
              src={proileImage}
              alt="jagadish shrestha"
              className=" h-full w-full  object-cover "
            />
          </div>
        </div>
      </div>
      {/* second carouse3d section  */}
      <div className="px-6 w-full flex flex-col justify-center items-center  ">
        <h2 className="w-11/12 mb-2 md:mb-0 text-center text-2xl md:text-3xl lg:text-4xl font-semibold ">
          Projects
        </h2>
        <Carousel3D projects={projects} />
        <div className="w-11/12">
          <button className="bg-red-munsell text-ghost-white px-2 py-1 ">
            VIEW MORE PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
