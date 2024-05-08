document.addEventListener('DOMContentLoaded', main);

let error = null;
let icon = null;

function main()
{
    error = $('<span>').addClass('error');
    icon = $('<i>').addClass('error').text('X');

    $('#form').on('submit', validateForm);

    $('#nom').on('blur', validarName);
    $('#cognoms').on('blur', validarCognom);
    $('#nif').on('blur', validarNif);
    $('#data_naix').on('blur', validarDataNaix);
    $('#password').on('blur', validarPass);

}


function validarName(){
    
    let nom = $('#nom');

    if($(nom).next().prop('class').includes('error')){
        $(nom).next().remove();
        $(nom).removeClass('border-red')
    }
    
    if($(nom).val().length == 0){
        
        $(nom).addClass('border-red')
        $(nom).after($(error).text('Es obligatori').clone() );
        
        return 0;
    }else if($(nom).val().trim().length < 3){

        $(nom).addClass('border-red')
        $(nom).after($(error).text('Ha de tenir minim 3 caracters').clone());
        
        return 0;
    }else{
        return 1;
    }
}

function validarCognom(){
    
    let cognom = $('#cognoms');

    if($(cognom).next().prop('class').includes('error')){
        $(cognom).next().remove();
        $(cognom).removeClass('border-red')
    }

    
    if($(cognom).val().length == 0){
        
        $(cognom).addClass('border-red')
        $(cognom).after($(error).text('Es obligatori').clone() );
        
        return 0;
    }else if($(cognom).val().trim().length < 3){

        $(cognom).addClass('border-red')
        $(cognom).after($(error).text('Ha de tenir minim 3 caracters').clone());
        
        return 0;
    }else{
        return 1;
    }
}

function validarNif(){
    
    let nif = $('#nif');

    if($(nif).next().prop('class').includes('error')){
        $(nif).next().remove();
        $(nif).removeClass('border-red')
    }
    
    
    let lletres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    // Abans de fer la operació es comprova que el numero de dni es realment un numero y no es 0 
    let dniNumber = Number($(nif).val().trim().substr(0, $(nif).val().length-1))
    let lletraCorrecta = !isNaN(dniNumber) && dniNumber != 0 ? lletres[dniNumber % 23] : null ;

    
    if($(nif).val().length == 0){
        
        $(nif).addClass('border-red')
        $(nif).after($(error).text('Es obligatori').clone() );
        
        return 0;
    }else if($(nif).val().trim().length != 9){

        $(nif).addClass('border-red')
        $(nif).after($(error).text('Ha de tenir 9 caracters').clone());
        
        return 0;

    }else if(lletraCorrecta != $(nif).val().substr($(nif).val().length-1)){

        $(nif).addClass('border-red')
        $(nif).after($(error).text('La lletra no correspon amb el numero').clone());

    }else{
        return 1;
    }
}

function validarDataNaix(){
    let data_naix = $('#data_naix');

    if($(data_naix).next().prop('class').includes('error')){
        $(data_naix).next().remove();
        $(data_naix).removeClass('border-red')
    }

    
    if($(data_naix).val().length == 0){
        
        $(data_naix).addClass('border-red')
        $(data_naix).after($(error).text('Es obligatori').clone() );
        
        return 0;
    }else if($(data_naix).val().trim().length != 10){

        $(data_naix).addClass('border-red')
        $(data_naix).after($(error).text('El format no es correcte').clone());
        
        return 0;
    }else{
        return 1;
    }
}

function validarPass(){
    
    let pass = $('#password');

    if($(pass).next().prop('class').includes('error')){
        $(pass).next().remove();
        $(pass).removeClass('border-red')
    }

    
    if($(pass).val().length == 0){
        
        $(pass).addClass('border-red')
        $(pass).after($(error).text('Es obligatori').clone() );
        
        return 0;
    }else if($(pass).val().trim().length < 8){

        $(pass).addClass('border-red')
        $(pass).after($(error).text('Ha de tenir minim 8 caracters').clone());
        
        return 0;
    }else if(! (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!¡?¿.,;:_\-\\]).+$/).test($(pass).val().trim())){

        $(pass).addClass('border-red')
        $(pass).after($(error).text('Ha de tenir minim 1 numero i un caracter especial').clone());
    
    }else{
        return 1;
    }
}




function validateForm(event)
{
    event.preventDefault();

    

}