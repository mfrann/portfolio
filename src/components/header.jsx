import '../styles/header.css'


export function Header(){
    return(
        <header className='header'>
            <ul className='nav'>
                <a href="#">home</a>
                <a href="#about">about</a>
                <a href="#portfolio">portfolio</a>
            </ul>
        </header>
    );
}