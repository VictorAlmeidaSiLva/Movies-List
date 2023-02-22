import { Link } from "react-router-dom"
import { Container } from "./styles"
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
            <div>
                <h1>Favorites</h1>
                {movie.map(movies => {
                    return (
                        <div>
                            <h1>{movies.title}</h1>
                            <button onClick={() => deleteItemMovie(movies.id)}>Remove movie</button>
                        </div>
                    )
                })}

            </div>
        </Container>
    )
}

export default Favorite