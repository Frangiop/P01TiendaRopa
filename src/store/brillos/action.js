import axios from 'axios'

import {
    GET_BRILLOS,
    GET_BRILLOS_OK,
    GET_BRILLOS_FAIL,


    GET_SINGLE_BRILLO,
    GET_SINGLE_BRILLO_OK,
    GET_SINGLE_BRILLO_FAIL
 

 
} from './actionTypes'


export function actionGetBrillos(){
    return {
        type : GET_BRILLOS
    }
}


export function actionGetBrillosOk(brillos){
    return {
        type:GET_BRILLOS_OK,
        payload:brillos
    }
}


export function actionGetBrillosFail(error){
    return {
        type:GET_BRILLOS_FAIL,
        payload:error,
     }
}


export function getBrillos(){
    return async (dispatch) =>{
        dispatch(actionGetBrillos())
        try {
            const response = await axios.get("http://localhost:3000/brillos")
             dispatch(actionGetBrillosOk(response.data))
        } catch(error){
            dispatch(actionGetBrillosFail(error))
        }
    }
}


// BRILLOS UNICOS :

export function actionGetSingleBrillo(brilloId){
    return {
        type: GET_SINGLE_BRILLO,
        payload:brilloId
    }
}


export function actionGetSingleBrilloOk(brillo){
    return{
        type: GET_SINGLE_BRILLO_OK,
         payload:brillo
    }
}

export function actionGetSingleBrilloFail(error){
    return {
       type: GET_SINGLE_BRILLO_FAIL,
       payload:error,
    }
}



export function getSingleBrillo(brilloId){
    return async (dispatch) =>{
        dispatch(actionGetSingleBrillo(brilloId))
        try {
            const response = await axios.get(`http://localhost:3000/brillos/${brilloId}`)
             dispatch(actionGetSingleBrilloOk(response.data))
        } catch(error){
            dispatch(actionGetSingleBrilloFail(error))
        }
    }
}

