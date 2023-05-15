const express = require("express");
const router = express.Router();
const mockData = require("../mockDatan")

let movies = mockData;


// Lista alla filmer
router.get('/', (req, res) => {
    res.json(movies)
})

// Hämta specific film med id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const movie = movies.find(char => char.id === id);
  
    if (!movie) {
      return res
        .status(404)
        .json({ message: "No movie by that id is found!" });
    }

    res.json(movie);
  });


// Skapa ny film

let nextId = "235933"

router.post("/", (req, res) => {
  const movie = req.body;

  if (!movie.Title || !movie.Year || !movie.Released || !movie.Genre) {
    return res.status(400).json({ message: "Title, Year, Released, and Genre fields are mandatory" });
  }

  const yearRegex = /^\d{4}$/;
  if (!yearRegex.test(movie.Year)) {
    return res.status(400).json({ message: "Year must be a valid 4-digit number" });
  }

  const newMovie = {
    ...movie,
    id: `tt${nextId}`
  };

  nextId++;
  movies.unshift(newMovie);
  res.json(newMovie);
});


// Redigera specific film med id

router.put("/:id", (req, res) => {

    const id = req.params.id;
    const movie = req.body
    const index = movies.findIndex((char) => char.id === id)

    if (index === -1) {
        return res
          .status(404)
          .json({ message: "Movie doesn't exist!" });
      }
 
      const updadedmovie = { ...movies[index], ...movie}
      movies[index] = updadedmovie

      res.json(updadedmovie)
})

// Deletea specific film med id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find(char => char.id === id)

  if (!movie) {
      return res
        .status(404)
        .json({ message: "NO movie by that id." });
    }

  const newData = movies.filter(char => char.id !== id);
  movies = newData

  res.json({ message: "Movie has been deleted." });
});


module.exports = router;