// API Didapatkan dari themoviedb, https://developers.themoviedb.org/3/getting-started/introduction
const baseUrlApi =
	"https://api.themoviedb.org/3/search/movie?api_key=69eb843bb60cb822d37592963da063e6&language=en-US&query=";

class DataSource {
	static searchMovie(keyword) {
		return fetch(`${baseUrlApi}${keyword}`)
			.then((response) => {
				return response.json();
			})
			.then((responseJson) => {
				if (responseJson.results) {
					return Promise.resolve(responseJson.results);
				} else {
					return Promise.reject(`${keyword} is not found`);
				}
			});
	}
}

export default DataSource;
