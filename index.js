let btnsPlus = Array.from(document.getElementsByClassName("plus"));
let btnsMinus = Array.from(document.getElementsByClassName("minus"));
let prices = Array.from(document.getElementsByClassName("price"));
let qtes = Array.from(document.getElementsByClassName("qte"));
let totalUnit = Array.from(document.getElementsByClassName("total-unit"));
let hearts = Array.from(document.getElementsByClassName("heart"));
let products = Array.from(document.getElementsByClassName("product"));
let btnsRmv = Array.from(document.getElementsByClassName("btn-rmv"));



console.log(prices[0].innerHTML);
// let btnsPlus = Array.from(document.querySelectorAll(".plus"));

/********************* Increment quantity ****************** */

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    qtes[i].innerHTML++; // we dont need to convert the inner to a number

    totalUnit[i].innerHTML = (
      +qtes[i].innerHTML * +prices[i].innerHTML
    ).toFixed(2);
    totalBag();

    // qtes[i].innerHTML = +qtes[i].innerHTML + 1; // we must convert the inner to a number with (+)
  });
}

/*************************** Decrement quantity **************** */

for (let i = 0; i < btnsMinus.length; i++) {
  btnsMinus[i].addEventListener("click", function () {
    if (qtes[i].innerHTML > 0) {
      qtes[i].innerHTML--;
      totalUnit[i].innerHTML = +qtes[i].innerHTML * +prices[i].innerHTML;
      totalBag();
    }
  });
}

/****************** Like dislike product ************ */

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("red");
  });
}

/********************** delete product  ****************/

for (let i = 0; i < btnsRmv.length; i++) {
  btnsRmv[i].addEventListener("click", function () {
    // alert("are you sure");
    products[i].remove();
    totalBag();
  });
}
 /********************* total products *******************/
 function totalBag() {
  let prices = Array.from(document.getElementsByClassName("price"));
  let qtes = Array.from(document.getElementsByClassName("qte"));

  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += +prices[i].innerHTML * +qtes[i].innerHTML;
  }

  document.getElementById("totale").innerText = sum;
}