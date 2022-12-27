<script>
export default {
  data() {
    return {
      movies: null,
    };
  },
  async mounted() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f336c1990399255fb555a88f4ff52b33"
    );

    const movies = await response.json();
    this.movies = movies.results;
    console.log(movies.results);
  },
};
</script>

<template>
  <div class="container-fluid p-0 g-0 position-relative">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-lg-5">
        <a class="navbar-brand" href="#">The MOVIE.db</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Popular</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </a>
              <div class="dropdown-menu bg-dark">
                <a class="dropdown-item text-warning" href="#">Action</a>
                <a class="dropdown-item text-warning" href="#">Comedy</a>
                <a class="dropdown-item text-warning" href="#">Horror</a>
                <a class="dropdown-item text-warning" href="#">Super Heros</a>
                <a class="dropdown-item text-warning" href="#">Anime</a>
                <a class="dropdown-item text-warning" href="#">See More</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <button
              type="button"
              class="btn btn-sm btn-outline-primary mt-2 mt-md-0 mt-lg-0"
            >
              Log In
            </button>
            <button
              class="btn btn-sm btn-success ml-0 ml-md-2 ml-lg-2 mt-2 mt-md-0 mt-lg-0"
            >
              Sign Up
            </button>
          </ul>
        </div>
      </nav>
    </header>
    <section class="movies-list">
      <div class="heading mt-5">
        <h2>Trending Movies</h2>
        <span class="d-block text-center mt-3 mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipi
        </span>
      </div>
      <div class="container-xl">
        <div class="row">
          <div
            v-for="movie in movies"
            :key="movie.id"
            class="col-12 col-sm-6 col-md-6 col-lg-3 mb-3"
          >
            <img
              :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
              alt=""
              class="img-fluid"
            />
            <div class="card-text d-block w-auto bg-dark p-2">
              <span class="title text-warning">{{ movie.title }}</span>
              <p class="mt-3">
                <a href="#" class="heart">
                  <i class="ri-heart-fill heart"></i>
                </a>
                <a href="#" class="add ml-3">
                  <i class="ri-add-box-fill add"></i>
                </a>
                <a href="#" class="download ml-3">
                  <i class="ri-download-fill download"></i>
                </a>
              </p>
              <div>
                <span class="rating text-white">
                  <span class="text-secondary"> Rating: </span
                  >{{ movie.vote_average }}/10
                </span>
                <span class="date text-success float-right">{{
                  movie.release_date
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
