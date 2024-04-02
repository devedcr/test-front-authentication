import { api } from "../const/api.js";
import { detectErrors, search, showMessage } from "./helper.js";
import { dataForgot, schemeForgot } from "./validation.js";

search("#email").onchange = (e) => {
    dataForgot.email = e.target.value;
    detectErrors("email", schemeForgot, dataForgot);
}

search("#formForgot").onsubmit = (e) => {
    e.preventDefault();
    let email = search("#email").value.trim();
    sendMail(email);
}

async function sendMail(toAddress) {
    let body = JSON.stringify({ toAddress });
    try {
        let response = await fetch(`${api.url}/mail`, { method: "post", body }).then((res) => res.json());
        if (!response.ok)
            throw new Error(response.message);
        showMessage("Send Mail Succcess", 1000);
        setTimeout(() => location.href = "/check.html", 2000)
    } catch (error) {
        console.log(error);
        showMessage("Send Mail failed", 1000);
    }
}