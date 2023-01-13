import { FC } from "react";
import SkillsComponent from "./Skill.component";

interface Skill {
  name: string;
  url: string;
  image: string;
}

const SkillsSectionComponent: FC = () => {
  const frontend: Skill[] = [
    {
      name: "HTML",
      url: "https://developer.mozilla.org/es/docs/Web/HTML",
      image: "https://i.ibb.co/TY2JN9h/html.png",
    },
    {
      name: "CSS",
      url: "https://developer.mozilla.org/es/docs/Web/CSS",
      image: "https://i.ibb.co/BzXCxRj/css.png",
    },
    {
      name: "SASS",
      url: "https://sass-guidelin.es/es/",
      image: "https://i.ibb.co/JHnVpMp/sass.png",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      image: "https://i.ibb.co/vZKPYLY/tailwindcss.png",
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      image: "https://i.ibb.co/jkqZ3b2/javascript.png",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/es/",
      image: "https://i.ibb.co/pjDKccs/typescript.png",
    },
    {
      name: "Vue",
      url: "https://vuejs.org/",
      image: "https://i.ibb.co/vJV4Zpt/vue.png",
    },
    {
      name: "React",
      url: "https://es.reactjs.org/",
      image: "https://i.ibb.co/sVQyk90/react.png",
    },
    {
      name: "Angular",
      url: "https://angular.io/docs",
      image: "https://i.ibb.co/nrCtRgX/angular.png",
    },
  ];

  const backend: Skill[] = [
    {
      name: "Node JS",
      url: "https://nodejs.org/es/",
      image: "https://i.ibb.co/NZ4g9ZZ/node.png",
    },
    {
      name: "Express",
      url: "https://expressjs.com/",
      image: "https://i.ibb.co/VJs5ThZ/express.png",
    },
    {
      name: "Mongo",
      url: "https://www.mongodb.com/",
      image: "https://i.ibb.co/rv2DGrZ/mongo.png",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/es/",
      image: "https://i.ibb.co/pjDKccs/typescript.png",
    },
  ];
  const others: Skill[] = [
    {
      name: "Npm",
      url: "https://www.npmjs.com/",
      image: "https://i.ibb.co/DCSP2Q9/npm.png",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      image: "https://i.ibb.co/HG1KL92/git.png",
    },
    {
      name: "Heroku",
      url: "https://www.heroku.com/",
      image: "https://i.ibb.co/MfHJNWP/heroku.png",
    },
    {
      name: "Postman",
      url: "https://www.postman.com/",
      image: "https://i.ibb.co/bdFMyyJ/postman.png",
    },
    {
      name: "Sourcetree",
      url: "https://www.sourcetreeapp.com/",
      image: "https://i.ibb.co/Lh4mYK6/sourcetree.png",
    },
  ];

  return (
    <div className="skills">
      <div className="title text-3xl uppercase font-bold ">Mis habilidades</div>
      <div className="mt-8   content__know-me">
        {/* FRONTEND  */}
        <div className="category">
          <div className="description">
            Tecnologías que utilizo para crear aplicaciones del lado del cliente
          </div>
        </div>
        <div className="flex  mt-5 flex-wrap gap-8 section">
          <SkillsComponent skillsArray={frontend} />
        </div>

        {/* BACKEND  */}
        <div className="mt-8 category">
          <div className="description">
            Tecnologías que utilizo para crear aplicaciones backend rápidas y
            escalables
          </div>
        </div>
        <div className="flex  mt-5 flex-wrap gap-8 section">
          <SkillsComponent skillsArray={backend} />
        </div>

        {/* OTHERS  */}
        <div className="mt-8 category">
          <div className="description">Otros... ¡y más!</div>
        </div>
        <div className="flex  mt-5 flex-wrap gap-8 section">
          <SkillsComponent skillsArray={others} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSectionComponent;
