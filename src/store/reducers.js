import { combineReducers } from "redux";
import CarasReducer from "./caras/reducer";
import OjosReducer from "./ojos/reducer";
import MaquillajesReducer from "./maquillaje/reducer";
import LabiosReducer from "./labios/reducer";
import BrillosReducer from "./brillos/reducer";

const rootReducer = combineReducers({
    CarasReducer,
    OjosReducer,
    MaquillajesReducer,
    LabiosReducer,
    BrillosReducer,
    
})

export default rootReducer
