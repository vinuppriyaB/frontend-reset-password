
import './App.css';
import {Registration} from "./component/Registration.js"
import { useState } from "react";
import { Switch, Route} from "react-router-dom";
import {Login } from "./component/Login";
import { ForgetPassword } from "./component/ForgetPassword";
import { ResetPassword } from "./component/ResetPassword";
import {Application} from "./component/Application.js";
import {ShowTable} from "./component/ShowTable";
import  {CreateUrl} from "./component/CreateUrl";

function App() {
  const [currentUser,setCurrentUser]= useState("");
  
    

  return (
    <div className="App">
     
      <Switch>

      <Route exact path="/">
        
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
     
       
        <Route  path="/signup">
       
        <Registration currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>

        <Route  path="/forgetpassword">
        <ForgetPassword currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>

        <Route  path="/resetpassword">
        <ResetPassword currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route  path="/application">
        <Application />
        </Route>
        <Route  path="/showtable">
        <ShowTable />
        </Route>
        <Route  path="/create">
        <CreateUrl />
        </Route>
        {/* <Route exact path="/question">
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <SolutionPage currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
        </Route>  */}

        
        
         <Route path="**">
          <NotFound />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;


function NotFound() {
  return (
    <div>
      <p className="not-found">404 ERROR</p>
      <img
        height="100%"
        width="100%"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="404 ERROR"
      />
    </div>
  );
}
