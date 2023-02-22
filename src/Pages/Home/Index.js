import { useEffect, useState } from "react"
import api from "../../api/api"
import { Container, Movie, MovieList } from "./styles"
import { Link } from "react-router-dom";

function Home() {

   const [ movies, setMovie ] = useState([])
   const image_path = "https://image.tmdb.org/t/p/w500"

   useEffect(() => {
    async function onMovie() {
        const response = await api.get('/movie/now_playing', {
            params: {
                api_key: 'e3557a63a0916ff565660d0e9b496cba',
            }
        })
        setMovie(response.data.results)
    }
    onMovie()

   }, [])

    return (
        <Container>
            <Link to="/"><button>Home</button></Link>
            <Link to="/Favorites"><button>Favorites</button></Link>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                                <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home