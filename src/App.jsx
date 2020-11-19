import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
// import Axios from 'axios';
import './App.css';
import {Router, navigate} from '@reach/router'; 

const starwars = ["", "Planets", "Spaceships", "Vehicles", "People", "Films", "Species"]

function App() {

  const [displayNum, setDisplayNum] = useState("");
  const [category, setCategory] = useState(starwars[0]);

  useEffect(() => {
    console.log("Hello");
  },[displayNum, category])

  useEffect(() => {
    console.log("Only do this when component gets created.")
  }, [])

  // const getInfo = () => {
  //   Axios.get("https://swapi.dev/api/people/")
  //     .then(res => setDisplay(res.data.all))
  //     .catch(err => console.log(err))
  // }
  const handleQuery = e => {
    e.preventDefault();
    navigate(`/${category}/${displayNum}`);
    setCategory(starwars[0]);
    setDisplayNum("");
  }
  return (
    <div className="App">
      <form className = "col-3 mx-auto" onSubmit = {handleQuery}>
        <div className = "form-group">
          <label>Category</label>
          <select value={category} className="form-control" onChange={(e) => setCategory(e.target.value)}>
          {
            starwars.map((star, i) => <option value={star} key={i}> {i===0 ? "--Select--": star}</option>)
          }
          </select>
        </div>
        <div className = "form-group">
          <label>ID</label>
          <input className ="form-control" type="text" value={displayNum} onChange={(e) => setDisplayNum(e.target.value)}/>
        </div>
        <input type = "submit" value="Search" className ="btn btn-primary"/>
      </form>
      <Router>
        <Display path="/:category/:displayNum"/>
      </Router>
    </div>
  );
}

export default App;
