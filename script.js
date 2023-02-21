

const data = JSON.parse(dataProduct);
const cont_info = document.querySelector(".cont_info");

data.forEach(element => {
const imgcont1 = document.createElement("div");
const img= document.createElement("img");
const title= document.createElement("h3");
const text= document.createElement("p");
const price= document.createElement("p");

img.src = element.img; 
title.textContent = element.title;
text.textContent = element.text; 
price.textContent = element.price; 
price.style.color="red";


cont_info.appendChild(imgcont1);
imgcont1.appendChild(img);
imgcont1.appendChild(title);
imgcont1.appendChild(text);
imgcont1.appendChild(price);


});