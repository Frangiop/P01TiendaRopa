import axios from 'axios'

import {
    GET_CARAS,
    GET_CARAS_OK,
    GET_CARAS_FAIL

 
} from './actionTypes'


export function actionGetCaras(){
    return {
        type : GET_CARAS
    }
}


export function actionGetCarasOk(caras){
    return {
        type:GET_CARAS_OK,
        payload:caras
    }
}


export function actionGetCarasFail(error){
    return {
        type:GET_CARAS_FAIL,
        payload:error,
     }
}


export function getCaras(){
    return async (dispatch) =>{
        dispatch(actionGetCaras())
        try {
            const response = await axios.get("http://localhost:3000/caras")
             dispatch(actionGetCarasOk(response.data))
        } catch(error){
            dispatch(actionGetCarasFail(error))
        }
    }
}