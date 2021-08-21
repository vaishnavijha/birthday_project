import React,{useState} from 'react';
import './App.css';
import List from './List';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={()=>{people.length!==0?setPeople([]):document.querySelector("h3").innerHTML="List already cleared"}}>clear all</button>
    </section>
  </main>
}


export default App;
