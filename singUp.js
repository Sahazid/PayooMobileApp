document.getElementById('sing-up-page-btn').addEventListener('click', function (e){

    e.preventDefault();

    const mobileNumber = parseInt(document.getElementById('sing-up-mobile-number').value);

    const singUpPinNumber = parseInt(document.getElementById('sing-up-pin-digit').value);

    const singUpConfirmPinNumber = parseInt(document.getElementById('confirm-pin-digit').value);

    // console.log(`name : ${name} pin : ${singUpPinNumber} confirm Pin : ${singUpConfirmPinNumber}`)



   
        const newUser = {
                mobile: mobileNumber,
                pin: singUpPinNumber
        }

        pushUserDetails(newUser)

         



})

const naviGate = () => 
{
    document.getElementById('spinner').classList.remove('hidden')
        setTimeout(() => {
            window.location.href="./home.html"
        }, 2000);
}

const pushUserDetails = (details) =>
{
     const userDetails = JSON.parse(localStorage.getItem("users")) || [];

      const exists = userDetails.some(user => user.mobile === details.mobile);
        //some find at least a matching one 

    if (exists) {
        
        const confirmPinDiv = document.getElementById('confirm-pin-div-2');
        const divPin = document.createElement('div');
        divPin.innerHTML = `<p id="not-match-number" class="text-red-600 font-bold mt-2"> Mobile number is already registered </p>`
        confirmPinDiv.appendChild(divPin);
        document.getElementById('sing-up-mobile-number').value = "";
        return false;

    }

    const mobileNumber = parseInt(document.getElementById('sing-up-mobile-number').value);

    const singUpPinNumber = parseInt(document.getElementById('sing-up-pin-digit').value);

    const singUpConfirmPinNumber = parseInt(document.getElementById('confirm-pin-digit').value);


    if(singUpPinNumber !== singUpConfirmPinNumber && mobileNumber <=11)
    {
        const confirmPinDiv = document.getElementById('confirm-pin-div-2');
        const divPin = document.createElement('div');
        divPin.innerHTML = `<p id="not-match" class="text-red-600 font-bold mt-2"> Pin Not Matched </p>`
        confirmPinDiv.appendChild(divPin);
        document.getElementById('confirm-pin-digit').value = "";
        return false;
    }
  
    const confirmPinDiv = document.getElementById('confirm-pin-div-2');
        const divPin = document.createElement('div');
        divPin.innerHTML = `<p id="Successfull" class="text-green-600 font-bold mt-2"> Sing Up Successfull </p>`
        confirmPinDiv.appendChild(divPin);


    naviGate();

    userDetails.push(details);

    localStorage.setItem("users", JSON.stringify(userDetails));


    
}

document.getElementById('sing-up-login-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href="./index.html";
})

 document.getElementById('confirm-pin-digit').addEventListener('focus', function (){
        const ele = document.getElementById('not-match');
        ele.remove();
    })

document.getElementById('sing-up-mobile-number').addEventListener('focus', function ()
{
    
    const ele = document.getElementById('not-match-number');
        ele.remove();

})