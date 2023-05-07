import { useParams } from "react-router-dom";
import SingleBrillosComponent from "../components/SingleBrillosComponent/SingleBrillosComponent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSingleBrillo } from "../store/brillos/action";

export default function SingleBrillosPage(){

    const params = useParams() 
    const disptach =useDispatch()


 useEffect(()=>{ 
   disptach(getSingleBrillo(params.id)) 

 },[])

    return (
     <div>
     <h1>Puedes elegir aquí y comprar tus brillos</h1>
        <SingleBrillosComponent></SingleBrillosComponent>
     </div>
    )
    
    }
    
    