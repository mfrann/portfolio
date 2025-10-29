import '../styles/about.css'
import myImg from '/assets/mee.png';
import { motion } from "framer-motion";
import { Skill } from '../plugins/skills'


export function About(){
    return(
        <div className='about' id='about' >
            <div className='title'>
                <h1>About</h1>
            </div>
            <div className='main-content'>
                <div className='content'>
                    <motion.div
                    initial={{ x: -100, opacity: 0 }}      // empieza fuera de vista (izquierda)
                    whileInView={{ x: 0, opacity: 1 }}     // aparece en su posición
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}              // se anima solo una vez al entrar en pantalla
                    >   
                    <div className='me'>
                        <h1>💻 Desarrollador Web</h1>
                        <br />
                        <p className='about-me-p'>
                            <p>🎓 Estudiante de <span>Ingenieria de Software</span> en la UPC.</p>
                            <p>🚀 Actualmente tomo cursos en línea para mejorar mis habilidades y especializarme en desarrollo web.</p>
                            <p>💼 Estudio inglés en Británico para ampliar mis oportunidades profesionales.</p>
                            <p>🏀 En mi tiempo libre, disfruto jugar baloncesto y tocar la guitarra para relajarme y expresarme.</p>
                        </p>
                    </div>
                    </motion.div>

                    <motion.div
                    initial={{ x: 100, opacity: 0 }}      // empieza fuera de vista (izquierda)
                    whileInView={{ x: 0, opacity: 1 }}     // aparece en su posición
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}              // se anima solo una vez al entrar en pantalla
                    style={{ maxWidth: "auto", height: "auto"}}
                    >   
                    <div className='img'>
                        <img src={myImg} alt="" />
                    </div>
                    </motion.div>

                </div>
            </div>
            <motion.div
            initial={{ y: 100, opacity: 0 }}      // empieza fuera de vista (izquierda)
            whileInView={{ y: 0, opacity: 1 }}     // aparece en su posición
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}              // se anima solo una vez al entrar en pantalla
            >   
            <div className='skills'>
                <div className='skills2'>
                <Skill
                h1="Basketball"
                p="Me gusta practicar este deporte como distraccion 
                fuera de la programacion y mantenerme en forma."
                />
                
                <Skill
                h1="Musica"
                p=" La musica es una gran parte de mi vida, me ayuda a ser mas creativo, es un pasatiempo 
                que disfruto como tocar guitarra."
                />

                <Skill
                h1="Programacion"
                p="Es una de mis actividades favoritas, porque me diverto creando 
                buenas interfaces y resolviendo problemas."
                />               

                </div>
            </div>
            </motion.div>
        </div>
    );
}