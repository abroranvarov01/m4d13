import { getDatacatalog, getProduct } from "./service.js";

const phones = document.querySelector(".phones");
const notebooks = document.querySelector(".notebooks");
const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close");
const modal__content = document.querySelector(".modal__content");
const dataRender = async () => {
  const data = await getDatacatalog("phones");
  phones.innerHTML = data
    ?.slice(0, 12)
    .map(
      (item) => `
            <div>
                <img src="${item.img}" alt="img">
                <h1>${item.title}</h1>
                            <button data-title="phones" data-id="${item.id}">Show</button>
            </div>
`
    )
    .join("");
  phones.innerHTML;
};

const modalRender = (data) => {
  modal__content.innerHTML = `
                        <img src="${data.img}" alt="">
                        <h1>${data.title}</h1>
                        <p>${data.rame}</p>
                        <p>${data.color}</p>
                        <p>${data.brand}</p>
                        <p>${data.price}</p>
    `;
};

const openModal = (data) => {
  modal.style.display = "block";
  modalRender(data);
};

phones.addEventListener("click", async (e) => {
  const data = await getProduct(e.target.dataset.title, e.target.dataset.id);
  openModal(data);
});

closebtn.addEventListener("click", () => {
  modal.style.display = "none";
});

dataRender();
