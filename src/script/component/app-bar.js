class AppBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: "open",
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
        
        <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
            scroll-behavior: smooth;
            font-family: 'Poppins', sans-serif;
        }

        :host {
            width: 100%;
            background-color: #fffff;
            color: #EA4C89;
            display: flex;
            border-bottom: 1px solid gray;
        }
        h2 {
            font-size: 30px;
            display: flex;
            justify-content: center;

            .span {
                color: #585772;
            }
        }

        
        .nav-links {
            list-style: none;
            display: flex;
            margin-left: 45em;
        }
        
        .nav-li {
            color: #ea4c89;
            font-size: 20px;
            font-weight: 500;
            text-decoration: none;
            margin: 20px;
        }
        
        .nav-li:hover {
            color: #585772;
        }

        .gray {
            color: #3C4F76;
        }
        

        </style>

        <h2>Suka<span class="gray">Nonton</span>.</h2>
        
        <nav>
        <ul class="nav-links">
          <li><a class="nav-li" href="#search-bar">Cari Tontonan</a></li>
          <li><a class="nav-li" href="#">About</a></li>
        </ul>
      </nav>`;
	}
}

customElements.define("app-bar", AppBar);
