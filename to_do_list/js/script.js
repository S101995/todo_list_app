function onlyAlphabet(e) {
    let keyCode = e.which || e.keyCode;
    // alert(keyCode)
    if ((keyCode >= 97 && keyCode <= 122) || (keyCode >= 65 && keyCode <= 90) || keyCode === 32 || keyCode === 13) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function onlyNumeric(e) {
    let keyCode = e.which || e.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 13) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function addData() {
    let inputResult = true;
    let nameInput = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phone').value;

    document.getElementById('nameError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';

    if (nameInput === '') {
        document.getElementById('nameError').innerHTML = 'Please Enter a Name';
        inputResult = false;
    }

    if (phoneNumber === '') {
        document.getElementById('phoneError').innerHTML = 'Please Enter Phone Number';
        inputResult = false
    }
    else {
        if (phoneNumber.length < 10) {
            document.getElementById('phoneError').innerHTML = 'Mobile Number should be have 10 Digits';
            inputResult = false
        }

    }
    if (inputResult == false) {
        return;
    }



    let listItem = `
        <tr>
            <td>${nameInput}</td>
            <td>${phoneNumber}</td>
            <td><i class="fa fa-trash-o" style="font-size:20px;color:red;cursor: pointer;" onclick="deleteNamePhone(this)"></i></td>
        </tr>
    `;

    let listData = document.getElementById('name_phone_list');
    // listData.innerHTML=listItem;
    listData.innerHTML = listData.innerHTML + listItem;

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}
function deleteNamePhone(icon) {
    let cell = icon.parentElement;
    let row = cell.parentElement;
    if (row) {
        row.remove();
    }
}
