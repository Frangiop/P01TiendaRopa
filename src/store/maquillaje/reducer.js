
import {
    GET_MAQUILLAJES,
    GET_MAQUILLAJES_OK,
    GET_MAQUILLAJES_FAIL,
    } from './actionTypes'
    

    const initialState={
        maquillajes:[],
        loadingMaquillajes:false,
        error: {
             message:""
        }
    }


     
    export default function MaquillajesReducer(state = initialState,action) {
        switch(action.type){
             case GET_MAQUILLAJES:

                state = {...state, loadingMaquillajeS:true}
                 break 

             case GET_MAQUILLAJES_OK:
                state={...state,loadingMaquillajeS:false , maquillajes:action.payload}
                 break
                 
             case GET_MAQUILLAJES_FAIL:
                  state={...state,loadingMaquillajes:false, maquillajes:[], error :{message:action.payload} }
                  break  

             default: 
                  break

        }
   return state  
    }
