import {
 URL_BACK_EXCUSE_ALL,
 URL_BACK_EXCUSE_NEW,
 URL_BACK_EXCUSE_ONE,
 URL_BACK_EXCUSE_RANDOM
} from "../constants/urlBackEnd.js";

import apiBackEnd from "./api.Backend.js";

export function getExcuseRamdon() {
 return apiBackEnd.get(URL_BACK_EXCUSE_RANDOM);
}

export function getAllExcuses() {
 return apiBackEnd.get(URL_BACK_EXCUSE_ALL);
}

export function postExcuse(values) {
 return apiBackEnd.post(URL_BACK_EXCUSE_NEW, values);
}