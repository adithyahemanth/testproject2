import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"

import FormHandler from './components/Form/FormHandler'
import UserData from "./pages/User/UserData"

function App() {
    return (
        <div>
            <Router>
              <Route exact path="/testproject2">  
                  <UserData/>
                  <FormHandler/>
            </Route>
            </Router>
        </div>
    )
}

export default App
