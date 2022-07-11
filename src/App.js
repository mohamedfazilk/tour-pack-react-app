import React, {useState,useEffect}from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';


function App() {
  return <>
  <Loading/>
  <Tours/>
  
  </>

}

export default App;