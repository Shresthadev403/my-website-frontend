import proileImage from '../assets/profile-no-bg.png';
import backgroundProfileImage from '../assets/background.png';

import { BsDash } from 'react-icons/bs';

function Home() {
  return (
    <>
      <div className="flex h-96 flex-col md:flex-row">
        {/* introduction part */}

        <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center ml-0 p-2 md:ml-24">
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
          <div className="mt-10">
            <button className="bg-red-munsell text-ghost-white px-2 py-1">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center  ">
          <div
            className=""
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
    </>
  );
}

export default Home;
