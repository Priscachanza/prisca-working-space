function bookNow() {
  let firstName = prompt("what is your name?");
  let location = prompt("do you wish home or office service?");

  if (location === "home") {
    alert("Hi, " + firstName + " our team will get back to You!😊");
  } else {
    alert(
      "Hi, " +
        firstName +
        " click the link above👆🏼 for location to our offices!😊"
    );
  }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", bookNow);
