const buttonContainer = document.querySelector('#buttonContainer');

const magicBtn = document.querySelector('#magicBtn');


const inputContainer = document.querySelector('#inputContainer');

const friendInput = document.querySelector('#friendInput');

const clearPassBtn = document.querySelector('#clearPassBtn');

const showPassBtn = document.querySelector("#showPassBtn");

const reappearBtn = document.querySelector("#reappearBtn");

const balrogContainer = document.querySelector("#balrogContainer");


inputContainer.addEventListener(
    "keyup", function(event){
    
    if(event.key === 'Enter'){
        reappearBtn.click();    
    }
})

function show(el){
    el.classList.remove("hide");
}

function hide(el){
    el.classList.add("hide");
}

magicBtn.addEventListener(
    'click', function(){
        
    hide(buttonContainer);
    show(inputContainer);
    
})

clearPassBtn.addEventListener(
    'click', function(){
    
    friendInput.value = "";
})

showPassBtn.addEventListener(
    'click', function(){

        if(friendInput.type === "password"){
            friendInput.type='text';
            showPassBtn.innerText='Hide password';
        }else{
            friendInput.type='password';
            showPassBtn.innerText='Show password';
        }

})

reappearBtn.addEventListener(
    'click', function(){
        
        let input = friendInput.value;
        input = input.toUpperCase();

        if(input === "MELLON"){
            friendInput.value = "";
            inputContainer.classList.add("slideUp");
            balrogContainer.classList.add("slideUp");
            show(balrogContainer);
        }else{
            friendInput.value = "";
        }
    
})