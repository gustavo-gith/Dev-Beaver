// login.js - Versão melhorada
function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')
    var castor_olho_aberto = document.getElementById('olhoaberto')
    var castor_olho_fechado = document.getElementById('olhofechado')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill') 
        castor_olho_aberto.classList.replace('hide', 'show')
        castor_olho_fechado.classList.replace('show', 'hide')
        
    }
    else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill') 
        castor_olho_aberto.classList.replace('show', 'hide')
        castor_olho_fechado.classList.replace('hide', 'show')
    }
}

// Adicionar validação básica do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const email = document.getElementById('email').value;
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;
            const terms = document.getElementById('terms').checked;
            
            if (!email || !usuario || !senha) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (!terms) {
                alert('Você precisa aceitar os termos e condições.');
                return;
            }
            
            // Simulação de cadastro bem-sucedido
            alert('Cadastro realizado com sucesso! Redirecionando...');
            window.location.href = 'curso.html';
        });
    }
});