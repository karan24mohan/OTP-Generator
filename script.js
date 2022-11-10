function generateOTP(limit) {
  let numbers = "123456789";
  let OTP = "";
  let display = document.querySelector("span");
  for (let i = 0; i < limit; i++) {
    OTP += numbers[Math.floor(Math.random() * 10)];
    display.innerHTML = "";
  }
  display.innerHTML = OTP;
  console.log(OTP);
  console.log(display.innerHTML);
}
