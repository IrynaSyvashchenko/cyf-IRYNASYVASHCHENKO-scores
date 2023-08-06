import React from "react";
import { sortTable } from "./ArrayUtils";
import heart from "./heart.png"

const TableOfScore = ({ allCountryScores, sort }) => {
  const sortedCountryScores = allCountryScores.sort(function (a, b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });



  return (
    <>
      {sortedCountryScores.map((element) => {
        let sortedScore = null;

        // if (sort) {
        //   sortedScore = element.scores.sort(function (a, b) {
        //     return b.s - a.s;
        //   });
        // } else {
        //   sortedScore = element.scores.sort(function (a, b) {
        //     return a.s - b.s;
        //   });
        // }
        sortedScore = sortTable(element.scores, sort)

        return (
          <div key={element.name} className="score-per-country">
            <div className="title-table">
              <img src={heart} alt="heart"/>
            <h2>HIGH SCORES: {element.name}</h2>
            </div>
            <div className="table">
              {sortedScore.map((name) => {
                return (
                  <div className="table-name" key={name.n}>
                    <div className="name">{name.n}</div>
                    <div className="score">{name.s}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TableOfScore;
