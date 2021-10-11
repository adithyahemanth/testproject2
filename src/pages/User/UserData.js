import React, { useEffect,useState } from "react";
import axios from "axios";

import Card from "../../components/ui/Card";
import DeleteIcon from '@mui/icons-material/Delete';

import "./UserData.css"
import { Link } from "@mui/material";
function UserData(props) {
    const [data, setdata] = useState([])
    const[loader,setloader]=useState(false)
    const deleteHandler=async(emailid)=>{
        const response=await axios.delete("//3.6.93.159:7883/machstatz/delete_existing_user",
        {params:{ 
            email:emailid
        }}
        )
        console.log(response)  
    }
    
    useEffect(() => {
        axios.get("//3.6.93.159:7883/machstatz/get_all_users").then(data=>{
            setdata(data.data)

        }) 
         setloader(true)  
         },[])
     
    console.log(data) 

    return(   
        <div className="row">
{    data.map(data=>{
        var x = Math.floor(Math.random() * 256);
        var y = 100+ Math.floor(Math.random() * 256);
        var z = 50+ Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        var user="   "+data.username[0]+"  "

        return (
            <Card>
                    <div className="coloumn">
                    {loader && data.username!="" ?  
                    <div>

                    <div onClick={()=>deleteHandler(data.email)}> 
                         <DeleteIcon className="delete"  />
                         </div>    

                         <div className="circle" style={{backgroundColor:bgColor}}><div>{user}</div></div>
                          <div className="carddetails">   
                          <span className="display">
                          {data.username}
                          </span>
                          </div>
                               
                          
                    </div>
                  
                  
                  :<p>No username</p>}</div>
       </Card>)
    })
}</div>    )
}

export default UserData
