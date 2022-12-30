<template>
  <section class="movies-list">
    <div class="heading m-0 p-3">
      <h2 class="text-dark">Trending Movies</h2>
      <span class="d-block text-lime text-center mt-3 mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex suscipi
      </span>
    </div>
    <div class="container-fluid px-sm-3 px-md-3 ">
      <movie-pagination
        :totalPages="data.total_pages"
        :perPage="20"
        :currentPage="data.page"
        @pageChanged="onPageChange"
      />
      <div class="row equal-cols">
        <movie-card :movies="data.results"/>
      </div>
      <movie-pagination
        :totalPages="data.total_pages"
        :perPage="20"
        :currentPage="data.page"
        @pageChanged="onPageChange"
      />
    </div>
  </section>
</template>
<script>
import MovieCard from './MovieCard.vue'
import MoviePagination from './MoviePagination.vue'
import axios from 'axios'
export default {
  data() {
    return {
      data: {},
      api_key: "f336c1990399255fb555a88f4ff52b33",
    };
  },
  components: {
    MovieCard,
    MoviePagination,
  },
  methods: {
    getMovies(page) {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&&page=${ page }`)
        .then(res => (
          this.data = res.data
        ))
    },
    onPageChange(page) {
      this.getMovies(page)
    }
  },
  created() {
    this.getMovies();
  },
};
</script>