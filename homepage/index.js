function add_items() {
    let table = document.getElementsById("client_items")[0];
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    console.log("fff");S
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    c1.innerText = "Springs"
    c2.innerText = "14$"
    c3.innerText = "15$"
    c4.innerText = "47$"
    window.alert("the item has been added!");
}

function filter_items() {
    let word = document.getElementById("filter_parameter").value;
    console.log(word);
    let tables = document.getElementsByClassName("table");
    let result = "";
    for (let table of tables){
        for (let row of table.getElementsByTagName('tr')){
            if (row.innerText.toLowerCase().includes(word.toLowerCase())) {
                console.log(row.innerText.toLowerCase());
                result += (row.innerText + '\n');
            }
        }
    }
    console.log(result);
    if (!word){
        document.getElementById("filter_results").innerText = "Empty request or result!"
    }
    else {
        document.getElementById("filter_results").innerText = result;
    }
}

function blink() {
    let text_filter = document.querySelector('#filter_results');
    if (text_filter === "try the new filter!")
    {
        if (text_filter.style.visibility == 'hidden')
        {
            text_filter.style.visibility = 'visible';
        }
        else
        {
            text_filter.style.visibility = 'hidden';
        }
    }
}
window.setInterval(blink, 500);