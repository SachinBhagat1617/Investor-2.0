import React, { useState } from "react";

const Ongoing = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://static.horiba.com/fileadmin/Horiba/_processed_/5/7/csm_Header-LCA_2d69e4d07e.png",
      title: "Project 1",
      description: "Description of Project 1",
    },
    {
      id: 2,
      image:
        "https://media.licdn.com/dms/image/D5612AQEb36ucOsc7xQ/article-cover_image-shrink_720_1280/0/1660212129799?e=2147483647&v=beta&t=msNXVxNSoyGl_fWRF1m2fAiloRSafKZTqOMe_EMLJj4",
      title: "Project 2",
      description: "Description of Project 2",
    },
    {
      id: 3,
      image: "https://almondzglobalinfra.com/media/media/570314353_eia.jpg",
      title: "Project 3",
      description: "Description of Project 3",
    },
    {
      id: 4,
      image: "https://baesg.com/wp-content/uploads/2021/03/002.jpg",
      title: "Project 4",
      description: "Description of Project 4",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/green-renewable-environment-social-impact-save-planet-eco-life-concept-generative-ai_159242-23886.jpg",
      title: "Project 5",
      description: "Description of Project 5",
    },
    {
      id: 6,
      image: "https://equippp.in/wp-content/uploads/2022/04/impact_Bonds.jpg",
      title: "Project 6",
      description: "Description of Project 6",
    },
    {
      id: 7,
      image:
        "https://crowdfundedcures.org/wp-content/uploads/2022/03/traditional-bonds-diagram-crowd-funded-cures-1024x632.jpg",
      title: "Project 7",
      description: "Description of Project 7",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="relative top-8">
      <h2 className="text-center text-3xl font-semibold mb-4">
        Ongoing Projects
      </h2>
      <div className="flex justify-center space-x-4 overflow-hidden">
        {projects.slice(currentIndex, currentIndex + 4).map((project) => (
          <div
            key={project.id}
            className="w-1/4 relative overflow-hidden rounded"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-72"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <button className="mt-2 px-4 py-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-75">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default Ongoing;
