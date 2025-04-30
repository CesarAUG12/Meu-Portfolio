function enviarMensagem(e) {
    e.preventDefault();

    const nome = document.getElementById("name").value;
    const mensagem = document.getElementById("msg").value;
    const numeroWhatsApp = "5511959227297"; // Substitua pelo seu número (com DDI e DDD)

    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const textoFormatado = encodeURIComponent(texto);
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoFormatado}`;
    console.log(url);
    
    window.open(url, "_blank");
  };

  let menu = document.getElementById("menu");
  let menuMobile = document.getElementById("menu-mobile");
  let overlay = document.getElementById("overlay");

  menu.addEventListener("click", () => {
    menuMobile.classList.add("active");
  });

  menuMobile.addEventListener("click", () => {
    menuMobile.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    menuMobile.classList.remove("active");
  });