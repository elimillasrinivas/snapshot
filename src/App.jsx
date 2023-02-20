import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [data,setData]=useState([])
  // const [term,setTerm]=useState("")
  const [inp,setInp]=useState("")
  const [updateInp,setUpdateInp]=useState("")
  const handleSearch=()=>{
    setUpdateInp(inp)
    setInp("")
  }
  useEffect(()=>{
    // let q=term
    let p=updateInp
      axios.get(`https://pixabay.com/api/?key=21418022-15ab6af3e6662180bcc3cd26e&q=${p}&image_type=photo`)
      .then(res=> {
        console.log(res.data.hits);
        setData(res.data.hits)})
    },[updateInp])

  return (
    <>
    <h1 className='title'>Snapshot</h1>
    <div className="search">
      <input type="text" className="search-bar" onChange={(e)=>{setInp(e.target.value)}} value={inp}/>
      <button id='search-btn' onClick={handleSearch}><i class="fa fa-search" aria-hidden="true"></i></button>
    </div>
    <div className="search-queries">
      <button className="mountains" onClick={()=>{setUpdateInp("Mountains")}}>Mountains</button>
      <button className="beaches" onClick={()=>{setUpdateInp("Beaches")}}>Beaches</button>
      <button className="birds" onClick={()=>{setUpdateInp("Birds")}}>Birds</button>
      <button className="food" onClick={()=>{setUpdateInp("Foods")}}>Foods</button>
    </div>
    <div className="App">
     <ol id='container'>
     {data.map((img,id)=>
        <img key={id} src={img.largeImageURL} alt={"pictures"}/>
     )}
    
    </ol>

   
    </div>
    
    </>
  );
}

export default App;
