import React,{useState} from 'react'

function FindMovie({movies,setFoundFilm}) {

    

    const [film,setFilm] = useState('')
    console.log(film )
    console.log(movies)

    const trouverFilm =() =>
    {
        if(film!==''){
        const foud = movies.find((mov)=>mov.name===film) ;

        (foud) ? setFoundFilm([foud]) : setFoundFilm([ {id:'16',name:"no",year:1,Rate:0,image:"notFound.jpg"}])
         
        setFilm('') }
    }



    

    return (
        <div style={{width:'80%' ,marginTop:'1%'}}>
            <input style={{width:'80%' ,height:'50px',borderRadius:'9px'}} type='text' value={film} onChange={(e)=>setFilm(e.target.value)}  />
            <input type='submit' value='Search' style={{height:'56px',borderRadius:'25px',marginLeft:'3px'}} onClick={trouverFilm} />
        </div>
    )
}

export default FindMovie
