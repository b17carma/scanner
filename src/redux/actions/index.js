import { ADD_TEST } from "../constants/action-types";

export function addTest(payload) {
    return { type: ADD_TEST, payload };
}