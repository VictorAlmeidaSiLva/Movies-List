import { useEffect, useState } from "react"
import api from "../../api/api"
import { Container, Movie, MovieList } from "./styles"

function Home() {

   const [ movies, setMovie ] = useState([])
   const image_path = "https://image.tmdb.org/t/p/w500"

   useEffect(() => {
    async function onMovie() {
        const response = await api.get('/movie/now_playing', {
            params: {
                api_key: 'e3557a63a0916ff565660d0e9b496cba',
                language: 'pt-BR',
            }
        })
        setMovie(response.data.results)
    }
    onMovie()

   }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie>
                                <a href="https://www.google.com.br/">
                                    <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                                </a>
                                <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home