class Movie {
    static currentMaxMovieId = 0;

    constructor(title, year, rating) {
        this.movieId = Movie.currentMaxMovieId;
        Movie.currentMaxMovieId ++;
        this.rating = rating;
        this.year = year;
        this.title = title;
    }
}

let movies = [
    Movie("movie a", 1999, 7),
    Movie("movie b", 2000, 2),
    Movie("movie c", 2001, 4),
    Movie("movie d", 2002, 0),
    Movie("movie e", 2003, 10),
    Movie("movie g", 2004, 10),
    Movie("movie h", 2005, 5),
    Movie("movie i", 2006, 6),
    Movie("movie j", 2007, 3),
    Movie("movie k", 2008, 1),
    Movie("movie l", 2009, 4)
];

//movie id is sorted by default, so the array is randomised
for (let i = 0; i < movies.length; i++) {
    let randomIndex = Math.floor(Math.random() * movies.length) % movies.length;
    let temp = movies[i];
    movies[i] = movies[randomIndex];
    movies[randomIndex] = temp;
}

movies.sort((a, b) => a - b);

function search(movies, targetId) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].movieId == targetId) {
            return movies[i];
        }
    }

    return null;
}

