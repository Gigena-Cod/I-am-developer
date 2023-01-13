interface Skill {
  name: string;
  url: string;
  image: string;
}

interface SkillsProps {
  skillsArray: Skill[];
}
const SkillsComponent: React.FC<SkillsProps> = ({ skillsArray }) => {
  return (
    <div className="flex  mt-5 flex-wrap gap-8 section">
      {skillsArray.map((_skill: Skill, index) => (
        <a
          key={index}
          target="_blank"
          href={_skill.url}
          className="transition w-16 h-16 hover:shadow hover:shadow-slate-400  shadow-inherit ease-in-out duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center  bg-white bg-opacity-30 html"
        >
          <img
            title={_skill.name}
            className="w-10 h-fit"
            src={_skill.image}
            alt={_skill.name}
          />
        </a>
      ))}
    </div>
  );
};

export default SkillsComponent;
