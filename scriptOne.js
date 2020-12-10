//adding row
const addRow = () => {
    
    html = `<tr>
                <td>1</td>
                <td><input type="text" placeholder="insert value 1" class="val1"></td>
                <td><input type="text" placeholder="insert value 2" class="val2"></td>
                <td id="result_value"></td>
                <td onclick="deleteRow(this)"><input type="button" value="Delete"></td>
            </tr>`;
    table.insertAdjacentHTML('beforeend', html);
};

//delete rows
const deleteRow = (row) => {
    const index = row.parentNode.rowIndex;
    table.deleteRow(index);
};

//addvalues
const addValues = (valTwoInput) => {
    const inputValueOne = parseInt(valueOne.value);
    const inputValueTwo = parseInt(valueTwo.value);
    const result = inputValueOne + inputValueTwo;
    resultValue.textContent = result;
    
};

// selectors
const table = document.querySelector('table');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const valueOne = document.querySelector('.val1');
const valueTwo = document.querySelector('.val2');
const resultValue = document.getElementById('result_value');


//event listners
plusBtn.addEventListener('click', () => {
    addRow();
});

valueTwo.addEventListener('change', () => {
    addValues();
});

