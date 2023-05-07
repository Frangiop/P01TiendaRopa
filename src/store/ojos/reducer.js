
import {
    GET_OJOS,
    GET_OJOS_OK,
    GET_OJOS_FAIL,
    } from './actionTypes'
    

    const initialState={
        ojos:[],
        loadingOjos:false,
        error: {
             message:""
        }
    }


     
    export default function OjosReducer(state = initialState,action) {
        switch(action.type){
             case GET_OJOS:

                state = {...state, loadingOjos:true}
                 break 

             case GET_OJOS_OK:
                state={...state,loadingOjos:false , ojos:action.payload}
                 break
                 
             case GET_OJOS_FAIL:
                  state={...state,loadingOjos:false, ojos:[], error :{message:action.payload} }
                  break  

             default: 
                  break

        }
   return state  
    }
