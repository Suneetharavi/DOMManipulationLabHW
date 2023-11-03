let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  //const mainEl = document.querySelector('main')
    const mtitle = document.querySelector('#main-title') 
    mtitle.textContent = 'Dom Toretto Playground'

  // Part 2
  const bcolor = document.querySelector('body') 
  bcolor.style.backgroundColor = 'coral'
 


  // Part 3
    //Select DOM's Favorite Things list and remove the last list item.

    const cid = document.querySelector('li:last-child')
          cid.parentElement.removeChild(cid)

    
  // Part 4

  //Select all .special-titleclass elements and change their font-sizeto 2rem. 
  //Remember you might have to iterate through the list of elements

    const spl = document.querySelectorAll('.special-title')
    spl.forEach((elm) =>
    elm.style.fontSize = '2rem'
    )

  // Part 5

  //Turns out DOM never raced in Chicago.
  // Access the Past Races list and remove Chicago.

   const oldRaces = document.querySelector('#past-races');
   oldRaces.removeChild(oldRaces.children[3])

  // Part 6
  //Let's add to DOM's Past Races list. 
  //Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.

  const newEl = document.createElement('li')
  newEl.innerHTML = "Pittsburgh"
  oldRaces.append(newEl)

  // Part 7

  //Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div>with class of .blog-post, 
  //a new <h2>with text, and a new <p>with some text. 
  //Think about what order you want to create the elements, 
  //and what order you want to append them in.

  div = document.createElement('div');
  div.className = 'blog-post'
  div.style.padding = '1rem'
  div.style.height = '250px'
  div.style.margin = '3rem'
  div.style.border = '1rem';
  div.style.backgroundColor = 'rgb(134, 48, 225)'
  
  const maindiv = document.querySelector('.main');
  maindiv.append(div)

   let h2 = document.createElement('h2')
   h2.textContent = 'Pittsburgh'
   h2.style.color = 'white'
   div.appendChild(h2)

   let p = document.createElement('p')
   p.textContent = 'Finally. Pittsburg wins the Race!'
   div.appendChild(p);

  // Part 8
  //Query select the #quote-titleID element and add a click event handler. That event handler should use the 
  //function randomQuote whenever #quote-titleis clicked.

  const queryTitle = document.querySelector("#quote-title");
  queryTitle.addEventListener("click", randomQuote());

  // Part 9

 //Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. 
 //The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
 //The mouseouthandler should toggle the class .purple
 //The mouseenterhandler should toggle the class .red

 const allBPosts = document.querySelectorAll(".blog-post");
 //console.log(allBPosts)

 allBPosts.forEach((item) => {
   item.addEventListener("mouseout", function (e) {
     this.classList.toggle("red");
   });
   item.addEventListener("mouseenter", function (e) {
     this.classList.toggle("purple");
   });
 });
 
});
