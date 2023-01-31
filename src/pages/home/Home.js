import styles from './Home.module.css'
import key from '../../apikey/key'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar';

const Home = () => {

    const imgUrl = 'https://image.tmdb.org/t/p/w500/'
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
            .then(res => res.json())
            .then(res => setList(res.results))
            .catch(err => console.log(err))

    }, [])
    console.log(list)
    return (
        <div className={styles.homeContainer}>
            <NavBar />
            <span>
                <h1>
Look the top movies of the moment here</h1>
            </span>

            <div>
                <ul className={styles.cards}>
                    {list.map((item) => (
                        <li key={item.id}>
                            <Link to={`/movie/${item.id}`}>
                            <div className={styles.card}>
                                <img alt='poster' src={`${imgUrl}${item.poster_path}`}></img>
                                <span>{item.original_title}</span>
                            </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Home