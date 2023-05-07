import axios from 'axios'

import {
    GET_LABIOS,
    GET_LABIOS_OK,
    GET_LABIOS_FAIL,
    
    GET_SINGLE_LABIO,
    GET_SINGLE_LABIO_OK,
    GET_SINGLE_LABIO_FAIL
 

 
} from './actionTypes'


export function actionGetLabios(){
    return {
        type : GET_LABIOS
    }
}


export function actionGetLabiosOk(labios){
    return {
        type:GET_LABIOS_OK,
        payload:labios
    }
}


export function actionGetLabiosFail(error){
    return {
        type:GET_LABIOS_FAIL,
        payload:error,
     }
}


export function getLabios(){
    return async (dispatch) =>{
        dispatch(actionGetLabios())
        try {
            const response = await axios.get("http://localhost:3000/labios")
             dispatch(actionGetLabiosOk(response.data))
        } catch(error){
            dispatch(actionGetLabiosFail(error))
        }
    }
}


// MUNDO UNICOS :

export function actionGetSingleLabio(labioId){
    return {
        type: GET_SINGLE_LABIO,
        payload:labioId
    }
}


export function actionGetSingleLabioOk(labio){
    return{
        type: GET_SINGLE_LABIO_OK,
         payload:labio
    }
}

export function actionGetSingleLabioFail(error){
    return {
       type: GET_SINGLE_LABIO_FAIL,
       payload:error,
    }
}



export function getSingleLabio(labioId){
    return async (dispatch) =>{
        dispatch(actionGetSingleLabio(labioId))
        try {
            const response = await axios.get(`http://localhost:3000/labios/${labioId}`)
             dispatch(actionGetSingleLabioOk(response.data))
        } catch(error){
            dispatch(actionGetSingleLabioFail(error))
        }
    }
}

