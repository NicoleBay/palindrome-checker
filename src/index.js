const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// Function to check if the input is a palindrome and update the result display
const checkForPalindrome = (input) => {
  // Alert if the input is empty
  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Remove the previous result
  resultDiv.innerHTML = "";

  // Process the input for palindrome check
  const originalInput = input;
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join("");
  const resultMsg = `<strong>${originalInput}</strong> ${
    isPalindrome ? "is" : "is not"
  } a palindrome.`;

  // Create and append the result paragraph
  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result
  resultDiv.classList.remove("hidden");
};

// Event listener for the button click
checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = ""; // Clear the input field
});

// Event listener for the Enter key press in the input field
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = ""; // Clear the input field
  }
});
