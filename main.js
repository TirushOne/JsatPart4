class Movie {
    constructor(title, year, rating, id) {
        this.movieId = id;
        this.rating = rating;
        this.year = year;
        this.title = title;
    }
}

//the movies we will be manipulating
let movies = [
    new Movie("movie a", 1999, 7, 7),
    new Movie("movie b", 2000, 2, 8),
    new Movie("movie c", 2001, 4, 2),
    new Movie("movie d", 2002, 0, 4),
    new Movie("movie e", 2003, 10, 11),
    new Movie("movie g", 2004, 10, 23),
    new Movie("movie h", 2005, 5, 15),
    new Movie("movie i", 2006, 6, 0),
    new Movie("movie j", 2007, 3, 8),
    new Movie("movie k", 2008, 1, 9),
    new Movie("movie l", 2009, 4, 10)
];

console.log(JSON.stringify(movies[0]));
console.log(JSON.stringify(movies));

movies.sort((a, b) => a.movieId - b.movieId);
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
console.log(JSON.stringify(search(movies, 200)));

//comment from dev branch