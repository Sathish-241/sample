import {Component, React} from 'react';
// import axios from 'axios';
import './index.css';

class UserRegistration extends Component{
    state={
        userName:'',
        age:'',
        designation:''
    }


    changeUsername=(e)=>{
        this.setState({
            userName:e.target.value
        })
        
    }

    changeAge=(e)=>{
        this.setState({
            age:e.target.value,
        })
    }

    changeDesignation=(e)=>{
        this.setState({
            designation:e.target.value,
        })
    }

    submitForm=async(event)=>{
        event.preventDefault()
        const{userName,age,designation}=this.state
        // console.log(userName,age,designation)
        const data={userName,age,designation}
        // console.log(data)
        const url="http://localhost:8001/user/";
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
            },
            body:JSON.stringify(data)
        }
        const response=await fetch(url,options);
        console.log(response)
        // axios.post(url,data).then((res)=>{
        //     console.log(res)
        // })
    }

    render(){
        return(
                <div className='app-container'>
                    <form onSubmit={this.submitForm} >
                    <div>
                        <label htmlFor='userName'>UserName: </label>
                        <input type='text' className='user-input' onChange={this.changeUsername}/>
                    </div>
                    <div>
                        <label htmlFor='age'>Age: </label>
                        <input type='text' className='user-age' onChange={this.changeAge}  />
                    </div>
                    <div>
                        <label htmlFor='designation'>Designation: </label>
                        <input type='text' className='user-designation' onChange={this.changeDesignation} />
                    </div>
                    <div>
                        <button type='submit'>Add User</button>
                    </div>
                    </form>
                </div>
        )
    }
}   
export default UserRegistration;
