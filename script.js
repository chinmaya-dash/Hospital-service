const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const Register = document.querySelector('.register');
const Login = document.querySelector('.login');

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});



registerLink.addEventListener('click', ()=> {
    Register.classList.remove('hide');
    Login.classList.add('hide');
});

loginLink.addEventListener('click', ()=> {
    Login.classList.remove('hide');
    Register.classList.add('hide');
});