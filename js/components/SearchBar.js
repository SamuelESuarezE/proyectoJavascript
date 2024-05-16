export class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
            <style>


/* ARTICLE */
.searchFigure i{
    color: #bbbbbb;
    position: absolute;
    top: 24px;
    left: 12px;
}

.searchFigure:hover > i{
    color: white;
}


.searchFigure {
    position: relative;
    height: 28px;
    width: 100%

}

/* INPUT TEXT */

.searchBar {
    width: calc(100% - 72px);
    background-color: #242424;
    border: 0;
    border-radius: 500px;
    color: #fff;
    height: 100%;
    padding: 6px 36px;
    margin-block: 12px;
    text-overflow: ellipsis;
}

.searchBar:hover {
    box-shadow: 0px 0px 1.5px rgb(197, 197, 197);
    background-color: #282828;
}

            </style>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

            <article class="searchFigure">
                <i class="bi bi-search"></i>
                <input class="searchBar" type="text" name="..." id="..." placeholder="What do you want to play?">
            </article>
        `;
    }
}

customElements.define('search-bar', SearchBar);