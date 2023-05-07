import axios from 'axios'

import {
    GET_MAQUILLAJES,
    GET_MAQUILLAJES_OK,
    GET_MAQUILLAJES_FAIL

 
} from './actionTypes'


export function actionGetMaquillajes(){
    return {
        type : GET_MAQUILLAJES
    }
}


export function actionGetMaquillajesOk(maquillajes){
    return {
        type:GET_MAQUILLAJES_OK,
        payload:maquillajes
    }
}


export function actionGetMaquillajesFail(error){
    return {
        type:GET_MAQUILLAJES_FAIL,
        payload:error,
     }
}


export function getMaquillajes(){
    return async (dispatch) =>{
        dispatch(actionGetMaquillajes())
        try {
            const response = await axios.get("http://localhost:3000/maquillaje")
             dispatch(actionGetMaquillajesOk(response.data))
        } catch(error){
            dispatch(actionGetMaquillajesFail(error))
        }
    }
}