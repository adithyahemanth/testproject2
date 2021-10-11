import axios from 'axios'
import React from 'react'

import FormData from './FormData'
function FormHandler(props) {
    const formHandler = async(meetups)=>{
        console.log(meetups)
        const response = await axios.post('http://3.6.93.159:7883/machstatz/add_new_user',meetups)


        console.log(response)

    }
   
    return (
        <div>
            <FormData
            onAddUser={formHandler}/>
        </div>
    )
}

export default FormHandler
