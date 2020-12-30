class Nav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header">
        <div class="header__logo">A</div>
        <div class="nav-wrapper">
          <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="#tentang">Tentang</a></li>
              <li class="nav__item"><a href="#kenapa-to-do-app">Kenapa To Do App?</a></li>
              <li class="nav__item"><a href="#demo">Demo Sederhana</a></li>
              <li class="nav__item"><a href="#testimoni">Testimoni</a></li>
              <li class="nav__item"><a href="#kontak">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>`;
  }
}

customElements.define("app-nav", Nav);
