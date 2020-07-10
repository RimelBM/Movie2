import React ,{useState}from 'react'
import StarRating from './components/StarRating'
import FindMovie from './components/FindMovie'
import ListMovies from './components/ListMovies'
import FoundRating from './components/FoundRating'
import AjoutMovie from './components/AjoutMovie'



function Movies() {

   const [movies,setMovies] = useState ([{id:'1',name:"Naruto",year:1946,Rate:5,image:'naruto.jpg'},
                                  {id:'2',name:"500 days of summer",year:2005,Rate:4,image:"days.jpg"},
                                  {id:'3',name:"The lord of the rings",year:2009,Rate:3,image:'Lord.jpg'},
                                  {id:'4',name:"one day",year:2015,Rate:4,image:'One.jpg'},
                                  {id:'5',name:"Braveheart",year:2005,Rate:2,image:'Braveheart.jpg'},
                                  {id:'6',name:"danish",year:2011,Rate:5,image:"danish.jpg"},
                                  {id:'7',name:"Gladiator",year:2020,Rate:3,image:'gladiator.jpg'},
                                  {id:'8',name:"Harry poter",year:2012,Rate:1,image:'harry.jpg'} ,
                                  {id:'10',name:"500 days of summer",year:1991,Rate:4,image:"days.jpg"},
                                  {id:'11',name:"The lord of the rings",year:1992,Rate:5,image:'Lord.jpg'},
                                  {id:'14',name:"danish",year:2000,Rate:1,image:"danish.jpg"},
                                  {id:'15',name:"more than blue",year:2003,Rate:0,image:"more.jpg"},
                                ]);


     const [foundFilm ,setFoundFilm] = useState('') ;
     const [foundRate ,setFoundRate] = useState('') ;
     const [Rated ,setRate] = useState(0) ;
     
     const[showedForm,setShowedForm] =useState(0)

     console.log("foundFilm is" + foundFilm)

    const Home = () =>
    {
        setFoundFilm('');
        setFoundRate('') ;
        console.log("foundFilm is" + foundFilm)
    }

  


    return (
        <div style={{backgroundColor:'black'}}>
            
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>


            <button style={{backgroundColor:'green' ,height:'56px',borderRadius:'25px' ,marginTop:'18px',fontSize:'30px',color:'white' }} onClick={Home}>Home</button>
            <FindMovie movies={movies} setMoviesed={setMovies} setFoundFilm={setFoundFilm} />

            <div style={{display:'flex',flexDirection:'column' ,marginTop:'20px' } }>           
             <StarRating  setRate={setRate} setMovies={setMovies}  movies={movies}  />
            

            <FoundRating Rated={Rated} movies={movies} setFoundRate={setFoundRate}  />

            </div>

            </div>

            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',textAlign:'center' ,marginTop:'30px' }}>
                
            <button style={{fontSize:'40px' ,borderRadius:'9px',marginBottom:'2%'}} onClick={()=>setShowedForm(showedForm+1)}> + </button>
            <div >
                 {(showedForm %2 !==0)?  <AjoutMovie setMovies={setMovies} movies={movies}  setShowedForm={setShowedForm} showedForm={showedForm}  />   :<div></div> }

                 </div>
   

            </div>



            <div>  
            
            {     (foundRate!=='')?   <ListMovies movies={foundRate}/>:((foundFilm!=='')?   <ListMovies movies={foundFilm}/> :  <ListMovies movies={movies}/>)} 

            </div>
           

          
            
        </div>
    )
}

export default Movies
