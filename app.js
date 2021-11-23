// getting our variables form html
const body=document.getElementById("body");
const h1=document.querySelector(".h1");
const btn=document.querySelector(".btn");

// setting an array containing some colors
const colors=['red','orange','yellow','green','blue','cyan','violet'];

// setting the default color of the body
body.style.backgroundColor='black';

// adding an eventListener for the button
btn.addEventListener('click',changeColor);


function changeColor(e){
  // generating a random number that is bounded by the length of colors array
 colorIndex=parseInt(Math.random()*colors.length); 

// changing the background and h1 color
  body.style.backgroundColor=colors[colorIndex];
  h1.style.color=colors[colorIndex+1];


  e.preventDefault();
}