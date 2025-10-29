import "../styles/portfolio.css";
import "../App.css";
import pj1 from "/assets/img/1.png";
import pj2 from "/assets/img/2.png";
import pj3 from "/assets/img/3.png";
import pj4 from "/assets/img/4.png";

import Js from "/assets/icons/js.svg";
import Re from "/assets/icons/react.svg";

import { Project } from "./project.jsx";

export function Portfolio() {
  return (
    <div className="main-container-pj" id="portfolio">
      <div className="title">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="pj-container">
        <Project
          img={pj1}
          title="Huaca Pucllana Restaurante"
          desc="Sitio web no oficial del restaurante Huaca Pucllana(Peru), trabaje en un rediseño del sitio web y implementar 
          responsive para moviles."
          i1={Js}
          i2={Re}
          url="https://huacapucllana.vercel.app/"
          url2="https://github.com/mfrann/huaca-pucllana"
        />

        <Project
          img={pj2}
          title="Lima Outlet Store"
          desc="Un catálogo virtual de gadgets y productos (en proceso), con una interfaz limpia y filtros de categorías para mejorar la experiencia del usuario."
          i1={Js}
          i2={Re}
          url="https://lima-outlet.vercel.app/"
          url2="https://github.com/mfrann/lima-outlet"
        />

        <Project
          img={pj3}
          title="Task List"
          desc="Una aplicación de lista de tareas minimalista con un tema oscuro, diseñada para una gestión de tareas intuitiva."
          i1={Js}
          i2={Re}
          url="https://tasklistss.vercel.app/"
          url2="https://github.com/mfrann/task-list"
        />

        <Project
          img={pj4}
          title="Poke API"
          desc="Una app en React que consume la PokeAPI,
                    muestra nombre, tipo, estadísticas e imágenes de cada Pokémon, interfaz clara y responsive.
"
          i1={Js}
          i2={Re}
          url="https://pokeeappi.vercel.app/"
          url2="https://github.com/mfrann/poke-api"
        />
      </div>
    </div>
  );
}
