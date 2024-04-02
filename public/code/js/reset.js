import { detectErrors, search, showMessage } from "./helper.js";
import { dataReset, schemeReset } from "./validation.js";

search("#password").onchange = (e) => {
    dataReset.password = e.target.value;
    detectErrors("password", schemeReset, dataReset);
}

search("#confirm").onchange = (e) => {
    dataReset.confirm = e.target.value;
    detectErrors("confirm", schemeReset, dataReset);
}

search("#formReset").onsubmit = (e) => {
    e.preventDefault();
    let password = search("#password").value.trim();
    let confirm = search("#confirm").value.trim();
    if (comparePassword(password, confirm)) {
        showMessage("Reset Password Success", 500)
        setTimeout(() => location.href = "/main.html", 2000);
    }
}

function comparePassword(password, confirm) {
    let equalPassword = password === confirm;
    if (!equalPassword) {
        search("#password-error").textContent = "diferents password";
        search("#confirm-error").textContent = "diferents password";
        return false;
    }
    search("#password-error").textContent = "";
    search("#confirm-error").textContent = "";
    return true;
}