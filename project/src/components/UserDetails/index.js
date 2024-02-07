import React, { Component } from "react";
import Items from "../Items";

class UserDetails extends Component{

    state={
        data:[]
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails=async()=>{
        const url="http://localhost:8001/user/"
        const options={
            method:'GET'
        }
        const response=await fetch(url,options);
        const data=await response.json()
        
        this.setState({
            data,
        })
    }

    render(){
        const {data}=this.state
       
        return(
            <div>
                <ul>
                {data.map((eachItem)=>(
            <Items data={eachItem} />
         ))}
                </ul>
            </div>
        )
    }
}
export default UserDetails;