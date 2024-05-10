export class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../../css/components/SearchBar.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

            <article class="searchFigure">
                <i class="bi bi-search"></i>
                <input class="searchBar" type="text" name="..." id="..." placeholder="What do you want to play?">
            </article>
        `;
    }
}

customElements.define('search-bar', SearchBar);