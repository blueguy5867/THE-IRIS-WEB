const navbarToggle = document.querySelector('.navbar-toggle')
const navbarMenu = document.querySelector('.navbar-menu')

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const image = document.getElementById('productimg');
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener('click', function(){
image.src = 'Og Blazer.png'
for(bt of btn){
    bt.classList.remove('active');
}
this.classList.add('active');
});

btn[1].addEventListener('click', function(){
image.src = 'Red Blazer.png'
for(bt of btn){
    bt.classList.remove('active');
}
this.classList.add('active');
});

btn[2].addEventListener('click', function(){
image.src = 'Blue Blazer.png'
for(bt of btn){
    bt.classList.remove('active');
}
this.classList.add('active');
});

function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}