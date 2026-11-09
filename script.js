const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {

    cadastroForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome =
            document.getElementById("nome").value;

        const email =
            document.getElementById("email").value;

        const whatsapp =
            document.getElementById("whatsapp").value;


        const mensagem =
            document.getElementById("mensagemCadastro");


        mensagem.innerHTML =
            "Cadastro recebido! Em breve sua conta será criada.";


        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("WhatsApp:", whatsapp);

    });

}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const mensagem =
            document.getElementById("mensagemLogin");


        mensagem.innerHTML =
            "Login recebido! Em breve você será direcionado para sua área.";


        console.log("Email:", email);

    });

}