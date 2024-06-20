document.addEventListener('DOMContentLoaded', function() {
    var loginModal = document.getElementById('login');
    var registerModal = document.getElementById('register');
    var loginBtn = document.querySelector('.login-btn');
    var closeBtns = document.querySelectorAll('.close-btn');
    var registerBtn = document.querySelector('.register-btn');

    loginBtn.onclick = function() {
        loginModal.style.display = 'block';
    }

    registerBtn.onclick = function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    }

    closeBtns.forEach(btn => {
        btn.onclick = function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        }
    });

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        } else if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }

    // Carousel functionality
    var carouselImages = document.querySelector('.carousel-images');
    var images = document.querySelectorAll('.carousel img');
    var currentIndex = 0;

    document.querySelector('.carousel-btn.left').onclick = function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        carouselImages.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    };

    document.querySelector('.carousel-btn.right').onclick = function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        carouselImages.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const userCommentsDiv = document.getElementById('user-comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        // Crear el nuevo comentario
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <img src="profile3.jpg" alt="Profile Picture" class="profile-pic">
            <div>
                <strong>${username}</strong>
                <p>${comment}</p>
            </div>
        `;

        // Agregar el nuevo comentario a la lista de comentarios
        userCommentsDiv.appendChild(newComment);

        // Limpiar el formulario después de enviar el comentario
        commentForm.reset();
    });
});







/*Temporizador del boton*/ 
var boton = document.getElementById("download");
var contador = 30;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> 30 segundos para redirigirte a la pagina de descargas.</b>";
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> segundos para redirigirte a la pagina de descargas. </b>";
      }
   }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;