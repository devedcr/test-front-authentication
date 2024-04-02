import { detectErrors, search, showMessage } from './helper.js';
import { dataLogin, schemeLogin } from './validation.js';

function simulateRequestApi(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "ed@ed.com" && password === "12345678") {
                resolve({ ok: true });
            }
            reject("Datos Invalidos !!!");
        }, 1000)
    });
}

search("#email").onchange = (e) => {
    dataLogin.email = e.target.value;
    detectErrors("email", schemeLogin, dataLogin);
}

search("#password").onchange = async (e) => {
    dataLogin.password = e.target.value;
    detectErrors("password", schemeLogin, dataLogin);
}

search("#formLogin").onsubmit = async (e) => {
    e.preventDefault();
    let inputEmail = search("#email").value.trim();
    let inputPassword = search("#password").value.trim();
    try {
        await simulateRequestApi(inputEmail, inputPassword);
        location.href="/main.html";
    } catch (error) {
        showMessage(error, 1500)
    }
}