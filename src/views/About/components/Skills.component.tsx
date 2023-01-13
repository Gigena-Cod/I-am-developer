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
      image: "/src/assets/tecno/html.png",
    },
    {
      name: "CSS",
      url: "https://developer.mozilla.org/es/docs/Web/CSS",
      image: "/src/assets/tecno/CSS.png",
    },
    {
      name: "SASS",
      url: "https://sass-guidelin.es/es/",
      image: "/src/assets/tecno/sass.png",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      image: "/src/assets/tecno/tailwindcss.png",
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      image: "/src/assets/tecno/javaScript.png",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/es/",
      image: "/src/assets/tecno/Typescript.png",
    },
    {
      name: "Vue",
      url: "https://vuejs.org/",
      image: "/src/assets/tecno/vue.png",
    },
    {
      name: "React",
      url: "https://es.reactjs.org/",
      image: "/src/assets/tecno/React.png",
    },
    {
      name: "Angular",
      url: "https://angular.io/docs",
      image: "/src/assets/tecno/angular.png",
    },
  ];

  const backend: Skill[] = [
    {
      name: "Node JS",
      url: "https://nodejs.org/es/",
      image: "/src/assets/tecno/node.avif",
    },
    {
      name: "Express",
      url: "https://expressjs.com/",
      image: "/src/assets/tecno/express.png",
    },
    {
      name: "Mongo",
      url: "https://www.mongodb.com/",
      image: "/src/assets/tecno/mongo.avif",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/es/",
      image: "/src/assets/tecno/Typescript.png",
    },
  ];
  const others: Skill[] = [
    {
      name: "Npm",
      url: "https://www.npmjs.com/",
      image: "/src/assets/tecno/npm.avif",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      image: "/src/assets/tecno/git.png",
    },
    {
      name: "Heroku",
      url: "https://www.heroku.com/",
      image: "/src/assets/tecno/heroku.png",
    },
    {
      name: "Postman",
      url: "https://www.postman.com/",
      image: "/src/assets/tecno/postman.avif",
    },
    {
      name: "Sourcetree",
      url: "https://www.sourcetreeapp.com/",
      image: "/src/assets/tecno/Sourcetree.png",
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
