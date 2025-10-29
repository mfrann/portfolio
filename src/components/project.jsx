import '../styles/project.css'
import {Github, Link} from 'lucide-react';

export function Project({title, desc, img, i1, i2, url, url2}){

    const gitLink = () => {
        window.open(url2, "_blank"); // Opens in a new tab
    };

    const liveLink = () => {
        window.open(url, "_blank"); // Opens in a new tab
    };

    return(
        <div className='pj'>
            <img src={img} alt="" id='image' />
            <div className='content-pj'>
                <div className='text-pj'>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
                <div className='icons'>
                    <div className='img-1'>
                        <img src={i1} alt="javascript" />
                        JavaScript
                    </div>

                    <div className='img-1'>
                        <img src={i2} alt="react" /> 
                        React Js
                    </div>               
                </div>
                <div className='btns'>
                    <button onClick={gitLink} ><Github /> Github</button>
                    <button onClick={liveLink} ><Link /> Link</button>
                </div>
            </div>

        </div>
    );
} 