const navbarToggle = document.querySelector('.navbar-toggle')
const navbarMenu = document.querySelector('.navbar-menu')

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const image = document.getElementById('productimg');
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener('click', function(){
image.src = 'Shealrig jacket Bgremoved (1).png'
for(bt of btn){
    bt.classList.remove('active');
}
this.classList.add('active');
});

btn[1].addEventListener('click', function(){
image.src = 'Brown Shearling Jacket No BGResze.png'
for(bt of btn){
    bt.classList.remove('active');
}
this.classList.add('active');
});

btn[2].addEventListener('click', function(){
image.src = 'Brown_Shearling_Jacket__1_-removebg-preview.png'
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