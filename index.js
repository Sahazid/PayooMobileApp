document.getElementById('login-btn').addEventListener('click', function(e)
{
        e.preventDefault();
        
        const mobileNumber = 1756516013;
        const pin = 1234;

        const mobileNumberValue = document.getElementById('mobile-number').value;
        const pinNumberValue = document.getElementById('pin-digit').value;

        const mobileNumberConvert = parseInt(mobileNumberValue);
        const pinNumberConvert = parseInt(pinNumberValue);
        
        if(mobileNumberConvert === mobileNumber && pinNumberConvert === pin)
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

                <p class="mt-2 mb-2 text-red-700 font-normal"> Invalid Credentials!</p>
            </div>

            `
            document.getElementById('mobile-number').value='';

        }

})
