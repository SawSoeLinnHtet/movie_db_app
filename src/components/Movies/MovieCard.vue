<template>
  <div
    v-for="movie in movies"
    :key="movie.id"
    class="col-12 col-sm-6 col-md-6 col-lg-3 mb-3"
  >
    <img
      :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
      alt=""
      class="img-fluid bg-black"
    />
    <div class="card-text d-block w-auto bg-olive d-flex flex-wrap flex-column">
      <div class="action pt-2 mb-0">
        <a href="#" class="heart h4">
          <i class="ri-heart-fill heart"></i>
        </a>
        <a href="#" class="add h4">
          <i class="ri-add-box-fill add"></i>
        </a>
        <a href="#" class="download h4">
          <i class="ri-download-fill download"></i>
        </a>
      </div>
      <div class="px-2 py-0">
        <span class="h5 title text-yellow mt-1 mb-2">{{ movie.title }}</span>
        <span class="mb-1 text-lime d-block">
        <span class="info-title text-light">Release Date:</span> {{
          movie.release_date
        }}</span>
        <span class="text-lime mb-1 d-block">
          <span class="info-title text-light"> Rating: </span
          >{{ movie.vote_average }}/10
        </span>
        <span class="text-lime mb-2 d-block">
          <span class="info-title text-light"> Popularity: </span
          >{{ movie.popularity }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import date from 'date-and-time';
export default { 
  props: {
      movies: {
        type: Object,
        required: true 
      }
    }  
  }
</script>