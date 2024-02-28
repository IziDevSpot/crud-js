
let items = [];

function renderList() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    items.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item}</td>
            <td>
                <button onclick="editItem(${index})" class="btn btn-success">Edit</button>
                <button onclick="deleteItem(${index})" class="btn btn-danger">Delete</button>
            </td>`;
        tbody.appendChild(tr);
    });
}

function addItem() {
    const input = document.getElementById('input');
    const value = input.value.trim();
    if (value !== '') {
        items.push(value);
        input.value = '';
        renderList();
    }
}

function editItem(index) {
    const newValue = prompt('Enter new value:', items[index]);
    if (newValue !== null) {
        items[index] = newValue.trim();
        renderList();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    renderList();
}

renderList();
