let preivew = document.getElementById("preview");
let images = document.querySelectorAll("#box-images img");
let incrementButton = document.querySelector(".increment1");
let decrementButton = document.querySelector(".decrement");
let number = document.querySelector(".Number");
incrementButton.onclick = () => {
  number.textContent++;
};
decrementButton.onclick = () => {
  if (number.textContent === "1") {
    return;
  }
  number.textContent--;
};
let Images = [
  "./imgs/image-product-1.jpg",
  "./imgs/image-product-2.jpg",
  "./imgs/image-product-3.jpg",
  "./imgs/image-product-4.jpg",
];
let index = 3;
images.forEach((e) => {
  e.onclick = function () {
    preivew.src = e.getAttribute("src");
    let Overlay = document.createElement("div");
    Overlay.className = "popup-overlay";
    document.body.append(Overlay);
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let preivewImg = document.createElement("img");
    preivewImg.src = e.src;
    preivewImg.className = "";
    popupBox.appendChild(preivewImg);
    document.body.appendChild(popupBox);
    let buttonRight = document.createElement("button");
    buttonRight.onclick = function () {
      if (index === 0) {
        return;
      }
      index--;
      preivewImg.src = Images[index];
    };
    buttonRight.id = "right";
    popupBox.appendChild(buttonRight);
    buttonRight.className = "buttonRight";
    buttonRight.id = "Right";
    let arrowRight = document.createElement("i");
    arrowRight.className = "fa-solid fa-angle-right";
    buttonRight.appendChild(arrowRight);
    let buttonLeft = document.createElement("button");
    buttonLeft.onclick = function () {
      if (index === 3) {
        return;
      }
      index++;
      preivewImg.src = Images[index];
    };
    let arrowLeft = document.createElement("i");
    arrowLeft.className = "fa-solid fa-angle-left";
    buttonLeft.appendChild(arrowLeft);
    buttonLeft.className = "buttonLeft";
    buttonLeft.id = "Left";
    popupBox.appendChild(buttonLeft);
    let close = document.createElement("button");
    close.onclick = function () {
      close.parentElement.remove();
      Overlay.remove();
    };
    close.appendChild(document.createTextNode("X"));
    close.className = "close";
    popupBox.appendChild(close);
    let boxImages = document.createElement("div");
    boxImages.className = "small-images";
    for (i = 0; i < Images.length; i++) {
      let img = document.createElement("img");
      img.setAttribute("src", Images[i]);
      img.onclick = function () {
        preivewImg.src = img.getAttribute("src");
      };
      boxImages.appendChild(img);
    }
    popupBox.appendChild(boxImages);
  };
});
// Toogle Links in secreen mobile

let Links = document.querySelector(".links");
let toggle = document.querySelector(".toggle");
function toggleElement(ele) {
  ele.classList.toggle("open");
}
toggle.onclick = (e) => {
  e.stopPropagation();
  toggleElement(Links);
};
document.addEventListener("click", (e) => {
  if (e.target != toggle && e.target != Links) {
    if (Links.classList.contains("open")) {
      Links.classList.remove("open");
    }
  }
});
Links.onclick = function (e) {
  e.stopPropagation();
};
// Aadd product to cart
let cart = document.querySelector(".cart");
let addButton = document.querySelector(".button");
let box = document.querySelector(".box");
let boxOrder = document.createElement("div");
let productNumber = document.querySelector(".product-Number");
addButton.onclick = (e) => {
  boxOrder.innerHTML = "";
  boxOrder.className = "box-Order";
  let parent = document.createElement("div");
  parent.className = "parent";
  let img = document.createElement("img");
  img.src = preivew.getAttribute("src");
  parent.appendChild(img);
  let productInfo = document.createElement("div");
  productInfo.className = "productInfo";
  let address = document.createElement("p");
  address.appendChild(document.createTextNode("Fall Limited Edition Sneakers"));
  productInfo.appendChild(address);
  let price = document.createElement("span");
  let static = 125;
  price.appendChild(
    document.createTextNode(
      `$${static} x ${number.textContent}  $${
        static * parseInt(number.textContent)
      }.00`
    )
  );
  productInfo.appendChild(price);
  parent.appendChild(productInfo);
  let iconDelete = document.createElement("i");
  
  iconDelete.className = "fa-solid fa-trash delete";
  iconDelete.onclick = () => {
    boxOrder.remove();
    productNumber.innerHTML = "";
    number.textContent = "1";
    productNumber.classList.remove("open");
  };
  parent.appendChild(iconDelete);
  let CheckOut = document.createElement("button");
  CheckOut.appendChild(document.createTextNode("Checkout"));
  boxOrder.appendChild(parent);
  boxOrder.appendChild(CheckOut);
  box.appendChild(boxOrder);
  productNumber.innerHTML = number.textContent;
  productNumber.classList.add("open");
  number.textContent++;
};
cart.onclick = (e) => {
  e.stopPropagation();
  toggleElement(box);
};
document.querySelector(".box").onclick = (e) => {
  e.stopPropagation();
};
document.addEventListener("click", (e) => {
  if (e.target != cart && e.target != document.querySelector(".box")) {
    if (document.querySelector(".box").classList.contains("open")) {
      document.querySelector(".box").classList.remove("open");
    }
  }
});
