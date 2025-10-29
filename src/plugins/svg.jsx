import '../styles/carousel.css'

export function Svg({img, title, wd, hg}){
    return(
        <div className="sk-container">
            <div className='sk-desc'>
                <h1>{title}</h1>
            </div>

            <div className='sk-icon'>
                <img src={img} alt="svg" 
                width={wd} height={hg}
                />
            </div>
        </div>
    );
}