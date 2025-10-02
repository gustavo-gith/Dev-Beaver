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