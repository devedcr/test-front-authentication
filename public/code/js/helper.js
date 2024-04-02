import vine from 'https://cdn.jsdelivr.net/npm/@vinejs/vine@2.0.0/+esm'
import Toastify from 'https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/+esm'

export function search(element) {
    return document.querySelector(element);
}

export async function detectErrors(field, scheme, data) {
    try {
        const validator = vine.compile(scheme)
        await validator.validate(data)
        search(`#${field}-error`).textContent = "";
    } catch (error) {
        let errorField = error.messages.find((err) => err.field == field);
        if (!errorField) {
            search(`#${field}-error`).textContent = "";
            return;
        }
        search(`#${field}-error`).textContent = errorField.message;
    }
}

export function showMessage(text, duration) {
    Toastify({
        text,
        duration,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        style: { background: "linear-gradient(to right, #fb9f31, #ef3d28)" },
    }).showToast();
}