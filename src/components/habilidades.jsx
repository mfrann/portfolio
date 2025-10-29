import '../styles/habilidades.css'
import '../App.css'

import { Carousel } from '../plugins/carousel.jsx'

export function Habilidades(){
    return(
        <div className='main-container-hb'>
            <div className='title'>
                <h1>SKILLS</h1>
            </div>

            <Carousel />

        </div>
    );
}