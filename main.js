function add() {
    const input = document.getElementById('userInput').value;
    const itemList = document.getElementById('itemList');

    if (input === "") {
        alert("Enter any data");
    }
    else {
        // Add item to localStorage
        localStorage.setItem(input , input);
        alert("Data added");
        
        // Create list item
        let li = document.createElement("li");
        li.id = "li";
        li.textContent = input ;
        itemList.appendChild(li);

        // delete button
        let btn = document.createElement("button")
        btn.innerHTML = "delete"
        li.appendChild(btn)
        btn.addEventListener("click", remove)
        function remove() {
            itemList.removeChild(li)
        };
    }
    
}


