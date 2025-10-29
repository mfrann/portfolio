import '../styles/portfolio.css'
import '../App.css'
import pj1 from '/assets/img/p1.webp'
import pj2 from '/assets/img/p2.webp'
import pj3 from '/assets/img/p3.webp'

import Js from '/assets/icons/js.svg';
import Re from '/assets/icons/react.svg';

import { Project } from './project.jsx'

export function Portfolio(){
    return(
        <div className="main-container-pj" id='portfolio'>
            <div className='title'>
                <h1>PORTFOLIO</h1>
            </div>
            <div className='pj-container'>
                <Project
                img={pj1}
                title="Lima Outlet Store"
                desc="Un catálogo virtual de gadgets y productos, con una interfaz limpia y filtros de categorías para mejorar la experiencia del usuario."
                i1={Js}
                i2={Re}
                url="https://limaoutlet.netlify.app/"
                url2="https://github.com/mfrann/practice_webs/tree/main"
                />
                
                <Project
                img={pj2}
                title="Task List"
                desc="Una aplicación de lista de tareas minimalista con un tema oscuro, diseñada para una gestión de tareas intuitiva."
                i1={Js}
                i2={Re}
                url="https://ssggsf.netlify.app/"
                url2="https://github.com/mfrann/practice_webs/tree/main/TaskList"
                />

                <Project
                img={pj3}
                title="Poke API"
                desc="Una app en React que consume la PokeAPI,
                    muestra nombre, tipo, estadísticas e imágenes de cada Pokémon, interfaz clara y responsive.
"
                i1={Js}
                i2={Re}
                url="https://pokedexapidev.netlify.app/"
                url2="https://github.com/mfrann/practice_webs/tree/main/Pokedex"
                />
            </div>
        </div>
    );
}