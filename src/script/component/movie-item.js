// Dokumentasi : https://developers.themoviedb.org/3/getting-started/images
const image = "https://image.tmdb.org/t/p/w500/";
//

class MovieItem extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
        <style>
        * {
            margin : 0;
            padding : 0;
            box-sizing : border-box;
        }

        
        :host {
            display: flex;
            margin: 20px 0px;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
            border-radius: 8px;
            overflow: hidden;
        }

        .fan-art-movie {
            width: 40%;
            object-fit: cover;
            object-position: center;
        }

        .movie-info {
            width: 60%;
            padding: 20px;
        }
        
        .movie-info > h2 {
            font-family: 'Poppins', serif;
            font-weight: bolder;
            color: #EA4C89;       
        }
        
        .movie-info > p {
            font-family: 'Roboto', sans-serif;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            -webkit-line-clamp: 3;
        }

        .movie-info > p:hover{
            overflow: visible;
            -webkit-line-clamp: 12;
        }
        </style>
        <img class="fan-art-movie" src="${image}.${this._movie.backdrop_path}" alt="Fan Art">
            <div class="movie-info">
            <h2>${this._movie.title}</h2>
            <p>Tanggal Rilis : ${this._movie.release_date}</p>
            <p>Nilai : ${this._movie.vote_average}</p>
            <p>Tentang :</br></br>${this._movie.overview}</p>
        </div>`;
	}
}

customElements.define("movie-item", MovieItem);
