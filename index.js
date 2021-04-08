"use strict";

document.querySelector("#code").addEventListener("input", (e) => {
    if (e.target.value === "123") {
        document.querySelector(".lockscreen").classList.add("hidden");
    }
});

const searchParams = new URLSearchParams(window.location.search);

const creditCardNr = searchParams.get("credit-card-nr");
const expDate = searchParams.get("exp-date");
const cvv = searchParams.get("cvv");

if (creditCardNr && expDate && cvv) {
    document.querySelector("#output").textContent = `nr: ${creditCardNr}, expDate: ${expDate}, cvv: ${cvv}`;
}
