
import {
    GET_LABIOS,
    GET_LABIOS_OK,
    GET_LABIOS_FAIL,

    GET_SINGLE_LABIO,
    GET_SINGLE_LABIO_OK,
    GET_SINGLE_LABIO_FAIL
 

    } from './actionTypes'
    

    const initialState={
        labios:[],
        loadingLabios:false,
        labio:{}, // segundo paso 
        //loadingSingleLabio:false,
        //     labiolink:{}, // segundo paso 
        loadingSingleLabioLink:false,

        error: {
             message:""
        }
    }


     
    export default function LabiosReducer(state = initialState,action) {
        switch(action.type){
             case GET_LABIOS:

                state = {...state, loadingLabios:true}
                 break 

             case GET_LABIOS_OK:
                state={...state,loadingLabios:false , labios:action.payload}
                 break
                 
             case GET_LABIOS_FAIL:
                  state={...state,loadingLabios:false, labios:[], error :{message:action.payload} }
                  break  

 // SINGLE LABIO 
 case GET_SINGLE_LABIO :
     state = {...state, loadingSingleLabio:true} 
     break      
      
  case GET_SINGLE_LABIO_OK:
     state={...state,loadingSingleLabio:false , labio:action.payload}
  break 

  case GET_SINGLE_LABIO_FAIL:
     state={...state,LoadingSingleLabio:false, labios:[], error :{message:action.payload} }

  break      


             default: 
                  break

        }
   return state  
    }
