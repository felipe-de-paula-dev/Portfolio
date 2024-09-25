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
      deletando = false;
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
const nav = document.getElementById("nav");

dark.onclick = function() {
    dark.classList.toggle("active"); 

    if (dark.classList.contains("active")) {
      document.documentElement.style.setProperty('--corfundo', '#121212');
      document.documentElement.style.setProperty('--cortextos', 'white');
      document.documentElement.style.setProperty('--coradicional', '#836FFF');
      document.documentElement.style.setProperty('--corfundoitens', '#121212');
      nav.style.backgroundColor = 'rgba(0,0,0,0.4)';
    } else {
      document.documentElement.style.setProperty('--corfundo', '#fff');
      document.documentElement.style.setProperty('--cortextos', 'black');
      document.documentElement.style.setProperty('--coradicional', '#1aa9bc');
      document.documentElement.style.setProperty('--corfundoitens', '#ebeaea');
      nav.style.backgroundColor = 'rgba(0,0,0,0.3)';
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

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    
    // Verifica se o menu está aberto ou fechado e aplica a rotação
    if (isMenuOpen) {
        menuToggle.style.transform = 'rotate(0deg)'; // Volta à posição original
        setTimeout(menu.style.opacity = '0', 500);
        setTimeout(() => {
          menu.style.display = 'none'; 
      }, 400); 
      setTimeout(isMenuOpen = false, 550);   

    } else {
        menuToggle.style.transform = 'rotate(90deg)'; // Rotaciona 90 graus
        menu.style.display= 'flex';
        setTimeout(menu.style.opacity = '1', 500);   
        setTimeout(isMenuOpen = true, 550);     
    }

});

