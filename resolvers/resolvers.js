const MovieSchemaModel = require("../model/model");

var resolvers = {
  listMovies: () => {
    return MovieSchemaModel.find({});
  },
  addMovie: (args) => {
    let newMovie = new MovieSchemaModel({
      name: args.name,
      genre: args.genre,
      year: args.year,
    });
    newMovie.save();
    return newMovie;
  },
};

module.exports = resolvers;
