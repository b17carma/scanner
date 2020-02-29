import { SET_CURRENT_EQUIPMENT } from "../constants/action-types";

export function setCurrentEquipment(payload) {
    return { type: SET_CURRENT_EQUIPMENT, payload };
}