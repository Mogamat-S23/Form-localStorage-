let lists = JSON.parse( localStorage.getItem('color')) ?
JSON.parse( localStorage.getItem('color')) : [
    {
        name: 'Mike',
        color: 'rgb (255,255,0)'
        
        
    }
];
function addData() {
    // e.preventDefault();
    lists.push(
        {
            name: document.getElementById('name').value,
            
            color: rgb.value
        }
    );
    // Save data to a localstorage
    localStorage.setItem('color',JSON.stringify(lists));
}
document.querySelector('#addColour').addEventListener('click',() => {
    const rgb = document.getElementById('rgb').value
    let color = document.getElementById('body')
    color.style = `background-color: ${rgb}`
})
document.querySelector('#addColour').addEventListener('click', addData);
// Displaying data
(function loadData() {
    console.table(lists);
})();