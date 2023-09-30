import { TMDB } from 'tmdb-ts';

const tmdbAPI = new TMDB('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmJhN2U2OWJlNDY3M2RiZjQ3MTZmNmVkOGRjYmI0ZiIsInN1YiI6IjY1MTY4NGJiZDQ2NTM3MDlkZjQzN2VlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kvERqPG3V8cbg-IKrtCYDDxcaa_8XzLkKAY0B5UGPeY');

export default tmdbAPI;
// @ts-ignore
window.api = tmdbAPI;
