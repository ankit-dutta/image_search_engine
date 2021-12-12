import React ,{useState, useEffect} from 'react';

import './App.css';
import axios from 'axios';



function App() {

  const [photo,setPhoto] = useState("");

  const [photoname,setPhotoname] = useState();

  const [totalimages,setTotalimages] = useState();

  const [ clientId,setClientId] = useState(process.env.React_App_UNSPLASH_KEY);

  const [result,setResult] = useState([]);

  const [page,setPage] = useState(1);


  //CATCHING THE TYPE WORDS FROM INPUT
  const handleChange = (event) => 
  {
     setPhoto(event.target.value)
  }

  const fetchData = (page, photo) => {
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${photo}&per_page=4&client_id=${clientId};`
 
    
    //FETCHING THE DATA FROM AXIOS 
    axios.get(url)
    .then((response)=> {
      
      setResult([...result, ...response.data.results]);
      setTotalimages(response.data.total)
    });
  }

  useEffect(() => {
    fetchData(page, photo)
  }, [page])
  
  // SET INPUT VALUE TO PHOTO
  const handleSubmit = (event) =>
  {
    
    setPhotoname(photo);
    
    fetchData(page, photo);
  }


  return(
    <>
  
<div className = "container ">

    {/* SEARCH BOX */}
    <div className='d-flex justify-content-center '>
    <input onChange = {handleChange} name="photo" className="form-control search-bar form-control-sm mr-3 " type="text" placeholder="Search for photos"
           aria-label="Search" />
   
     {/* SEARCH BUTTON */}
     <button onClick={handleSubmit} className='search-btn' ><i   class="fas fa-search "></i></button>
     </div>

    {/* HEADING PART */}
    <header className = "heading mt-4">  
    <h1  className='topic-name'>{photoname}</h1>   {/*  SHOWING IMAGE NAME */}

     {totalimages ? <h4 className='total-image'>{`${totalimages} Images has been found`}</h4> : null}      {/*SHOWING THE COUNT OF IMAGE} */}
    </header>

    <hr className="mt-2 mb-5" /> 
  
    {/* MAPPING THE PHOTOS */}
     <section>
     <div className="images">
      {result.map((photo ) =>
      (
       <img src ={photo.urls.small}  className="img-fluid mr-5 mb-4 " alt = "images"/>
       )
      )}
      </div>
     </section>
 
    {/* LOAD-MORE BUTTON */}
    <center>
      {photoname? <button onClick = {() => setPage(prevPage => prevPage+1)} className="btn-load-more" >Load More</button> :null}
    </center>
    
  
  </div>
  
  

    </>
  );
}

export default App;
