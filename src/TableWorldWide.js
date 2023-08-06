import React from "react";
import {sortTable} from "./ArrayUtils"
import heart from "./heart.png"

const TableWorldWide = ({allCountryScores, sort}) => {
    let arrayOfScores = [];
    allCountryScores.forEach(element => {
        // arrayOfScores = arrayOfScores.concat(element.scores)
        arrayOfScores.push(...element.scores)
    });
        let sortedScore = null;
        // if (sort) {
        //     sortedScore = arrayOfScores.sort(function (a, b) {
        //       return b.s - a.s;
        //     });
        //   } else {
        //     sortedScore = arrayOfScores.sort(function (a, b) {
        //       return a.s - b.s;
        //     });
        //   }
        sortedScore = sortTable(arrayOfScores, sort)

    // const sortedScore = arrayOfScores.sort((a, b) => {return b.s - a.s})
    // console.log(sortedScore);

return(
    <div className="score-per-country">
        <div className="title-table">
            <img src={heart} alt="heart" />
        <h2>HIGH SCORES: World</h2>
        </div>
        <div className="table">
{sortedScore.map(name => {
    return(
            <div className="table-name" key={name.n}>
        <div className="name">{name.n}</div>
        <div className="score">{name.s}</div>
      </div>
    )
    }
)
}
</div>
</div>
)
} 

export default TableWorldWide;