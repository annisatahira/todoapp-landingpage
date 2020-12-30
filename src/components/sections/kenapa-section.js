class Kenapa extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="kenapa-to-do-app">
      <h1 class="kenapa-to-do-app__title">
        Kenapa Menggunakan TO DO App?
      </h1>
      <div class="container">
        <div id="kenapa-to-do-app-list" class="row">
        </div>
      </div>
    </section>`;
  }
}

customElements.define("kenapa-section", Kenapa);
