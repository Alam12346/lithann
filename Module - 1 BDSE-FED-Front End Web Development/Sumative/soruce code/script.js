const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
        location.href="Thankyou.html"
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}
const signUp2 = e => {
    let fname = document.getElementById('fname2').value,
        lname = document.getElementById('lname2').value,
        email = document.getElementById('email2').value,
        pwd = document.getElementById('pwd2').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname2').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
        location.href="admin.html"
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}

    
////
$(document).ready(function(){


    let data =  JSON.parse(localStorage.getItem("formData")) || [];


    function buildTable(data){  
        for(let i = 0; i < data.length; i++){
            let row = `
                <tr>
                    <td>${i+1}</td>
                    <td>${data[i].fname}</td>
                    <td>${data[i].lname}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].pwd}</td>
                    <td>
                        <a class=\'edit\' href=\'${i}\'>Edit</a> 
                        |
                        <a class=\'delete\' href=\'${i}\'>delete</a>
                    </td>
                </tr>
            `;

            $('#FormData').append(row);
        }


    }
    buildTable(data);

////    
$('.edit').click(function(e){
    e.preventDefault();
    let index = $(this).attr('href');
    let data = getCrudData();
    document.getElementById('fname').value = data[index].fname;
    document.getElementById('lname').value = data[index].lname;
    document.getElementById('email').value = data[index].email;
    document.getElementById('pwd').value = data[index].pwd;
    
    $('#editt').submit(function(e){
        
        data[index].fname = $('#fname').val();
        data[index].lname = $('#lname').val();
        data[index].email = $('#email').val();
        data[index].pwd = $('#pwd').val();
    
        localStorage.setItem('formData',JSON.stringify(data));
        e.preventDefault();
        location.reload();
    })

})
function getCrudData() {
                let data = JSON.parse(localStorage.getItem("formData"));
                return data;
            }



    /////
    $('.delete').click(function(e){
        let conf = confirm("Are you sure want to delete this data?");
        let index = $(this).attr('href');
    
        if(conf === true) {
            data.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(data));
            $(this).removeAttr("href");
            e.preventDefault();
            location.reload();
    
        } else {
            e.preventDefault();
        }
    });
});
