const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const tbody = document.getElementById('tbody');

// adding row
const addRow = (e) => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
            <td>
                <input id='i1' class='i1' type="number" placeholder="number 1">
            </td>
            <td>
                <input id='i2' class='i2' type="number" placeholder="number 2">
            </td>
            <td class='answer'>
                <span id="answer"></span>
            </td>
            <td></td>
                `;
    tbody.appendChild(tr);
};

//remove row
const removeRow = (e) => {
    tbody.removeChild(tbody.lastElementChild);
};

//doing add operation
const doOperation = (e) => {
    if (e.target.classList.contains('i2')) {
        console.log(e.composedPath());
        const i1Value =
            e.target.parentElement.previousElementSibling.firstElementChild
                .value;
        e.target.addEventListener('input', () => {
            const answer = parseInt(e.target.value) + parseInt(i1Value);
            const answerEl =
                e.target.parentElement.nextElementSibling.firstElementChild;
            answerEl.textContent = answer;
        });
    }
};

plusBtn.addEventListener('click', addRow);
minusBtn.addEventListener('click', removeRow);
tbody.addEventListener('click', doOperation);
