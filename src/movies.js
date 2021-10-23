// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data");

function getAllDirectors(movies) {
   return movies.map(movie => {
     return movie.director
   });
  }
const directorsList = getAllDirectors(movies);
// console.log(directorsList);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
 const finalMovies = movies.filter(movie => {
   return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') === true)
 }).length
 //let numberOfMovies = finalMovies.length;
 //console.log(finalMovies);
 return finalMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0;
  }
  const scores = movies.reduce(function (sum, score) {
    typeof movies.score !== 'number' || 
      movies.score === 0
    return sum + score.score;
  }, 0); 
    return parseFloat((scores/movies.length).toFixed(2));
  }
scoresAverage(movies);




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  const onlyDrama = movies.filter(function (movie) {
  //   if((movie.genre).indexOf('Drama') === -1){
  //   return 0;
  // }
    return movie.genre.includes('Drama');
  });
  const dramaScoresOnly = onlyDrama.reduce(function (sum , movie){
    return sum + movie.score;
  } ,0);
  return parseFloat((dramaScoresOnly/(onlyDrama.length)).toFixed(2));
   }
  dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const rightOrder = movies.sort(function (a , b){
    return (a.year - b.year)
});
return rightOrder;
}
orderByYear(movies);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(){
  const rightOrder = movies.sort(function (a , b){
    let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();
    if(fa < fb){
      return -1;
    }
    if(fa > fb){
      return 1;
    }
    return 0;
  });
  return rightOrder;
 }
 orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
