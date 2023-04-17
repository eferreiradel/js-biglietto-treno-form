function infoForm__value() {
  let userName = document.getElementById("infoForm__name").value;
  let userKm = document.getElementById("infoForm__km").value;
  let userAge = document.getElementById("infoForm__age").value;
  const basePrice = 0.24 * userKm;
  let juniorDiscount = (basePrice * 20) / 100;
  let seniorDiscount = (basePrice * 40) / 100;

  document.getElementById("ticket__name").innerHTML = userName;

  if (isNaN(userKm)) {
    alert("errore");
  }

  if (userAge <= 12) {
    document.getElementById("ticket__price").innerHTML = `${
      basePrice - juniorDiscount.toFixed(2)
    }$`;
    document.getElementById("ticket__discount").innerHTML = "Junior";
  } else if (userAge >= 65) {
    document.getElementById("ticket__price").innerHTML = `${
      basePrice - seniorDiscount.toFixed(2)
    }$`;
  } else {
    document.getElementById("ticket__price").innerHTML = `${basePrice.toFixed(
      2
    )} $`;
  }
}
