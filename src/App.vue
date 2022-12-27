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
  <div class="container-fluid p-0 g-0">
    <header class="">
      <div class="heading mt-5">
        <h2>Trending Movies</h2>
        <span class="d-block text-center mt-3 mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipi
        </span>
      </div>
      <div class="links mt-2 mb-3 bg-info p-2">
        <a href="#" class="text-white">Trending Today</a>
        <a href="#" class="ml-3 text-white">Latest</a>
      </div>
    </header>
    <section class="movies-list">
      <div class="container-fluid p-2">
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
