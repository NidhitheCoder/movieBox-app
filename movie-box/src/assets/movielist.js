const movieList = [
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Released: "05 May 2017",
    Runtime: "136 min",
    Genre: "Action, Adventure, Comedy, Sci-Fi",
    Director: "James Gunn",
    Writer:
      "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    Plot:
      "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Language: "English",
    Country: "USA",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 56 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.6/10" },
      { Source: "Rotten Tomatoes", Value: "85%" },
      { Source: "Metacritic", Value: "67/100" }
    ],
    Metascore: "67",
    imdbRating: "7.6",
    imdbVotes: "556,178",
    imdbID: "tt3896198",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Marvel Studios, Walt Disney Pictures",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Batman",
    Year: "1989",
    Rated: "PG-13",
    Released: "23 Jun 1989",
    Runtime: "126 min",
    Genre: "Action, Adventure",
    Director: "Tim Burton",
    Writer:
      "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
    Actors: "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
    Plot:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    Language: "English, French, Spanish",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 7 wins & 26 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.5/10" },
      { Source: "Rotten Tomatoes", Value: "71%" },
      { Source: "Metacritic", Value: "69/100" }
    ],
    Metascore: "69",
    imdbRating: "7.5",
    imdbVotes: "334,865",
    imdbID: "tt0096895",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production:
      "Warner Brothers, Guber-Peters Company, PolyGram Filmed Entertainment",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "It",
    Year: "2017",
    Rated: "R",
    Released: "08 Sep 2017",
    Runtime: "135 min",
    Genre: "Horror",
    Director: "Andy Muschietti",
    Writer:
      "Chase Palmer (screenplay by), Cary Joji Fukunaga (screenplay by), Gary Dauberman (screenplay by), Stephen King (based on the novel by)",
    Actors: "Jaeden Martell, Jeremy Ray Taylor, Sophia Lillis, Finn Wolfhard",
    Plot:
      "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    Language: "English, Hebrew",
    Country: "Canada, USA",
    Awards: "8 wins & 49 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.3/10" },
      { Source: "Rotten Tomatoes", Value: "85%" },
      { Source: "Metacritic", Value: "69/100" }
    ],
    Metascore: "69",
    imdbRating: "7.3",
    imdbVotes: "450,627",
    imdbID: "tt1396484",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production:
      "Vertigo Entertainment, RatPac-Dune Entertainment, Lin Pictures",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Nun",
    Year: "2017",
    Rated: "N/A",
    Released: "15 Sep 2018",
    Runtime: "80 min",
    Genre: "Horror, Mystery, Thriller",
    Director: "Chad Dossett",
    Writer: "Chuck Cuellar, Chad Dossett",
    Actors:
      "Julianna Robinson, William McNamara, Kirsten Roeters, Benjamin Alan",
    Plot:
      "A troubled nun attempts to confront the haunts of her past by visiting an old flame in a distant city.",
    Language: "English",
    Country: "USA",
    Awards: "2 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2NiNWU3OTktODVlYi00NmRiLWIzYTYtMzZjYzlkYmFkNTI1XkEyXkFqcGdeQXVyMjM2OTAxNg@@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "2.7/10" }],
    Metascore: "N/A",
    imdbRating: "2.7",
    imdbVotes: "438",
    imdbID: "tt2378145",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Seven Samurai",
    Year: "1954",
    Rated: "Not Rated",
    Released: "19 Nov 1956",
    Runtime: "207 min",
    Genre: "Action, Adventure, Drama",
    Director: "Akira Kurosawa",
    Writer:
      "Akira Kurosawa (screenplay by), Shinobu Hashimoto (screenplay by), Hideo Oguni (screenplay by)",
    Actors: "Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
    Plot:
      "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    Language: "Japanese",
    Country: "Japan",
    Awards: "Nominated for 2 Oscars. Another 5 wins & 6 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.6/10" },
      { Source: "Rotten Tomatoes", Value: "100%" },
      { Source: "Metacritic", Value: "98/100" }
    ],
    Metascore: "98",
    imdbRating: "8.6",
    imdbVotes: "310,476",
    imdbID: "tt0047478",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Toho Company",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Frozen",
    Year: "2013",
    Rated: "PG",
    Released: "27 Nov 2013",
    Runtime: "102 min",
    Genre: "Animation, Adventure, Comedy, Family, Fantasy, Musical",
    Director: "Chris Buck, Jennifer Lee",
    Writer:
      'Jennifer Lee (screenplay by), Hans Christian Andersen (story inspired by: "The Snow Queen" by), Chris Buck (story by), Jennifer Lee (story by), Shane Morris (story by)',
    Actors: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad",
    Plot:
      "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
    Language: "English, Norwegian",
    Country: "USA",
    Awards: "Won 2 Oscars. Another 79 wins & 59 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.4/10" },
      { Source: "Rotten Tomatoes", Value: "90%" },
      { Source: "Metacritic", Value: "75/100" }
    ],
    Metascore: "75",
    imdbRating: "7.4",
    imdbVotes: "564,642",
    imdbID: "tt2294629",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Walt Disney Animation",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Hulk",
    Year: "2003",
    Rated: "PG-13",
    Released: "20 Jun 2003",
    Runtime: "138 min",
    Genre: "Action, Sci-Fi",
    Director: "Ang Lee",
    Writer:
      "Stan Lee (Marvel comic book character), Jack Kirby (Marvel comic book character), James Schamus (story), John Turman (screenplay), Michael France (screenplay), James Schamus (screenplay)",
    Actors: "Eric Bana, Jennifer Connelly, Sam Elliott, Josh Lucas",
    Plot:
      "Bruce Banner, a genetics researcher with a tragic past, suffers an accident that causes him to transform into a raging green monster when he gets angry.",
    Language: "English, Spanish",
    Country: "USA",
    Awards: "3 wins & 14 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "5.6/10" },
      { Source: "Rotten Tomatoes", Value: "62%" },
      { Source: "Metacritic", Value: "54/100" }
    ],
    Metascore: "54",
    imdbRating: "5.6",
    imdbVotes: "249,823",
    imdbID: "tt0286716",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Marvel Films",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Thor",
    Year: "2011",
    Rated: "PG-13",
    Released: "06 May 2011",
    Runtime: "115 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "Kenneth Branagh",
    Writer:
      "Ashley Miller (screenplay), Zack Stentz (screenplay), Don Payne (screenplay), J. Michael Straczynski (story), Mark Protosevich (story), Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book)",
    Actors: "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",
    Plot:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    Language: "English",
    Country: "USA",
    Awards: "5 wins & 30 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.0/10" },
      { Source: "Rotten Tomatoes", Value: "77%" },
      { Source: "Metacritic", Value: "57/100" }
    ],
    Metascore: "57",
    imdbRating: "7.0",
    imdbVotes: "737,422",
    imdbID: "tt0800369",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Marvel Studios",
    Website: "N/A",
    Response: "True"
  },

];

export default movieList;
