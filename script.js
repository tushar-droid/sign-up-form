const sbmt= document.querySelector('.submit-btn');

sbmt.addEventListener("click", (event) =>{
    const email= document.querySelector('#email').value;
    if(email.length ==0){
        window.alert('Email is required');
        event.preventDefault();
    }
    const pass = document.querySelector("#password");
    const c_pass = document.querySelector("#confirm-password");
    if(pass.value != c_pass.value){
        window.alert('passwords do not match');
        event.preventDefault();
    }
})  