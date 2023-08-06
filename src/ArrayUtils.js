

  function sortTable(array, sort) {
    if (sort) {
        return array.sort(function (a, b) {
          return b.s - a.s;
        });
      } else {
        return array.sort(function (a, b) {
          return a.s - b.s;
        });
      }
  }

  export {sortTable};