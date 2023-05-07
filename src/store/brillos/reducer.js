
import {
    GET_BRILLOS,
    GET_BRILLOS_OK,
    GET_BRILLOS_FAIL,


    GET_SINGLE_BRILLO,
    GET_SINGLE_BRILLO_OK,
    GET_SINGLE_BRILLO_FAIL
 

    } from './actionTypes'
    

    const initialState={
        brillos:[],
        loadingBrillos:false,
        brillo:{}, // segundo paso 
        //loadingSingleLabio:false,
        //     labiolink:{}, // segundo paso 
        loadingSingleBrillo:false,
        error: {
             message:""
        }
    }


     
    export default function BrillosReducer(state = initialState,action) {
        switch(action.type){
             case GET_BRILLOS:

                state = {...state, loadingBrillos:true}
                 break 

             case GET_BRILLOS_OK:
                state={...state,loadingBrillos:false , brillos:action.payload}
                 break
                 
             case GET_BRILLOS_FAIL:
                  state={...state,loadingBrillos:false, brillos:[], error :{message:action.payload} }
                  break  



 // SINGLE LABIO 
 case GET_SINGLE_BRILLO :
     state = {...state, loadingSingleBrillo:true} 
     break      
      
  case GET_SINGLE_BRILLO_OK:
     state={...state,loadingSingleBrillo:false , brillo:action.payload}
  break 

  case GET_SINGLE_BRILLO_FAIL:
     state={...state,LoadingSingleBrillo:false, brillos:[], error :{message:action.payload} }

  break      




             default: 
                  break

        }
   return state  
    }
