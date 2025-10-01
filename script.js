// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
// Circle Slide Functionality
function changeSlide(index) {
  let slides = document.querySelectorAll('.mySlides');
  let dots = document.querySelectorAll('.circle-slide-item');

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  slides[index].style.display = 'block';
  dots[index].classList.add('active');
}

const openDialogButton = document.getElementById('openDialog');
const closeDialogButton = document.getElementById('closeDialog');
const dialog = document.getElementById('myDialog');

openDialogButton.addEventListener('click', () => {
    dialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
    dialog.close();
});

document.getElementById('openDialog1').addEventListener('click', function() {
  document.getElementById('myDialog1').showModal();
});

document.getElementById('closeDialog1').addEventListener('click', function() {
  document.getElementById('myDialog1').close();
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('openChat').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'block';
  });

  document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'none';
  });

  document.getElementById('sendChat').addEventListener('click', function() {
    var chatInput = document.getElementById('chatInput').value;
    if (chatInput.trim() !== "") {
      var chatBody = document.getElementById('chatBody');
      var newMessage = document.createElement('p');
      newMessage.textContent = 'You: ' + chatInput;
      newMessage.classList.add('chat-message');
      chatBody.appendChild(newMessage);
      document.getElementById('chatInput').value = ""; // Clear the input
      chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
    }
  });
}); // Added missing closing parenthesis and semicolon
let chatContainer = document.querySelector('.chat-container');
let isDragging = false;
let startX, startY, initialX, initialY;

chatContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  initialX = chatContainer.offsetLeft;
  initialY = chatContainer.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let deltaX = e.clientX - startX;
    let deltaY = e.clientY - startY;
    chatContainer.style.top = `${initialY + deltaY}px`;
    chatContainer.style.left = `${initialX + deltaX}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});