export class MusicCard extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        if (this.type == "album"){
            this.shadowRoot.innerHTML = /*html*/`
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/${this.id}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            `
        } else if (this.type == "track"){
            this.shadowRoot.innerHTML = /*html*/`
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${this.id}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            `
        }

    }
    static get observedAttributes(){
        return ["uri"];
    }
    attributeChangedCallback(name,old,now){
        let[nameUri, type, id] = now.split(":")
        this.id = id;
        this.type = type;
    }
}
customElements.define("music-card", MusicCard)