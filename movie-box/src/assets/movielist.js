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
    Title: "Eagle Eye",
    Year: "2008",
    Rated: "PG-13",
    Released: "26 Sep 2008",
    Runtime: "118 min",
    Genre: "Action, Mystery, Thriller",
    Director: "D.J. Caruso",
    Writer:
      "John Glenn (screenplay), Travis Wright (screenplay), Hillary Seitz (screenplay), Dan McDermott (screenplay), Dan McDermott (story)",
    Actors: "Shia LaBeouf, Michelle Monaghan, Rosario Dawson, Michael Chiklis",
    Plot:
      "Jerry and Rachel are two strangers thrown together by a mysterious phone call from a woman they have never met. Threatening their lives and family, she pushes Jerry and Rachel into a series of increasingly dangerous situations, using the technology of everyday life to track and control their every move.",
    Language: "English",
    Country: "USA, Germany",
    Awards: "3 wins & 8 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA5MTMzMDMzNl5BMl5BanBnXkFtZTcwMzUwNDUzMw@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.6/10" },
      { Source: "Rotten Tomatoes", Value: "26%" },
      { Source: "Metacritic", Value: "43/100" }
    ],
    Metascore: "43",
    imdbRating: "6.6",
    imdbVotes: "174,811",
    imdbID: "tt1059786",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Kurtzman/Orci",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Sleep",
    Year: "1964",
    Rated: "N/A",
    Released: "17 Jan 1964",
    Runtime: "321 min",
    Genre: "Documentary",
    Director: "Andy Warhol",
    Writer: "N/A",
    Actors: "John Giorno",
    Plot: "A man sleeps for five hours.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDliMGU0Y2QtZDhjOC00ZmUxLWJjNmYtOGJlNTk1OTQxZjk1XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "3.6/10" },
      { Source: "Rotten Tomatoes", Value: "40%" }
    ],
    Metascore: "N/A",
    imdbRating: "3.6",
    imdbVotes: "417",
    imdbID: "tt0187513",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
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
    Title: "Moana",
    Year: "2016",
    Rated: "PG",
    Released: "23 Nov 2016",
    Runtime: "107 min",
    Genre: "Animation, Adventure, Comedy, Family, Fantasy, Musical",
    Director:
      "Ron Clements, John Musker, Don Hall(co-director), Chris Williams(co-director)",
    Writer:
      "Jared Bush (screenplay by), Ron Clements (story by), John Musker (story by), Chris Williams (story by), Don Hall (story by), Pamela Ribon (story by), Aaron Kandell (story by), Jordan Kandell (story by)",
    Actors: "Auli'i Cravalho, Dwayne Johnson, Rachel House, Temuera Morrison",
    Plot:
      "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    Language: "English, French",
    Country: "USA",
    Awards: "Nominated for 2 Oscars. Another 20 wins & 86 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.6/10" },
      { Source: "Rotten Tomatoes", Value: "95%" },
      { Source: "Metacritic", Value: "81/100" }
    ],
    Metascore: "81",
    imdbRating: "7.6",
    imdbVotes: "266,288",
    imdbID: "tt3521164",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Walt Disney Animation Studios",
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
  {
    Title: "Helen",
    Year: "2009",
    Rated: "R",
    Released: "26 Nov 2009",
    Runtime: "120 min",
    Genre: "Drama",
    Director: "Sandra Nettelbeck",
    Writer: "Sandra Nettelbeck (screenplay)",
    Actors: "Ashley Judd, Goran Visnjic, Lauren Lee Smith, Alexia Fast",
    Plot:
      "A talented professor is forced to come to terms with her clinical depression.",
    Language: "English",
    Country: "USA, UK, Germany, Canada",
    Awards: "1 win & 5 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM3NTY3OTkyN15BMl5BanBnXkFtZTcwMDE0MzQ4Mw@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.3/10" },
      { Source: "Rotten Tomatoes", Value: "44%" }
    ],
    Metascore: "N/A",
    imdbRating: "6.3",
    imdbVotes: "1,898",
    imdbID: "tt1012729",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Egoli Tossell Film",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "The Cold Eye (My Darling, Be Careful)",
    Year: "1980",
    Rated: "N/A",
    Released: "N/A",
    Runtime: "90 min",
    Genre: "N/A",
    Director: "Babette Mangolte",
    Writer: "James Barth, Babette Mangolte",
    Actors: "James Barth, Powers Boothe, George Deem, Kim Ginsberg",
    Plot:
      "A 'narrative' film centered on young artists living in New York City around 1979.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster: "N/A",
    Ratings: [],
    Metascore: "N/A",
    imdbRating: "N/A",
    imdbVotes: "N/A",
    imdbID: "tt0319206",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Terminator 2: Judgment Day",
    Year: "1991",
    Rated: "R",
    Released: "03 Jul 1991",
    Runtime: "137 min",
    Genre: "Action, Sci-Fi",
    Director: "James Cameron",
    Writer: "James Cameron, William Wisher",
    Actors:
      "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
    Plot:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    Language: "English, Spanish",
    Country: "USA, France",
    Awards: "Won 4 Oscars. Another 32 wins & 33 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "75/100" }
    ],
    Metascore: "75",
    imdbRating: "8.5",
    imdbVotes: "982,640",
    imdbID: "tt0103064",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production:
      "Pacific Western, Lightstorm Entertainment, Carolco Pictures Inc.",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Fun",
    Year: "1994",
    Rated: "Unrated",
    Released: "14 Apr 1995",
    Runtime: "105 min",
    Genre: "Crime, Drama",
    Director: "Rafal Zielinski",
    Writer: "James Bosley (play)",
    Actors: "Renée Humphrey, Alicia Witt, William R. Moses, Leslie Hope",
    Plot:
      "Hillary and Bonnie meet one morning by the side of the road. They become fast friends, share their secrets, and on a rising wave of frenzy later that afternoon, murder an old woman. They did it, they say later, for fun.",
    Language: "English",
    Country: "Canada",
    Awards: "5 wins & 4 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwMjU5NzM5Nl5BMl5BanBnXkFtZTcwMzQ3MTk1NA@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.9/10" },
      { Source: "Rotten Tomatoes", Value: "82%" }
    ],
    Metascore: "N/A",
    imdbRating: "6.9",
    imdbVotes: "1,197",
    imdbID: "tt0109855",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Good Will Hunting",
    Year: "1997",
    Rated: "R",
    Released: "09 Jan 1998",
    Runtime: "126 min",
    Genre: "Drama, Romance",
    Director: "Gus Van Sant",
    Writer: "Matt Damon, Ben Affleck",
    Actors: "Matt Damon, Ben Affleck, Stellan Skarsgård, John Mighton",
    Plot:
      "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    Language: "English",
    Country: "USA",
    Awards: "Won 2 Oscars. Another 22 wins & 61 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.3/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "70/100" }
    ],
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "846,117",
    imdbID: "tt0119217",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production:
      "Miramax Films, Be Gentlemen Limited Partnership, Lawrence Bender Productions",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Hunter",
    Year: "1984–1991",
    Rated: "TV-PG",
    Released: "18 Sep 1984",
    Runtime: "48 min",
    Genre: "Action, Crime, Drama, Mystery, Thriller",
    Director: "N/A",
    Writer: "Frank Lupo",
    Actors: "Fred Dryer, Stepfanie Kramer, Charles Hallahan",
    Plot:
      "Rick Hunter is a renegade cop who bends the rules and takes justice into his own hands. Partnered with the equally stunning and rebellious Sgt. McCall, the tough-minded duo set out to crack down on L.A.'s slimiest criminals.",
    Language: "English",
    Country: "USA",
    Awards: "Nominated for 3 Primetime Emmys. Another 2 wins & 4 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcxMjE2NjU2MF5BMl5BanBnXkFtZTcwNjExNjczMQ@@._V1_SX300.jpg",
    Ratings: [{ Source: "Internet Movie Database", Value: "6.8/10" }],
    Metascore: "N/A",
    imdbRating: "6.8",
    imdbVotes: "3,397",
    imdbID: "tt0086734",
    Type: "series",
    totalSeasons: "7",
    Response: "True"
  }
];

export default movieList;
