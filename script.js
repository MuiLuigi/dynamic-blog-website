//For the validation of the contact information form
const form = document.getElementById('formRegistration');

const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('username');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

const successMessage = document.getElementById('successMessage');
const clearMessage = document.getElementById('clear-btn');

form.addEventListener('submit', function(event) {
    nameError.textContent = '';
    usernameError.textContent = '';
    successMessage.textContent = ''; 

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter the title of your post';
        event.preventDefault();  //Prevents form submission
        isValid = false;
    }

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Please enter the content of your post';
        event.preventDefault();  //Prevents form submission
    isValid = false;
    }

    //If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'The post has been added successfully!';
    }

    event.preventDefault(); 
});

document.getElementById('formRegistration').addEventListener('submit', function(s) {
    s.preventDefault();
    const blogTitle = document.getElementById('name').value;
    const blogContent = document.getElementById('content').value;
    const blog = JSON.parse(localStorage.getItem('blog'));
    blog.push({ id: Date.now(), blogTitle, blogContent });
    localStorage.setItem('blog', JSON.stringify(blog));
    window.location.href = 'index.html';
});