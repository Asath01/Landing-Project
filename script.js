const signupBtn = document.getElementById("btn");
const textBox = document.getElementById("name");

function fill() {
  if (textBox.value === "") {
    alert("Please fill all the boxes");
  } else {
    alert("sign up success");
  }
}

signupBtn.addEventListener("click", fill);
