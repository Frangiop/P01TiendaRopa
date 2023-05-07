import { useParams } from "react-router-dom";
import SingleLabiosComponent from "../components/SingleLabiosComponent/SingleLabiosComponent";
import { useDispatch } from "react-redux";
import { getSingleLabio } from "../store/labios/actions";
import { useEffect } from "react";

export default function SingleLabiosPage(){


    const params = useParams() 
    const disptach =useDispatch()


 useEffect(()=>{ 
   disptach(getSingleLabio(params.id)) 

 },[])




    return (
     <div>
<SingleLabiosComponent></SingleLabiosComponent>
{/* single post page {params.id} */ }
 
     </div>
    )
    
    }
    

    