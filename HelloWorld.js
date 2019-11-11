class HelloWorld extends HTMLElement{

    constructor(){
        super();
        // this.attachShadow({mode:'open'});
        this.render();
    }

    render() {
        const t = document.createElement('div');
        t.innerHTML = 'hello world';

        // this.shadowRoot.appenChild(t);
        this.appendChild(t);
    }
};
window.customElements.define("hello-wold", HelloWorld);

export HelloWorld;