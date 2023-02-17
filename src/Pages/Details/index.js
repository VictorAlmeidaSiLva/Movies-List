import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import api from "../../api/api";
import { Container } from "./styles";


function Details() {

    const { id } = useParams()

    const [movie, setMovie] = useState([])
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        async function onMovie() {
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'e3557a63a0916ff565660d0e9b496cba',
                    language: 'pt-BR',
                }
            })
            setMovie(response.data)
        }
        onMovie()

    }, [])

    return (
        <Container>
            <div className="movie">
                <img src={`${image_path}${movie.poster_path}`} alt={movie.overview} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.overview}</span>
                    <span className="release-date">Release date: {movie.release_date}</span>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Details;