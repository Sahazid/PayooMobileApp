// document.getElementById('sing-up-btn').addEventListener('click', () =>{
//         // window.location.href="./singup.html";
        
// })

document.getElementById('sing-up-btn').addEventListener('click', function (e)
{
        e.preventDefault();
        window.location.href="./singup.html";

})






document.getElementById('login-btn').addEventListener('click', function(e)
{
        e.preventDefault();
        
        
        const mobileNumberValue = document.getElementById('mobile-number').value;
        const pinNumberValue = document.getElementById('pin-digit').value;

        const mobileNumberConvert = parseInt(mobileNumberValue);
        const pinNumberConvert = parseInt(pinNumberValue);

         const users = JSON.parse(localStorage.getItem("users")) || [];
         
         const loggedInUser = users.find(user =>
            user.mobile == mobileNumberConvert &&
            user.pin == pinNumberConvert
         )

         if(loggedInUser)
         {
            window.location.href="./home.html";  
         }
         else
            {
            document.getElementById('pin-div').innerHTML=
            `
            <div class="mt-5" id="pin-div">
                <label class="font-semibold" for="">4 Digit Number</label>
                <br>
                <input type="text" class="input bg-[#f4f5f7] mt-3 rounded-3xl outline-none" placeholder="Enter 4 Digit Pin" id="pin-digit"/>

                <p id="login-alert" class="mt-2 mb-2 text-red-700 font-normal"> Invalid Credentials!</p>
            </div>

            `
            document.getElementById('mobile-number').value='';

          }
        
        

})


document.getElementById('mobile-number').addEventListener('focus', function ()
{
   removeElement();
})

document.getElementById('pin-digit').addEventListener('focus', function ()
{
   removeElement();
})

const removeElement = () =>
{
    const elemet = document.getElementById('login-alert');
     elemet.remove();
}