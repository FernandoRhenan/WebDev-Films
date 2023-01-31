import styles from './More.module.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import key from "../../apikey/key"
import {AiOutlineLink} from 'react-icons/ai'

const More = () => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'
  const [data, setData] = useState({})
  const [genres, setGenres] = useState([])
  const [languages, setLanguages] = useState([])
  const [companies, setCompanies] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
      .then(res => res.json())
      .then(res => {
        setData(res)
        setGenres(res.genres)
        setLanguages(res.spoken_languages)
        setCompanies(res.production_companies)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [id])

  //  release_date

  return (
    <div className={styles.moreContainer}>
      <div className={styles.filmProfile}>
        <div className={styles.imgArea}>
          <a target='_blank' rel='noopener noreferrer' href={data.homepage}><AiOutlineLink/> Official site</a>
          <img alt='poster' src={`${imgUrl}${data.poster_path}`} ></img>
        </div>

        <div className={styles.details}>
          
          <h1>{data.original_title}</h1>

          <div className={styles.overview}>
            <p>{data.overview}</p>
          </div>

          <div className={styles.infos}>
            <div className={styles.tags}>
              <ul>
                {genres && genres.map((item) => (
                  <li key={item.id}>#{item.name}</li>
                ))}
              </ul>
            </div>

            <div className={styles.languages}>
              <span>Avaible in:</span>
              <ul>
                {languages && languages.map((item) => (
                  <li className={styles.box} key={item.name}>{item.english_name}</li>
                ))}
              </ul>
            </div>

            <div className={styles.duration}>
              <span style={{ display: 'block' }}>Duration:</span>
              <span style={{ display: 'inline-block' }} className={styles.box}>{data.runtime} minutes</span>
            </div>

            <div className={styles.date}>
              <span style={{ display: 'block' }}>Released:</span>
              <span style={{ display: 'inline-block' }} className={styles.box}>{data.release_date}</span>
            </div>

          </div>

        </div>
      </div>
      <div>
        <div className={styles.companies}>
          <ul>
            {companies.map((item) => (
              <li key={item.id} ><img alt='company-logo' src={`${imgUrl}${item.logo_path}`}></img></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default More