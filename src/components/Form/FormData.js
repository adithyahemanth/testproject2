import { Card } from '@mui/material';
import React,{useRef} from 'react';


import "./FormData.css"

function FormData(props) {
    const f_nameInputRef = useRef();
    const l_nameInputRef = useRef();
    const pwdInputRef = useRef();
    const usernameInputRef = useRef();
    const emailInputRef=useRef();

    function submitHandler(event) {
      event.preventDefault();
      const enteredemail=emailInputRef.current.value;  
      const enteredf_name = f_nameInputRef.current.value;
      const enteredl_name = l_nameInputRef.current.value;
      const enteredpwd = pwdInputRef.current.value;
      const enteredUsername = usernameInputRef.current.value;
  
      const meetupData = {
        email: enteredemail,
        fist_name: enteredf_name,
        last_name: enteredl_name,
        pwd: enteredpwd,
        username: enteredUsername,
      };
  
      props.onAddUser(meetupData);
    }
  
    return (
      <div>
      <Card style={{height:"30px",paddingLeft:"20px",paddingTop:"10px",margin:"10px"}}>Add User</Card>
      <div className="formdata">
      <Card>
        <div>
        <form className="form" onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor='f_name'>firstName</label>
            <br/>
            <input type='text' required id='f_name' ref={f_nameInputRef}/>
          </div>
          <div className="control">
            <label htmlFor='l_name'>LastName</label>
            <br/>
            <input type='text' required id='l_name' ref={l_nameInputRef} />
          </div>
          <div>
          <label htmlFor='email'>E-mail</label>
          <br/>  
          <input type='email' required id='email' ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor='Username'>Username</label>
            <br/>
            <input type='text' required id='username'  ref={usernameInputRef}/>
          </div>
          <div className="control">
            <label htmlFor='pwd'>Password</label>
            <br/>
            <input type='password' required id='pwd' ref={pwdInputRef} />
          </div>
          <div className="actions">
            <button>Add User</button>
          </div>
        </form>
      </div>       
      </Card> 
      </div>
      </div>
    );
}

export default FormData
