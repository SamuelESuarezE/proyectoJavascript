export class CurrentTrack extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = /*html*/`
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${this.id}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        `
    }
    static get observedAttributes(){
        return ["uri"];
    }
    attributeChangedCallback(name,old,now){
        let[nameUri, album, id] = now.split(":")
        this.id = id;
    }
}
customElements.define("current-track-frame", CurrentTrack)