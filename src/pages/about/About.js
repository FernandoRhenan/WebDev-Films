import NavBar from '../../components/NavBar';
import styles from './About.module.css'

const About = () => {
    return (
        <div>
            <NavBar />
            <div className={styles.aboutContainer}>
                <h1>Sobre esse projeto</h1>
                <p>A ideia principal sobre esse projeto é o consumo de uma API do <a target='_blank' rel='noreferrer noopener' href='https://www.themoviedb.org/'>The Movie Database</a> (TMDB), que é uma API que disponibiliza detalhes sobre filmes e series de televisão como, duração, linguagens disponíveis, estudios entre outras informações.</p>
                <p>Para fazer as requisições utilizei o fetch nativo do JavaScript. Nesse projeto foi usado apenas o verbo HTTP GET, pois essa API é closed source e não permite modificações relevantes.</p>
                <p>O projeto principal se mantém em inglês para manter a originalidade, embora tenha suporte para o português.</p>
            </div>
        </div>
    )
}

export default About