
import {
    GET_CARAS,
    GET_CARAS_OK,
    GET_CARAS_FAIL,
    } from './actionTypes'
    

    const initialState={
        caras:[],
        loadingCaras:false,
        error: {
             message:""
        }
    }


     
    export default function CarasReducer(state = initialState,action) {
        switch(action.type){
             case GET_CARAS:

                state = {...state, loadingCaras:true}
                 break 

             case GET_CARAS_OK:
                state={...state,loadingCaras:false , caras:action.payload}
                 break
                 
             case GET_CARAS_FAIL:
                  state={...state,loadingCaras:false, caras:[], error :{message:action.payload} }
                  break  

             default: 
                  break

        }
   return state  
    }
