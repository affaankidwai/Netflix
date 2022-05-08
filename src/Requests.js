const key = '41d9a6b9e178a61555dd46ef79049924'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
};

export default requests;