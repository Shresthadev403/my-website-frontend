// Carousel.js
import './Carousel3D.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react'; // Import useState hook for managing state

interface Project {
  title: string;
  description: string;
  image: string;
}

interface Carousel3DProps {
  projects: Project[];
}

const Carousel3D: React.FC<Carousel3DProps> = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current: number, next: number) => {
      console.log(`Current slide: ${current}`);
      setCurrentSlide(next); // Update current slide index before slide change
    },
  };

  return (
    <div className="relative w-11/12">
      <Slider {...settings}>
        {projects.map((project: Project, index: number) => (
          <div
            className={`w-22 h-auto opacity-0.95 ${index < currentSlide ? 'side-card-left' : ''} ${index > currentSlide ? 'side-card-right' : ''}`}
          >
            <div
              key={index}
              className={`  md:m-0 md:mt-8 lg:m-10 relative transform transition-transform duration-300 hover:scale-105 ${
                index !== currentSlide ? 'tilted-card' : ''
              } `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel3D;
