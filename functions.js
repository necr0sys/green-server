const RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const validateEmail = value => RegExp.test(value);

export const validateEmpty = value => value && true;