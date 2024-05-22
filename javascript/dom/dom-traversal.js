/* Given a web page with a nested list, write JavaScript code to traverse the list and apply different background colors to even and odd indexed items. */
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>

const list = document.getElementById("myList").children;
for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) { // Even index
        list[i].style.backgroundColor = 'lightblue';
    } else { // Odd index
        list[i].style.backgroundColor = 'lightcoral';
    }
}
