import styled from 'styled-components'


export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        margin-left: 50px;
    }

    button:hover {
        background: #5848c2;
    }
`

export const MovieList = styled.ul`

    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    collumn-gap: 3rem;
    row-gap: 4rem;

`

export const Movie = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;


img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
}

span {
    font-weight: bold;
    font-size: 120%;
}

a {
    transition: all 0.3s
}

a:hover {
    transform: scale(0.9);
}
`