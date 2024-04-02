import { detectErrors, search } from "./helper.js";
import { dataRegister, schemeRegister } from "./validation.js";

search("#username").onchange = (e) => {
    dataRegister.username = e.target.value;
    detectErrors("username", schemeRegister, dataRegister);
}

search("#email").onchange = (e) => {
    dataRegister.email = e.target.value;
    detectErrors("email", schemeRegister, dataRegister);
}

search("#password").onchange = (e) => {
    dataRegister.password = e.target.value;
    detectErrors("password", schemeRegister, dataRegister);
}

search("#formRegister").onsubmit = (e) => {
    e.preventDefault();
    setTimeout(() => location.href = "/main.html", 1000);
}