const paragraph = document.getElementsByTagName('p');
console.log(paragraph) // html collection
for(let para of paragraph){ //loop
    console.log(para) // every element
    console.log(para.innerHTML);// innerhtml
    console.log(para.innerText);// innertext
};

const para = document.getElementById("para-1");
console.log(para);
console.log(para.innerText);
console.log((para.innerText = "paragraph text changed"));

const parag = document.getElementsByClassName('para');
console.log(parag);
for(let i of parag){
    console.log(i.innerText)
}