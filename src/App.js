
import './App.css';
import React, {useState} from "react";
import TableOfScore from './Table';
import allCountryScores from './scores';
import Button from './Button';
import TableWorldWide from './TableWorldWide';
import cup from "./cup.jpg"

function App() {
  const [sort, setSort] = useState(true);
  return (
    <div className="App">
      <div className='title-table'>
  <img className="cup" src={cup} alt="cup" />
       <h1>Hight Scores of World</h1>
       </div>
       <Button sort = {sort} setSort={setSort}/>
       <TableWorldWide allCountryScores = {allCountryScores} sort={sort}/>
<div className='title-table'>
  <img className="cup" src={cup} alt="cup" />
 <h1>Hight Scores per Country</h1>
 </div>
    <TableOfScore allCountryScores = {allCountryScores} sort={sort}/>
    </div>
  );
}

export default App;
