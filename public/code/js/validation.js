import vine from 'https://cdn.jsdelivr.net/npm/@vinejs/vine@2.0.0/+esm'

/**
 * Scheme Validation Log in
 */
export const schemeLogin = vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8)
});

export const dataLogin = {
    email: "",
    password: ""
};


/**
 * Scheme Validation Register
 */
export const schemeRegister = vine.object({
    username: vine.string().minLength(3),
    email: vine.string().email(),
    password: vine.string().minLength(8)
});

export const dataRegister = {
    username: "",
    email: "",
    password: ""
};

/**
 * Scheme Validation Forgot
 */
export const schemeForgot = vine.object({
    email: vine.string().email(),
});

export const dataForgot = {
    email: "",
};


/**
 * Scheme Validation Reset
 */
export const schemeReset = vine.object({
    password: vine.string().minLength(8),
    confirm: vine.string().minLength(8)
});

export const dataReset = {
    password: "",
    confirm: ""
};