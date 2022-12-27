<template>
  <section class="movies-list">
    <div class="heading m-0">
      <h2 class="text-white">Trending Movies</h2>
      <span class="d-block text-warning text-center mt-3 mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipi
      </span>
    </div>
    <div class="container-fluid px-sm-3 px-md-3 ">
      <div class="row equal-cols">
        <movie-card :movies="movies"/>
      </div>
      <movie-pagination
        :totalPages="data.total_pages"
        :perPage="20"
        :currentPage="data.page"
        @pageChanged="onPageChange"
      />
    </div>
  </section>
  <Footer></Footer>
</template>
<script>
import MovieCard from './MovieCard.vue';
import Footer from '../Layouts/Footer.vue';
import MoviePagination from './MoviePagination.vue'
export default {
  data() {
    return {
      page: 1,
      data: {},
      movies: {},
      api_key: "f336c1990399255fb555a88f4ff52b33",
    };
  },
  components: {
    MovieCard,
    MoviePagination,
    Footer
  },
  methods: {
    async getMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${ this.api_key }&&page=${ this.page }`
      );

      const movies = await response.json();
      this.movies = movies.results;
      this.data = movies;
      console.log(movies.results);
    },
    onPageChange(page) {
      this.page = page
      this.getMovies()
    }
  },
  async mounted() {
    this.getMovies();
  },
};
</script>