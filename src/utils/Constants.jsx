const validationMessage =
    "Имя содержит недопустимый символ(допустимы только пробел и дефис)";
    const validationEmailMessage = "Введите корректный адрес электронной почты"
  const regex = /^[a-zA-Z0-9-а-яА-Я\s]+$/;
  const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export { validationMessage, validationEmailMessage, regex, regexEmail };