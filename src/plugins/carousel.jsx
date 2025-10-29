import '../styles/carousel.css'
import {Svg} from './svg'
import Html from '/assets/icons/html.svg';
import Css from '/assets/icons/css.svg';
import Js from '/assets/icons/js.svg';
import Re from '/assets/icons/react.svg';
import Fg from '/assets/icons/figma2.svg';
import Gh from '/assets/icons/github.svg';
import Gt from '/assets/icons/git.svg';
import Open from '/assets/icons/openai.svg';
import Vs from '/assets/icons/vscode.svg';

export function Carousel(){
    return(
        <div className="main-container-c">
            <div className='content-leng'>
                <div className='content-leng-text'>
                    <p className='exp'>1y - experiencia</p>
                    <h1>Front-End...</h1>
                    <p>Estos son todos los lenguajes de programación con 
                        los que tengo experiencia. 
                        Certificación pendiente.
                    </p>
                </div>
                <div className='content-leng-img'>
                    <Svg
                    img={Html}
                    title={'HTML'}
                    wd={40} 
                    hg={40}
                    />
                    <Svg
                    img={Css}
                    title={'CSS'}
                    wd={40} 
                    hg={40}
                    /> 
                    <Svg
                    img={Js}
                    title={'JavaScript'}
                    wd={40} 
                    hg={40}
                    />
                    <Svg
                    img={Re}
                    title={'React Native'}
                    wd={40} 
                    hg={40}
                    />    
                </div>                       
    
            </div>

            <div className='content-leng'>
                <div className='content-leng-text'>
                    <p className='exp'>2y - experiencia</p>
                    <h1>DevTools...</h1>
                    <p>Herramientas con las que trabajo para 
                        implementar las aplicaciones y probarlas.</p>
                </div>
                <div className='content-leng-img'>
                    <Svg
                    img={Gh}
                    title={'GitHub'}
                    wd={40} 
                    hg={40}
                    />
                    <Svg
                    img={Gt}
                    title={'Git'}
                    wd={40} 
                    hg={40}
                    /> 
                    <Svg
                    img={Vs}
                    title={'VSCode'}
                    wd={40} 
                    hg={40}
                    />
                    <Svg
                    img={Fg}
                    title={'Figma'}
                    wd={40} 
                    hg={40}
                    />   
                </div>                       
    
            </div>
        </div>
    );
}