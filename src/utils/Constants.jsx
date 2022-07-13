const validationMessage =
  "Имя содержит недопустимый символ(допустимы только пробел и дефис)";
const validationEmailMessage = "Введите корректный адрес электронной почты";
const regex = /^[a-zA-Z0-9-а-яА-Я\s]+$/;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlserver = "https://api.nomoreparties.co/";
const SHORT_FILM = 40;
const LIMIT_BIG_PAGE = 12;
const LIMIT_MIDDLE_PAGE = 8;
const LIMIT_SMALL_PAGE = 5;
const UPPER_BRREACKPOINT = 960;
const LOWER_BRREACKPOINT = 490;
const LOAD_MORE_NUMBER_BIG_PAGE = 3;
const LOAD_MORE_NUMBER_SMALL_PAGE = 2;

export {
  validationMessage,
  validationEmailMessage,
  regex,
  regexEmail,
  urlserver,
  SHORT_FILM,
  LIMIT_BIG_PAGE,
  LIMIT_MIDDLE_PAGE,
  LIMIT_SMALL_PAGE,
  UPPER_BRREACKPOINT,
  LOWER_BRREACKPOINT,
  LOAD_MORE_NUMBER_BIG_PAGE,
  LOAD_MORE_NUMBER_SMALL_PAGE,
};
