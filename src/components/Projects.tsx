'use client';

const projects = [
  {
    title: "Jump Up For Kids Australia",
    description: "Website development for Jump Up For Kids Australia",
    image: "/images/projects/jumpup-screenshot.jpg",
    technologies: ["Joomla", "PHP", "CSS", "HTML5", "JS"],
    link: "https://www.jumpupforkids.com.au/",
    launchYear: "2021"
  },
  {
    title: "Westridge Dental Australia",
    description: "Website development for Westridge Dental Australia",
    image: "/images/projects/westridge-screenshot.jpg",
    technologies: ["WordPress", "PHP", "CSS", "HTML5", "JS"],
    link: "https://www.westridgedental.com.au/",
    launchYear: "2021"
  },
  {
    title: "My Dream VA",
    description: "Website development with Podio API integration",
    image: "/images/projects/mydreamva-screenshot.jpg",
    technologies: ["Joomla", "PHP", "CSS", "HTML5", "JS", "Podio API"],
    link: "https://www.mydreamva.com/",
    launchYear: "2019"
  },
  {
    title: "SM Cinema",
    description: "Cinema management system development",
    image: "/images/projects/smcinema-screenshot.png",
    technologies: ["ASP.NET C#", "HTML5", "JS", "PHP"],
    link: "https://www.smcinema.com/",
    launchYear: "2018"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex-shrink-0 bg-gray-100">
      <img 
        className="h-64 w-full object-cover" 
        src={project.image} 
        alt={project.title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/images/projects/placeholder.svg';
        }}
      />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white p-6">
      <div className="flex-1">
        <p className="text-sm font-medium text-blue-600">
          Launched: {project.launchYear}
        </p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 block">
          <p className="text-xl font-semibold text-gray-900">{project.title}</p>
          <p className="mt-3 text-base text-gray-500">{project.description}</p>
        </a>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;