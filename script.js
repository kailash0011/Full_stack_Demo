
function showVariables() {
    let message = " VARIABLES\n\n";
    
 
    let name = "ram bahadur";
    message += "String: " + name + "\n";

    let age = 23;
    message += "Number: " + age + "\n";
    

    let isStudent = true;
    message += "Boolean: " + isStudent + "\n";

    let hobbies = ["reading", "coding"];
    message += "Array: " + hobbies + "\n";
    
   
    let person = {name: "ram bahadur", age: 25};
    message += "Object: " + JSON.stringify(person) + "\n";
    
    document.getElementById('variables-output').textContent = message;
}


function showFunctions() {
    let message = "FUNCTIONS \n\n";
    
   
    function add(a, b) {
        return a + b;
    }
    message += "add(5, 3) = " + add(5, 3) + "\n";

    const multiply = (a, b) => a * b;
    message += "multiply(4, 3) = " + multiply(4, 3) + "\n";

    function greet(name = "Guest") {
        return "Hello, " + name;
    }
    message += "greet() = " + greet() + "\n";
    message += "greet('Alice') = " + greet("Alice") + "\n";
    
    document.getElementById('functions-output').textContent = message;
}


let itemCount = 0;

function addItem() {
    itemCount++;
    const container = document.getElementById('item-list');
    
    // Remove the "No items" message if it exists
    if (container.children.length === 1 && container.children[0].tagName === 'P') {
        container.innerHTML = '';
    }
    
    // Create new item
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
        <span>Item #${itemCount}</span>
        <button onclick="this.parentElement.remove()">Remove</button>
    `;
    
    container.appendChild(item);
}

function removeItem() {
    const container = document.getElementById('item-list');
    if (container.children.length > 0) {
        container.removeChild(container.lastChild);
        itemCount--;
        
        // Show "No items" message if empty
        if (container.children.length === 0) {
            container.innerHTML = '<p>No items yet...</p>';
        }
    }
}

function clearItems() {
    const container = document.getElementById('item-list');
    container.innerHTML = '<p>No items yet...</p>';
    itemCount = 0;
}


function handleButtonClick() {
    document.getElementById('click-message').textContent = 'Button clicked at: ' + new Date().toLocaleTimeString();
}

// Input event
document.getElementById('text-input').addEventListener('input', function(e) {
    document.getElementById('text-display').textContent = e.target.value || '(empty)';
});


function showArrays() {
    let message = "ARRAY METHODS \n\n";
    
    let numbers = [1, 2, 3, 4, 5];
    message += "Original: " + numbers + "\n\n";
    
    // map
    let doubled = numbers.map(n => n * 2);
    message += "map (multiply by 2): " + doubled + "\n";
    
    // filter
    let even = numbers.filter(n => n % 2 === 0);
    message += "filter (even numbers): " + even + "\n";
    
    // reduce
    let sum = numbers.reduce((total, n) => total + n, 0);
    message += "reduce (sum): " + sum + "\n";
    
    // find
    let firstEven = numbers.find(n => n % 2 === 0);
    message += "find (first even): " + firstEven + "\n";
    
    document.getElementById('array-output').textContent = message;
}


async function getUser() {
    const output = document.getElementById('user-output');
    output.textContent = "Loading...";
    
    try {
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();
        let user = data.results[0];
        
        output.textContent = "User Info:\n";
        output.textContent += "Name: " + user.name.first + " " + user.name.last + "\n";
        output.textContent += "Email: " + user.email + "\n";
        output.textContent += "Country: " + user.location.country;
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
}