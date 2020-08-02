let name = document.getElementById('txtName');
let lName = document.getElementById('txtlName');
let mail = document.getElementById('txtMail');
let pass = document.getElementById('txtPass');
let btn = document.getElementById('form-btn');
let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');
let para4 = document.getElementById('para4');

btn.addEventListener('click', () => {

    /* Styles for input name */
    if(name.value.length == 0)
    {
        name.classList.add('warning')
        para1.classList.remove('hidden')
        name.style.color = 'white';
    }
    else
    {
        name.classList.remove('warning')
        para1.classList.add('hidden')
    }
    
    /* Styles for input Last name */
    if(lName.value.length == 0)
    {
        lName.classList.add('warning')
        para2.classList.remove('hidden')
        lName.style.color = 'white';
    }
    else
    {
        lName.classList.remove('warning')
        para2.classList.add('hidden')
    }
    
    
    /* Styles for email input */
    if(mail.value.length == 0)
    {
        mail.classList.add('warning')
        para3.classList.remove('hidden')
        mail.setAttribute('placeholder', 'email@example.com');
        mail.style.borderColor = 'red';
    }
    else
    {
        mail.classList.remove('warning')
        para3.classList.add('hidden')
        mail.setAttribute('placeholder', 'Email Address');
    }
    
    /* Styles for input Last name */
    if(pass.value.length == 0)
    {
        pass.classList.add('warning')
        para4.classList.remove('hidden')
        pass.style.color = 'white';
    }
    else
    {
        pass.classList.remove('warning')
        para4.classList.add('hidden')
        pass.setAttribute('placeholder', '0');
    }
});

/* Styles for input name when you select it and into text */
name.addEventListener('click', () => {
    name.style.color = 'black';
});

name.addEventListener('keyup', () => {
    name.classList.remove('warning')
    para1.classList.add('hidden')
});

/* Styles for input last name when you select it and into text */
lName.addEventListener('click', () => {
    lName.style.color = 'black';
});

lName.addEventListener('keyup', () => {
    lName.classList.remove('warning')
    para2.classList.add('hidden')
});

/* Styles for email when you select it and into text */
mail.addEventListener('keyup', () => {
    mail.style.color = 'black';
    mail.style.borderColor = 'lightgrey';
});

mail.addEventListener('keyup', () => {
    mail.classList.remove('warning')
    para3.classList.add('hidden')
    mail.style.borderColor = 'lightgrey';
    mail.style.color = 'black';
});

/* Styles for input password when you select it and into text */
pass.addEventListener('click', () => {
    pass.style.color = 'black';
});

pass.addEventListener('keyup', () => {
    pass.classList.remove('warning')
    para4.classList.add('hidden')
    pass.style.color = 'black';
});
