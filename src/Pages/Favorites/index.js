import { Link } from "react-router-dom"
import { Container, Movies, MoviesFav } from "./styles"
import { useEffect, useState } from "react"


function Favorite() {


    const [movie, setMovie] = useState([])
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        async function listMovies() {
            const myList = localStorage.getItem('@favorites')
            setMovie(JSON.parse(myList || []))
        }
        listMovies()
    }, [])

    function deleteItemMovie(id) {
        let remove = movie.filter((item) => {
            return (item.id !== id)
        })
        setMovie(remove)
        localStorage.setItem('@favorites', JSON.stringify(remove))

    }

    return (
        <Container>
            <Link to="/"><button>Home</button></Link>
            <h1>Favorites</h1>
            <MoviesFav>
                {movie.map(movies => {
                    return (
                        <Movies>
                            <button onClick={() => deleteItemMovie(movies.id)}>X</button>
                            <Link to={`/details/${movies.id}`}><img src={`${image_path}${movies.poster_path}`} alt={movies.title} /></Link>
                            <span>{movies.title}</span>
                        </Movies>
                    )
                })}
            </MoviesFav>
        </Container>
    )
}

export default Favorite