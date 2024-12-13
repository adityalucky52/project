let bulb = document.querySelector("#bulb");
let toggle = document.querySelector("button");

let flag = 0;
toggle.addEventListener("click", () => {
   if (flag == 0) {
      bulb.style.backgroundColor = "yellow";
      flag = 1;
   } else {
      bulb.style.backgroundColor = "black";
      flag = 0;
   }
});
