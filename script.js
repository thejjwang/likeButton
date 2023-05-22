let img = document.getElementById('quotes');
let button = document.querySelector('button');
let mood = document.getElementById('mood-selector')

let happy = [
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_07/2233721/171120-smile-stock-njs-333p.jpg", 
    "https://st.depositphotos.com/4058993/60405/i/600/depositphotos_604056392-stock-photo-happy-faces-ball-yellow-background.jpg",
]
let sad = [
    "https://images.unsplash.com/photo-1594712941268-3e43e6308f7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FkJTIwYm95fGVufDB8fDB8fHww&w=1000&q=80", 
    "https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701_1280.jpg",

]

let excited = [
    "https://t4.ftcdn.net/jpg/01/94/44/51/360_F_194445131_0su58xS5YVSYqIjwbYmdbmBQrZD8d0HU.jpg", 
    "https://images.pexels.com/photos/3768724/pexels-photo-3768724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 

]

let bored = [
    "https://www.verywellfamily.com/thmb/eKISZzsfagXXahgrfjdFyRo8H2c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/121110878-56a13da35f9b58b7d0bd5628.jpg", 
    "https://www.gse.harvard.edu/sites/default/files//content-images/Bored-out-of-their-minds.jpg", 
]


button.addEventListener('click', randomQuote)
function randomQuote(){
    switch(mood.value) {
        case 'happy':
          img.src = happy[Math.floor(Math.random() * 2)];
          break;
        case 'sad':
          img.src = sad[Math.floor(Math.random() * 2)];
          break;
        case 'excited':
          img.src = excited[Math.floor(Math.random() * 2)];
          break;
        case 'bored':
          img.src = bored[Math.floor(Math.random() * 2)];
          break;
        default:
          // code block
      }
}
