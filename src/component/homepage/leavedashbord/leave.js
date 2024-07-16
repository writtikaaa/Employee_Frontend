import React, { useEffect, useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { NavLink } from "react-router-dom";
import "./leave.css";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Leave=({ user })=>{
    const history= useHistory();
    
   
    const[user1,newuser1]= useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/leave/${user.id}`)
        .then(user1=>newuser1(user1.data))
        .catch(err=>console.log(err));
    },[user.id]);


    const [oldvalue, newvalue]= useState({
        subject:"",
        date:"",
        date1:"",
        country:"",
        message:"",
        name:user.fname,
        id:user.id,
        email:user.email,
        
    });
    const change=(event)=>{
      const vall=  event.target.value;
      const name1=  event.target.name;

      newvalue((pre)=>{
        return{
            ...pre,
            [name1]:vall,
        }
      })
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if(window.localStorage.getItem("Leave")==="true")
        {
          window.localStorage.setItem("Leave",false);
          alert(" your leave is submitted wait for approval");
          axios.post("http://localhost:8000/leave",oldvalue)
          .then(res=>{
              console.log(res)
              newvalue({
                subject:"",
                date:"",
                date1:"",
                country:"",
                message:"",
                name:user.fname,
                id:user.id,
                email:user.email,
              })
          })
          .catch(err=>console.log(err));
        }else{
          alert("you have previously submitted leave application");
        }
    
    }
    return (<>
    <Navbar/>
    <div className="big_div">
    <div id="mySidenav" className="sidenav">
        <p className="logo">TEXSA <span className="menu">☰</span></p>
        <div className="button" onClick={()=> history.push("/register")}>Log out</div>
        <p className="logo1"> <span class="menu1">☰</span></p>
        
        <p className="icon-a"><i className="fa fa-dashboard icons"></i><NavLink to= "/" id="navfat">Dashbord</NavLink></p>
        <p className="icon-a"><i className="fa fa-user icons"></i><NavLink to= "/timesheet" id="navfat">Time Sheet</NavLink> </p>
        <p className="icon-a"><i className="fa fa-list icons"></i><NavLink to= "/working" id="navfat">Working Hour</NavLink></p>
        <p className="icon-a"><i className="fa fa-male icons"></i><NavLink to= "/leave" id="navfat">Leave</NavLink></p>
        <p className="icon-a"><i className="fa fa-paypal icons"></i><NavLink to= "/salary" id="navfat">Salary</NavLink></p>
        <p className="icon-a"><i className="fa fa-list-alt icons"></i><NavLink to= "/project" id="navfat">Project</NavLink></p>
        <p className="icon-a"><i className="fa fa-bell icons"></i>   Notices</p>
        
      
      
      </div>
      <h3>Apply for leave</h3>

<div className="frommade">
  <form onSubmit={onSubmit} method="POST" id="from">
    <h3>Apply for leave </h3>
    <label for="subject">Leave Subject</label>
    <input type="text" id="subject" name="subject" onChange={change} value={oldvalue.subject}/>

    
    <label for="entry-date">Leave Beginnig Date:</label><br/><br/>
    <input type="date" id="date" name="date" onChange={change} value={oldvalue.date} /><br/><br/>

    <label for="exit-date"> Leave Ending Date:</label><br/><br/>
    <input type="date" id="date" name="date1" onChange={change} value={oldvalue.date1} /><br/><br/>

    <label for="country">Country</label>
    <input type="text" id="country" name="country" onChange={change} value={oldvalue.country} />
  
   <label for="message">Reson:</label>
        <textarea id="message" name="message" rows="4" required onChange={change} value={oldvalue.message}></textarea>
    <input type="submit" value="Submit"/>
  </form>
</div>

<div className="table-from" id="tab">
<table className="table">
  <tr className="tr">
    <th className="th">Message</th>  
    <th className="th">Type</th>
    <th className="th">Date</th>
    <th className="th">Country</th>
    <th className="th">Status</th>
  </tr>

  {

    user1.map(userss =>{
        
        return(
            
        <tr className="tr">
            <td className="td">{userss.message}</td>
            <td className="td">{userss.subject}</td>
            <td className="td">{userss.date}</td>
            <td className="td">{userss.country}</td>
            <td className="td">{userss.status}</td>
        </tr>
        )
        
    })
  }
 
 
  
</table>
</div>
</div>
    </>)
}