const items = {
  item_1: 100,
  item_2: 150,
  item_3: 250,
  item_4: 400
};
const display_items = document.querySelectorAll(".add-to-cart");

function getClickedItem(event) {
  const clicked_id = event.target.id;
  const current_value = document.getElementById("cart-number");
  current_value.innerHTML = (
    Number.parseFloat(current_value.innerHTML) +
    Number.parseFloat(items[clicked_id])
  ).toFixed();
}

display_items.forEach((item) => {
  item.onclick = getClickedItem;
});

// ===========Wallet

function updateWallet() {
 // document.getElementById("wallet-value").style.display = "none";
 // document.getElementById("wallet-input-open").style.display = "none";
  document.getElementById("wallet-input-i").style.display = "block";
  document.getElementById("wallet-add").style.display = "block";
}

function addToWallet() {
 const wallet_input_value = document.getElementById("wallet-input").value;
  const wallet_value_element = document.getElementById("wallet-value");
  const current_wallet_value = wallet_value_element.innerHTML;
  const actual_wallet_value = Number.parseFloat(current_wallet_value.split(" ")[0]);

  if (wallet_input_value === "" || wallet_input_value === 0) {
    alert("You can't add empty value to your wallet, please try again!");
    return;
  }

  //   Hide input + Add and Display wallet values
  wallet_value_element.style.display = "block";
  document.getElementById("wallet-input-open").style.display = "block";
 //document.getElementById("wallet-input-i").style.display = "none";
  //document.getElementById("wallet-add").style.display = "none";
  document.getElementById("wallet-input").value = "";
  wallet_value_element.innerHTML =
    (actual_wallet_value + Number.parseFloat(wallet_input_value)).toFixed() + " naira";
}

function payCartValue() {
  const cart_number_element = document.getElementById("cart-number");
  const cart_value = Number.parseFloat(cart_number_element.innerHTML);
  if (cart_value === 0) {
    alert("You need to add items to your cart to pay");
    return;
  }

  const wallet_value_element = document.getElementById("wallet-value");
  const wallet_value = wallet_value_element.innerHTML;
  const wallet_actual_value = Number.parseFloat(wallet_value.split(" ")[0]);

  if (cart_value > wallet_actual_value) {
    alert(
      "You have selected too much items, to continue payment, kindly increase your wallet balance!"
    );
    cart_number_element.innerHTML = 0;
    return;
  }
  
  const return_value = confirm('Are you sure want to continue?');
  
  if (return_value) {
    return;
  } else{
    window.alert('thanks for your patronizing, Dragon store. kindly check wallet for your balance.')
  }

  const new_wallet_value = wallet_actual_value - cart_value;

  cart_number_element.innerHTML = 0;
  wallet_value_element.innerHTML = new_wallet_value + "";
  
}
