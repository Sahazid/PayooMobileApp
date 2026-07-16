const validPin = 1234;
const transactionData = [];
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// Get Input Field Value convert to number
function getInputValueNumber(id) {
  const inputFieldValueNumber = parseInt(document.getElementById(id).value);
  return inputFieldValueNumber;
}

// Get Input Value

function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

// Notification

function toast(message) {
  const toast = document.getElementById("success-toast");
  toast.innerText = message;
  toast.className = "toast-visible";

  setTimeout(function () {
    toast.className = "toast-hidden";
  }, 3000);
}

// Access innerText
function getInnerText(id) {
  return parseInt(document.getElementById("available-balance").innerText);
}

// Set InnerText

function setInnerText(value) {
  document.getElementById("available-balance").innerText = value;
}

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// Toggle boxshadow

function handaleBoxShadow(id) {
  const boxs = document.getElementsByClassName("quick-btn-Shadow");
 
  for (const box of boxs) {
    box.style.boxShadow = "none";
  }

  document.getElementById(id).style.boxShadow =
    "0 0 12px rgba(16, 185, 129, 0.6)";
}


// Transaction btn dynamic
document.getElementById('transaction-btn').addEventListener('click', function()
{
     const transactionContainer = document.getElementById('transaction-container');

     transactionContainer.innerText = "";
      
     for(const dataa of transactionData)
     {
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="mr-5 mb-2 ">

                <div class="bg-white rounded-xl p-2
                flex justify-between items-center">
                    <div class="flex gap-4 items-center">

                        <div class="bg-[#f4f5f7] p-3 rounded-full">
                        <img class="max-w-lg mx-auto" src="./assets/wallet1.png" alt="Wallet">
                        </div>
                    <div>
                        <h1>${dataa.name}</h1>
                        <p>${dataa.date}</p>

                    </div>

                    </div>
                    <i class="rotate-90 fa-solid fa-ellipsis" style="color: rgb(30, 45, 80);"></i>
                </div>

            </div>
      
      `

       transactionContainer.appendChild(div);

     }
})


// Add Money Toggle
document
  .getElementById("added-money-btn")
  .addEventListener("click", function (e) {
    handleToggle("add-money-container");
    handaleBoxShadow("added-money-btn");
  });

// Withdraw toggle
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  handleToggle("cashout-div-container");
  handaleBoxShadow("cash-out-btn");
});

// Transfer Money toggle
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    handleToggle("send-money-container");
    handaleBoxShadow("transfer-money-btn");
  });

// Bonus Toggle
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  handleToggle("bonus-container");
  handaleBoxShadow("bonus-btn");
});

// Bill Toggle
document.getElementById("paybill-btn").addEventListener("click", function (e) {
  handleToggle("paybill-container");
  handaleBoxShadow("paybill-btn");
});

               // Transaction //

document.getElementById("transaction-btn").addEventListener("click", function(e){
  handleToggle("transaction-parent")
  handaleBoxShadow("transaction-btn")
})


// Add Money 
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = getInputValue("bank-name");
    const bankNumber = getInputValue("bank-number");
    const addAmount = getInputValueNumber("add-amount");
    const pinNumber = getInputValueNumber("pin-number");

    const availableBalance = getInnerText("available-balance");

    if (bankNumber.length !== 11) {
      alert("Provide a valid bank number");
      document.getElementById("bank-number").value = "";
      return;
    }

    if(addAmount <= 0 )
    {
      toast("Enter a valid amount")
      document.getElementById("addAmount").value="";
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid Pin");
      document.getElementById("pin-number").value = "";
      return;
    }

    document.getElementById("bank-name").value = "Pick a Bank";
    document.getElementById("bank-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("pin-number").value = "";

    const totalBalance = availableBalance + addAmount;

    setInnerText(totalBalance);

    toast("Add Money succesfull");

    const data = {
      name : "Add Money",
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);

  });



// Withdraw Money
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const agentNumber = getInputValue("agent-number-input");
    const withDrawAmount = getInputValueNumber("cashout-amount-input");

    const pinNumberIn = getInputValueNumber("pin-number-input");
    const currentBalance = getInnerText("available-balance");
    if (agentNumber.length !== 11) {
      alert("Provide a Valid Number");
      document.getElementById("agent-number-input").value = "";
      return;
    }
    if (pinNumberIn !== validPin) {
      alert("Invalid Pin");
      document.getElementById("pin-number-input").value = "";
      return;
    }
    if (
      currentBalance === 0 ||
      withDrawAmount > currentBalance ||
      isNaN(withDrawAmount)
    ) {
      toast("Insufficient Balance!");

      document.getElementById("cashout-amount-input").value = "";
      return;
    }
    if (withDrawAmount <= 0 ) {
      toast("Enter a valid vmount");

      document.getElementById("cashout-amount-input").value = "";
      return;
    }

    const afterWithDraw = parseInt(currentBalance - withDrawAmount);

    setInnerText(afterWithDraw);
    document.getElementById("agent-number-input").value = "";
    document.getElementById("cashout-amount-input").value = "";
    document.getElementById("pin-number-input").value = "";

    toast("🎉 Withdraw Successful!");

    const data = {
      name : "Cash Out",
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);
  });

document
  .getElementById("send-money-btn-submit")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const userNumber = getInputValue("user-account-number-input");
    const transferedAmount = getInputValueNumber("transfer-amount-input");

    const tsPinNumber = getInputValueNumber("transfer-pin-number-input");

    const currentBalanced = getInnerText("available-balance");

    if (userNumber.length !== 11) {
      alert("Provide a valid number!");
      document.getElementById("user-account-number-input").value = "";
      return;
    }
    if (tsPinNumber !== validPin) {
      alert("invalid pin!");
      document.getElementById("transfer-pin-number-input").value = "";
      return;
    }
    if (
      currentBalanced === 0 ||
      transferedAmount > currentBalanced ||
      isNaN(transferedAmount)
    ) {
      toast("Insufficent Balance");
      document.getElementById("transfer-amount-input").value = "";
      return;
    }
    if(transferedAmount <= 0)
    {
      toast("Enter a valid amout");
      document.getElementById("transfer-amount-input").value="";
      return;
    }

    const afterTransfer = currentBalanced - transferedAmount;

    setInnerText(afterTransfer);

    document.getElementById("user-account-number-input").value = "";
    document.getElementById("transfer-amount-input").value = "";
    document.getElementById("transfer-pin-number-input").value = "";

    toast("Send Money Successful");

    const data = {
      name : "Send Money",
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);
  });

// Bonus

document
  .getElementById("bonus-submit-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const couponCode = getInputValue("bonus-input");
    const currentBalanced = getInnerText("available-balance");

    if (couponCode !== "SAVE20") {
      toast("Invalid CouponCode");
      document.getElementById("bonus-input").value = "";
      return;
    }

    const bonusAmount = 500;
    const newBalance = currentBalanced + bonusAmount;

    document.getElementById("available-balance").innerText = newBalance;
    document.getElementById("bonus-input").value = "";

    toast("🎉 Bonus Added Successfully!");

    const data = {
      name : "Bonus",
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);

  });

document
  .getElementById("bill-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const billName = getInputValue("bill-name");
    const billerNumber = getInputValue("biller-number");
    const billAmount = getInputValueNumber("bill-amount");
    const billPin = getInputValueNumber("bill-pin-number");

    const currentBalance = getInnerText("available-balance");

    if (billName === "Pick a one" || !billName) {
      alert("Please select a bill category!");
      return;
    }

    if (billerNumber.length !== 11) {
      alert("Provide a valid 11-digit biller account number!");
      document.getElementById("biller-number").value = "";
      return;
    }

    if (billPin !== validPin) {
      alert("Invalid Pin!");
      document.getElementById("bill-pin-number").value = "";
      return;
    }

    if (
      currentBalance === 0 ||
      billAmount > currentBalance ||
      isNaN(billAmount) ||
      billAmount <= 0
    ) {
      toast("Insufficient Balance!");
      document.getElementById("bill-amount").value = "";
      return;
    }

    if(billAmount <= 0)
    {
      toast("Enter a valid amout")
      document.getElementById('bill-amount').value="";
    }

    const afterPayBill = currentBalance - billAmount;
    setInnerText(afterPayBill);

    document.getElementById("bill-name").selectedIndex = 0;
    document.getElementById("biller-number").value = "";
    document.getElementById("bill-amount").value = "";
    document.getElementById("bill-pin-number").value = "";

    const billMessage = `🎉 ${billName} Bill Paid`;

    toast(billMessage);

    const data = {
      name : "Bill Paid",
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);

  });
