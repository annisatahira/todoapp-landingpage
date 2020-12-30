import "../components/items/kenapa-item.js"

import List from "../components/container/list.js";
import { reasons } from "../data/data.js"

const main = () => {

  const elmKenapa = document.querySelector(
    "#kenapa-to-do-app-list"
  );
  const kenapaList = new List(elmKenapa, "kenapa-item", reasons);
  kenapaList.render();

  const kenapaItems = document.querySelectorAll('kenapa-item');
  for (let i = 0; i < kenapaItems.length; i += 1) {
    const el = kenapaItems[i];
    el.classList.add(
      'col-md-6'
    );
  }
};

export default main();
