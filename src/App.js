import React, {useState,useEffect}from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //removing the tours by checking with id , 
  // if the id is doesn't match then that will stor to newTours if it matches
  //then is doesn't store
  const removeTours = (id) =>{
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);

  }


  //fetching the data by async and await
  const fetchTours = async ()=>{
    setLoading(true);

 try{
  const response = await fetch(url);
  const tours = await response.json();
  setLoading(false);
  setTours(tours);
  console.log(tours)

 } 
 catch (error){
   setLoading(false)
   console.log(error)
 }  
   
   
  };

  useEffect(()=>{
    fetchTours();
  },[]);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length ==0){
    return  <main>
    <div className="title">
      <h2>No  tours left</h2>
      <button className='btn' onClick={()=>fetchTours()}>Refresh Now</button>
      </div>
      
      </main>
    
    
  }

  return(
    <main>
        <Tours tours={tours} removeTours={removeTours}/>
    </main>

  )

}

export default App;
