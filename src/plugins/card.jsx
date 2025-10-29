import '../styles/about.css'

export function Card({img, h1, p}){
    return(
        <div className='card'>
            <div className='img'>
                <img src= {img} alt="photo-unmsm" />
            </div>
            <div className='card-content'>
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
    );
}