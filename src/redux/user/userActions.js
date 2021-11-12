import { SET_FORM_DATA } from "./userTypes"

export const setFormData = (formData)=>{
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}