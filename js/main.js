let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
let header=document.getElementById('header');
let linea=document.getElementById('linea');
let curriculum=document.getElementById('curriculum');
let comentario=document.getElementById('comentario');
let footer=document.getElementById('footer');
let mail=document.getElementById('mail');
let github=document.getElementById('github');
let linkedin=document.getElementById('linkedin');
let whatsapp=document.getElementById('whatsaap');
let imagen=document.getElementById('imagenCircular');

toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
    if (checked==true){
        label_toggle.innerHTML='<img src="img/sol.PNG" width="40" height="50"alt="modo claro">';
        header.style.backgroundColor = "black";
        header.style.color = "yellow";
        linea.style.backgroundColor = "white";
        curriculum.style.backgroundColor="yellow";
        curriculum.style.color = "black";
        comentario.style.backgroundColor="lightgoldenrodyellow";
        comentario.style.color = "black";
        footer.style.backgroundColor = "lightgoldenrodyellow";
        footer.style.color = "black";
        mail.innerHTML = '<img src="img/mail-dark.png" width="40" margin="50px" alt="Mail" target="_blank">';
        github.innerHTML = '<img src="img/github-dark.png" width="40" margin="50px" alt="github" target="_blank">';
        linkedin.innerHTML = '<img src="img/linkedin-dark.png" width="40" margin="50px" alt="linkedin" target="_blank">';
        whatsapp.innerHTML = '<img src="img/whatsapp-dark.png" width="50" margin="50px" alt="whatsapp" target="_blank">';
        imagen.setAttribute("src", "img/Carla.png");
        imagen.setAttribute("width", "30%");
        
        

    }else{
        label_toggle.innerHTML='<img src="img/luna.PNG" width="30" height="40"alt="modo oscuro">';
        label_toggle.style.color="rebeccapurple";
        header.style.backgroundColor = "white";
        header.style.color = "black";
        linea.style.backgroundColor = "darkblue";
        curriculum.style.backgroundColor="darkblue";
        curriculum.style.color = "white";
        comentario.style.backgroundColor="lightblue";
        comentario.style.color = "black";
        footer.style.backgroundColor = "darkblue";
        footer.style.color = "white";
        mail.innerHTML = '<img src="img/mail.png" width="40" margin="50px" alt="Mail" target="_blank">';
        github.innerHTML = '<img src="img/github.png" width="40" margin="50px" alt="github" target="_blank">';
        linkedin.innerHTML = '<img src="img/linkedin.png" width="40" margin="50px" alt="linkedin" target="_blank">';
        whatsapp.innerHTML = '<img src="img/whatsapp.png" width="50" margin="50px" alt="Mail" target="_blank">';
        imagen.setAttribute("src", "img/Carla 2023.png");
    }
})