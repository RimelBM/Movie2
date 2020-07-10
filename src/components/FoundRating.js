import React from 'react'

function FoundRating({Rated, movies,setFoundRate}) {

const foundRating =()=> {
    const founded = movies.find((mov)=>mov.Rate==Rated) ;
    (founded) ? setFoundRate([founded]) : setFoundRate([ {id:'16',name:"no",year:0,Rate:0,image:"notFound.jpg"}])

}
    return (
        <div>
            <input type='submit' style={{color:'red' , borderRadius:'9px'}} onClick={foundRating} value='voir' />
        </div>
    )
}

export default FoundRating
