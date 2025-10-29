import '../styles/skills.css'


export function Skill({h1,p}){
    return(
        <div className="card">
            <div className="header-card">
                <p>me</p>
            </div>
            <div className="text-card">
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
        </div>
    );
}