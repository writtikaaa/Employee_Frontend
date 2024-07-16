import React, { useEffect, useState } from "react";
import "./App.css";
import { Homepage } from "./component/homepage/homepage";
import { Register } from "./component/register/register";
import Login from "./component/login/login";
import { BrowserRouter as Router,Switch,Route ,Routes} from "react-router-dom";
import {Adminhome} from "./component/adminhome/adminhome";
import { Timesheet } from "./component/timesheet/timesheet";
import { Leave } from "./component/homepage/leavedashbord/leave";
import { Working } from "./component/homepage/workingbord/working";
import { SalaryAdmin } from "./component/adminhome/salaryadmin/salaryadmin";
import { Salary } from "./component/homepage/salary/salary";
import { Project } from "./component/homepage/project/project";
import { Adminproject } from "./component/adminhome/aproject/aproject";
import { UpdateAdmin } from "./component/adminhome/aproject/update";
import { CurrentProject } from "./component/homepage/project/currentp";
import { Adminemp } from "./component/adminhome/detaailsadmin/Adminemp";
import { ADempEdit } from "./component/adminhome/detaailsadmin/adminedit";
import { Admindash } from "./component/adminhome/admindash/admindash";
import { Adminleave } from "./component/adminhome/adminleave/adminleave";
import { ADleaveEdit } from "./component/adminhome/adminleave/adminleaveedit";

export function App(){
    
const [user, setLoginUser]= useState({});
const [set, update]= useState({user});

useEffect(()=>{
    const data=window.localStorage.getItem('welcomee');
    if( data !==null)
    {
      update(JSON.parse(data));
    }
  },[])

    //constwindow.localStorage.setItem('welcome_local_stroage',JSON.stringify(user))

    return(
        <>
        <Router>
            <Switch>
            <Route exact path="/">
                        {
                            JSON.parse(localStorage.getItem('welcome_agin_login')) && JSON.parse(localStorage.getItem('welcome_agin_login')).id.length>0 ? <Homepage user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/> : <Login setLoginUser={setLoginUser}/>
                        }
                        </Route>
                <Route path="/login"><Login setLoginUser={setLoginUser}/></Route>
                <Route path="/register"><Register/></Route>
                <Route path="/admin"><Adminhome user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/timesheet"><Timesheet user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/leave"><Leave user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/working"><Working  user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/salaryadmin"><SalaryAdmin/></Route>
                <Route path="/salary"><Salary user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/project"><Project user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/projectadmin"><Adminproject/></Route>
                <Route path="/update/:procode"><UpdateAdmin/></Route>
                <Route path="/currentproject"><CurrentProject user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/empdetails"><Adminemp/></Route>
                <Route path="/admineditemp/:id"><ADempEdit user={JSON.parse(localStorage.getItem('welcome_agin_login'))}></ADempEdit></Route>
                <Route path="/dashbord"><Adminhome/></Route>
                <Route path="/adminleave"><Adminleave user={JSON.parse(localStorage.getItem('welcome_agin_login'))}/></Route>
                <Route path="/adminleaveedit/:id"><ADleaveEdit/></Route>
            </Switch>
        </Router>
        
        </>
    )
}


