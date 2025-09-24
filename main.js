class Movie {
    //a static variable accocated with this class
    //that is automaticley increamented and assigned when a new instance is created,
    //keeping each movie id unqiue.
    static currentMaxMovieId = 0;

    constructor(title, year, rating) {
        this.movieId = Movie.currentMaxMovieId;
        Movie.currentMaxMovieId ++;
        this.rating = rating;
        this.year = year;
        this.title = title;
    }
}

//the movies we will be manipulating
let movies = [
    new Movie("movie a", 1999, 7),
    new Movie("movie b", 2000, 2),
    new Movie("movie c", 2001, 4),
    new Movie("movie d", 2002, 0),
    new Movie("movie e", 2003, 10),
    new Movie("movie g", 2004, 10),
    new Movie("movie h", 2005, 5),
    new Movie("movie i", 2006, 6),
    new Movie("movie j", 2007, 3),
    new Movie("movie k", 2008, 1),
    new Movie("movie l", 2009, 4)
];

console.log(JSON.stringify(movies[0]));
console.log(JSON.stringify(movies));

//movie id is sorted by default, so the array is randomised
for (let i = 0; i < movies.length; i++) {
    //a random index within the bounds of the array
    let randomIndex = Math.floor(Math.random() * movies.length) % movies.length;
    //a place to store the value we are going to swap before
    let temp = movies[i];
    movies[i] = movies[randomIndex];
    movies[randomIndex] = temp;
}

movies.sort((a, b) => a - b);
console.log(JSON.stringify(movies));

//the movie search function. takes a movie array and a target movie id
//and returns it if found, or null if not found.
//implimented using sequencial search.
function search(movies, targetId) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].movieId == targetId) {
            return movies[i];
        }
    }

    return null;
}

//finding a target movie id
console.log(JSON.stringify(search(movies, 0)));
//not finding a target movie
console.log(JSON.stringify(search(movies, 10)));

