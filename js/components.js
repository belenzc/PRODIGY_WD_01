//CARD BENEFICIOS
customElements.define(
    "card-beneficios",
    class extends HTMLElement {
        connectedCallback() {
            let img = this.getAttribute("img");
            let text = this.getAttribute("text");

            console.log(`${img} / ${text}`);

            this.innerHTML = /*html*/ ` 
                <div class="card col s12 l4">
                    <div class="card-image">
                        <img src="css/assets/graphics/${img}">
                    </div>
                    <div class="card-content">
                        <span class="card-title center-align">${text}</span>
                    </div>
                </div>
            `;
        }
    }
);

//CARD TESTIMONIOS
customElements.define(
    "card-testimonios",
    class extends HTMLElement {
        connectedCallback() {
            let title = this.getAttribute("title");
            let text = this.getAttribute("text");

            console.log(`${title} / ${text}`);

            this.innerHTML = /*html*/ ` 
            <div class="testimonios card">
                <div class="card-content white-text">
                    <span class="card-title center-align">${title}</span>
                    <p class="center-align">${text}</p>
                </div>
            </div >
            `;
        }
    }
);

