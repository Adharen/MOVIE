import React,{useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Trending.css'
import {AiFillHeart} from 'react-icons/ai'

function Trending() {
  const [movie, setmovie] = useState([]);
  const [search, setsearch] = useState('titanic')
  const[num,setnum]=useState(0);


  
  const number=(e)=>{
    e.preventDefault();
     setnum(num+1);
  }
  useEffect(() => {

    const getdata = async (search) => {
    try{
      var apikey='3b6d1480';
      var url=`http://www.omdbapi.com/?apikey=${apikey}&s=${search}`
      const response=await fetch(url)
      var data=await response.json();
      console.log(data)
      if(data.Search){
        setmovie(data.Search)
      }
    } catch(err){
      console.log(err);
    }
    }
    getdata(search);
  },[search])
  //filter.....
  let list = document.querySelectorAll(".list")
   for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function () {
         for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("Active")
         }
         this.classList.add("Active")
      })
   }
 function filterout(item) {
    const finaldata = movie.filter((val) => {
      return val.Type===item;
    });
    setmovie(finaldata);
  }
  return (
    <>
    <input type="text"  className="int" placeholder='Search Here....' onChange={(e)=>setsearch(e.target.value)} />
    <div className="filter">
          <ul>
           <li className='list' onClick={()=>filterout("movie")}>MOVIE</li>
           <li className='list' onClick={()=>filterout("series")}>SERIES</li>
         </ul>
        </div>
    <div className="post">
  {
   // eslint-disable-next-line array-callback-return
   movie.filter(function (val) {
     if (search === "") {
       return val;
     } else if (val.Title.toLowerCase().includes(search.toLowerCase())) {
       return val;
     }
   })
    .map((val)=>{
      return (
        <>
        <div className="col">
         <Link to={'/Mimfo/'+val.imdbID+'/'+val.Year+'/'+val.Title+'/'+val.Type}>
          <img src={val.Poster} alt="" srcset=""key={val.imdbID}/>
          <div className="imfo">
            <div className="name">
              <h1>{val.Title}</h1>
            </div>
           <div className="year">
           <h4>{val.Type}</h4>
            <h5>{val.Year}</h5>
           </div>
           <div className="heart">
            <AiFillHeart onClick={number}/><h6>{num}</h6>
           </div>
          </div>
          </Link>
         </div>

        </>
      )
    })
  }
  </div>
  </>
  )
}

export default Trending