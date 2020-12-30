class Tentang extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <section id="tentang">
            <div class="tentang">
                <h1 class="tentang__headline">
                Mudahkan Pencatatan Agenda Harianmu
                </h1>
                <p class="tentang__deskripsi">
                Dengan “to do” app, semua yang akan anda kerjakan akan selalu ada dalam genggaman smartphone anda.
                Tingkatkan produktivitas harian anda
                </p>
                <button class="button tentang__btn">
                Pelajari Selengkapnya
                <img class="arrow" src="./images/icons/arrow-right.png" alt="" />
                </button>
            </div>
        </section>`;
    }
  }
  
  customElements.define("tentang-section", Tentang);
  