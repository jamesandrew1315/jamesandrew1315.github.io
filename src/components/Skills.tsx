'use client';

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
    ]
  },
  {
    category: "Backend",
    techs: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ]
  },
  {
    category: "CMS",
    techs: [
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "Joomla", icon: "/images/icons/joomla.svg" }
    ]
  },
  {
    category: "Tools",
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  }
];

const SkillCard = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-16 h-16 flex items-center justify-center">
      <img src={icon} alt={name} className="w-12 h-12 object-contain" />
    </div>
    <span className="mt-2 text-sm font-medium text-gray-700">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <div className="space-y-8">
      {skills.map((skillGroup, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">{skillGroup.category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillGroup.techs.map((tech, techIndex) => (
              <SkillCard key={techIndex} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;