const axios = require('axios');
const moviesApi = 'https://spring-movies-cf.cfapps.io/';
const movieData={"data":
   [    {
    "name": "Annihilation",
    "image": "annihilation.jpg",
    "rating": "4.5",
    "genre": "Drama",
    "summary": "Annihilation is a 2018 science fiction horror film written and directed by Alex Garland, based on the novel of the same name by Jeff VanderMeer. It stars Natalie Portman, Jennifer Jason Leigh, Gina Rodriguez, Tessa Thompson, Tuva Novotny, and Oscar Isaac."
  },
  {
    "name": "Black Panther",
    "image": "blackPanther.jpg",
    "rating": "4.0",
    "genre": "Action",
    "summary": "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt ..."
  },
  {
    "name": "Blade Runner",
    "image": "bladeRunner.jpg",
    "rating": "3.5",
    "genre": "Action",
    "summary": "Blade Runner is a 1982 science fiction film directed by Ridley Scott, written by Hampton Fancher and David Peoples, and starring Harrison Ford, Rutger Hauer, and Sean Young. It is a loose adaptation of Philip K. Dick's novel Do Androids Dream of Electric Sheep? (1968)."
  },
  {
    "name": "Dragon",
    "image": "dragon.jpg",
    "rating": "4.5",
    "genre": "Action",
    "summary": "Dragon is a New Zealand rock band which was formed in January 1972 and relocated later to Sydney, Australia, in May 1975. The band was originally fronted ..."
  },
  {
    "name": "Dunkirk",
    "image": "dunkirk.jpg",
    "rating": "4.0",
    "genre": "Drama",
    "summary": "Dunkirk is a 2017 war film written, directed, and produced by Christopher Nolan that depicts the Dunkirk evacuation of World War II."
  },
  {
    "name": "Get Out",
    "image": "getOut.jpg",
    "rating": "3.0",
    "genre": "Drama",
    "summary": "Get Out is a 2017 American horror film written and directed by Jordan Peele in his directorial debut. It stars Daniel Kaluuya as a young black man who uncovers a disturbing secret when he meets the family of his white girlfriend."
  },
  {
    "name": "Iron Man",
    "image": "ironMan.jpg",
    "rating": "4.0",
    "genre": "Friction",
    "summary": "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by ..."
  },
  {
    "name": "Lady Bird",
    "image": "ladyBird.jpg",
    "rating": "3.2",
    "genre": "Friction",
    "summary": "In Lady Bird, Greta Gerwig reveals herself to be a bold new cinematic voice with her directorial debut, excavating both the humour and pathos in the turbulent ..."
  },
  {
    "name": "Sherlock Holmes",
    "image": "sherlockHolmes.jpg",
    "rating": "4.2",
    "genre": "Suspense",
    "summary": "Sherlock Holmes is a 2009 mystery period action film based on the character of the same name created by Sir Arthur Conan Doyle. The film was directed by Guy ..."
  },
  {
    "name": "Spider Man",
    "image": "spiderMan.jpg",
    "rating": "4.2",
    "genre": "Friction",
    "summary": "In the original Lee Ditko stories, Spider-Man has the ability to cling to walls, superhuman strength, a sixth sense that alerts him to danger, perfect balance and equilibrium, as well as superhuman speed and agility."
  },
  {
    "name": "Star Wars",
    "image": "starWars.jpg",
    "rating": "4.2",
    "genre": "Friction",
    "summary": "Explore the Star Wars movies, from The Phantom Menace to The Last Jedi, Rogue One, and Solo -- with clips, behind the scenes videos, and more!"
  },	
  {
    "name": "The Shape Of Water",
    "image": "theShapeOfWater.jpg",
    "rating": "4.3",
    "genre": "Friction",
    "summary": "Hiroshi 'Kan' Ikeuchi in The Shape of Water (2017) The Shape of Water (2017) Guillermo del Toro at an event for The Shape of Water (2017) Octavia Spencer at ..."
  },
  {
    "name": "Thor",
    "image": "thor.jpg",
    "rating": "3.3",
    "genre": "Suspense",
    "summary": "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Paramount Pictures."
  },	
  {
    "name": "Transformers",
    "image": "transformers.jpg",
    "rating": "3.3",
    "genre": "Suspense",
    "summary": "Transformers is a series of American science fiction action films based on Transformers franchise which began in the 1980s. Michael Bay has directed the first ..."
  },
  {
    "name": "Wonder Woman",
    "image": "wonderWoman.jpg",
    "rating": "3.3",
    "genre": "Suspense",
    "summary": "Wonder Woman is a 2017 American superhero film based on the DC Comics character of the same name, produced by DC Entertainment in association with RatPac Entertainment and Chinese company Tencent Pictures, and distributed by Warner Bros. Pictures. It is the fourth installment in the DC Extended Universe (DCEU)."
  },
  {
    "name": "X Men",
    "image": "xMen.jpg",
    "rating": "4.3",
    "genre": "Suspense",
    "summary": "X-Men is an American superhero film series based on the fictional superhero team of the same name, who originally appeared in a series of comic books created by Stan Lee and Jack Kirby and published by Marvel Comics."
  }]	
};

module.exports = {
    index: async (req, res, next) => {
        // const movies = await axios.get(`${moviesApi}`);
        const movies = movieData;
        res.status(200).json(movies.data);
    },

    getMovie: async (req, res, next) => {
        const { name } = req.params;
        // const movies = await axios.get('${moviesApi}');
        const movies = movieData;
        const movie = movies.find(item => item.name == name)[0];
        res.status(200).json(movie);
    }
};