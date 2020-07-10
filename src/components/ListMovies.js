import React from 'react'
import CardMovie from './CardMovie'
function ListMovies(props) {
    return (
        <div style={{display:'flex',flexWrap:'wrap' ,marginTop:'20px',justifyContent:'center'}}>
            {props.movies.map((movie)=><CardMovie movie={movie}/> )}
        </div>
    )
}

export default ListMovies
