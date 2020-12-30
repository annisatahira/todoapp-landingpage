class KenapaItem extends HTMLElement {
    set item(data) {
      this._data = data;
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="kenapa-to-do-app-item">
            <img src=${this._data.image} />
            <span class="kenapa-to-do-app-item__number">${this._data.number}</span>
            <div class="kenapa-to-do-app-item__title">
            ${this._data.title}
            </div>
            <div class="kenapa-to-do-app-item__deskripsi">
            ${this._data.content}
            </div>
        </div>`;
    }
  }
  
  customElements.define("kenapa-item", KenapaItem);