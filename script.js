window.scrollTo(0, 0);


  const textoElemento = document.getElementById('textoamudar');
  const palavras = ["front-end", "back-end"];
  let palavraAtualIndex = 0;
  let letraAtualIndex = 0;
  let deletando = false;
  
  function alterarTexto() {
    const palavraAtual = palavras[palavraAtualIndex];
    let texto = palavraAtual.substring(0, letraAtualIndex);
    if (!deletando && letraAtualIndex === palavraAtual.length) {
      texto += "|";
    }
    textoElemento.textContent = texto;
    

     if (deletando && letraAtualIndex > 0) {
      letraAtualIndex--;
    } else {
      letraAtualIndex++;
    }
  
    if (letraAtualIndex === 0) {
      textoElemento.textContent = "|"; 
      letraAtualIndex++;
      palavraAtualIndex = (palavraAtualIndex + 1) % palavras.length;
      setTimeout(alterarTexto, 500); // Atraso de 2 segundos para começar a próxima palavra
    } else if (letraAtualIndex > palavraAtual.length) {
      deletando = true;
      setTimeout(alterarTexto, 900); // Atraso menor para apagar mais rápido
    } else {
      setTimeout(alterarTexto, 100); // Atraso padrão para escrever
    }
  }
  
  // Inicialização
  alterarTexto();


  


  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const dark = document.getElementById("dark");

dark.onclick = function() {
    dark.classList.toggle("active"); 

    if (dark.classList.contains("active")) {
      document.documentElement.style.setProperty('--corfundo', '#121212');
      document.documentElement.style.setProperty('--cortextos', 'white');
      document.documentElement.style.setProperty('--coradicional', '#836FFF');
      document.documentElement.style.setProperty('--corfundoitens', '#121212');
      document.documentElement.style.setProperty('--cortexto2', '#c1c1c1');
    } else {
      document.documentElement.style.setProperty('--corfundo', '#fff');
      document.documentElement.style.setProperty('--cortextos', 'black');
      document.documentElement.style.setProperty('--coradicional', '#1aa9bc');
      document.documentElement.style.setProperty('--corfundoitens', '#ebeaea');
      document.documentElement.style.setProperty('--cortexto2', '#1d1d1d');
    }
};

document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Pegando os valores dos campos
  const primeiroNome = document.getElementById("primeiroNome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const numeroTelefone = document.getElementById("numeroTelefone").value;
  const assuntoEmail = document.getElementById("assuntoEmail").value;
  const mensagem = document.getElementById("mensagem").value;
  
  // Validação simples
  if (primeiroNome && sobrenome && numeroTelefone && assuntoEmail && mensagem) {
    alert("Mensagem enviada com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});


document.querySelectorAll('.to-top').forEach(button => {
  button.addEventListener('click', function() {
    const targetID = this.getAttribute('data-target'); // Pega o ID da seção alvo a partir do atributo data-target
    const targetSection = document.querySelector(targetID); // Seleciona a seção alvo

    // Scroll suave até a seção
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Ajuste se necessário para cabeçalhos fixos
      behavior: 'smooth' // Define o scroll suave
    });
  });
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
let isMenuOpen = false;
let isAnimating = false; // Adiciona um controle de animação

menuToggle.addEventListener('click', () => {
    if (isAnimating) return; 

    isAnimating = true; 

    if (isMenuOpen) {
        menuToggle.style.transform = 'rotate(0deg)';
        
        setTimeout(() => {
            menu.style.transform = 'translateX(-100%)';
        }, 100); 
        
        setTimeout(() => {
            menu.style.opacity = '0';
        }, 200); 
        
        setTimeout(() => {
            menu.style.display = 'none';
            isMenuOpen = false;
            isAnimating = false; 
        }, 600); 
        
    } else {
        menuToggle.style.transform = 'rotate(90deg)'; 
        
        menu.style.display = 'flex'; 
        
        setTimeout(() => {
            menu.style.transform = 'translateX(0%)';
        }, 200); 
        
        setTimeout(() => {
            menu.style.opacity = '1';
        }, 200); 
        
        setTimeout(() => {
            isMenuOpen = true;
            isAnimating = false;
        }, 600); 
    }
});


document.getElementById("insta").addEventListener("click", function() {
  setTimeout(function() {
      window.open("https://www.instagram.com/lypeex/", "_blank"); 
  }, 300);  
});

document.getElementById("linkedin").addEventListener("click", function() {
  setTimeout(function() {
      window.open("https://www.linkedin.com/in/felipe-de-paula-254654329/", "_blank"); 
  }, 300); 
});

document.getElementById("git").addEventListener("click", function() {
  setTimeout(function() {
      window.open("https://github.com/felipe-de-paula-dev", "_blank"); 
  }, 300); 
});



window.sr = ScrollReveal({ reset: true });


sr.reveal('.texto-container, .container.left .content', {
  distance: '100%',      // Vem de longe
  origin: 'left',        // Aparece da esquerda
  duration: 1100,        // Duração da animação
  easing: 'ease-in-out', // Suavização da animação
  scale: 0.8,            // Começa menor e cresce até o tamanho original
  opacity: 0,            // Inicia transparente
  mobile: false
});



sr.reveal('.imgconteudo, .container.right .content', {
  distance: '100%',
  origin: 'right',       // Aparece da direita
  duration: 1200,
  easing: 'ease-in-out',
  scale: 0.8,
  opacity: 0,
  mobile: false
});

sr.reveal('.conteudo, .imgconteudo', {
  distance: '50px',
  origin: 'bottom',       
  duration: 1200,
  easing: 'ease-in-out',
  opacity: 0,
  desktop: false
});



sr.reveal('.projetos', {
  distance: '50px',
  origin: 'bottom',       
  duration: 1200,
  easing: 'ease-in-out',
  opacity: 0
});

sr.reveal('.timeline', {
  distance: '50px',
  origin: 'bottom',       
  duration: 1200,
  easing: 'ease-in-out',
  opacity: 0
});

sr.reveal('.contact-form', {
  distance: '50px',
  origin: 'bottom',       
  duration: 1200,
  easing: 'ease-in-out',
  opacity: 0
});

sr.reveal('.servicos', {
  distance: '50px',
  origin: 'bottom',       
  duration: 1200,
  easing: 'ease-in-out',
  opacity: 0
});




