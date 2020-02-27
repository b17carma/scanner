import { ADD_TEST } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_TEST, payload };
}