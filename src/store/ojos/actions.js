import axios from 'axios'

import {
    GET_OJOS,
    GET_OJOS_OK,
    GET_OJOS_FAIL

 
} from './actionTypes'


export function actionGetOjos(){
    return {
        type : GET_OJOS
    }
}


export function actionGetOjosOk(ojos){
    return {
        type:GET_OJOS_OK,
        payload:ojos
    }
}


export function actionGetOjosFail(error){
    return {
        type:GET_OJOS_FAIL,
        payload:error,
     }
}


export function getOjos(){
    return async (dispatch) =>{
        dispatch(actionGetOjos())
        try {
            const response = await axios.get("http://localhost:3000/ojos")
             dispatch(actionGetOjosOk(response.data))
        } catch(error){
            dispatch(actionGetOjosFail(error))
        }
    }
}