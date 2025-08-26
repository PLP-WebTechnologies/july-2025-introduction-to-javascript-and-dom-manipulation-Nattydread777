// ==================
// Part 1: Basics
// ==================
function checkAge() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult!";
  } else {
    document.getElementById("ageResult").innerText = "❌ You are underage!";
  }
}

// ==================
// Part 2: Functions
// ==================
function calculateTotal(quantity, price) {
  let total = quantity * price;
  document.getElementById("totalResult").innerText = `Total = $${total}`;
  return total;
}

// Another reusable function
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// ==================
// Part 3: Loops
// ==================
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old values
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
  let done = document.createElement("li");
  done.innerText = " Blast off!";
  list.appendChild(done);
}

// Another loop example with array
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// ==================
// Part 4: DOM Manipulation
// ==================
document.getElementById("toggleBtn").addEventListener("click", () => {
  let message = document.getElementById("message");
  message.style.display = (message.style.display === "none") ? "block" : "none";
});

document.getElementById("addItemBtn").addEventListener("click", () => {
  let ul = document.getElementById("itemList");
  let li = document.createElement("li");
  li.innerText = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});

// Example: updating DOM with formatted name
let username = formatName("nAtHaNiEl");
console.log("Formatted Name:", username);
