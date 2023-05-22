import axios from "axios"
import { useState } from "react"
import { api } from "../../../api/api"
import { useNavigate } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignupComponent() {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePass, setRePass] = useState()
    const navigate = useNavigate()

    function submitData(e){
        e.preventDefault()
        axios.post(`${api}signup`,{fullName,email,password}).then(res=>{
            console.log(res.data.alreadyExist);
            if(res?.data?.token){
                localStorage.setItem('userToken', res.data.token);
                    navigate('/profile')
            }else{
                    toast.warning("This email already registered")
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
         <ToastContainer />
            <div className="container-fluid">
                <div className="row pt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form  onSubmit={submitData} >
                            <div  className="form-outline mb-4">
                                <input type="text" id="registerName" className="form-control" value={fullName} onChange={(e)=>{setFullName(e.target.value)}} />
                                <label className="form-label" htmlFor="registerName">Full name</label>
                            </div>
                            <div  className="form-outline mb-4">
                                <input type="email" id="registerName" className="form-control"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                <label className="form-label" htmlFor="registerName">Email</label>
                            </div>
                            <div  className="form-outline mb-4">
                                <input type="password" id="registerName" className="form-control"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                <label className="form-label" htmlFor="registerName">Password</label>
                            </div>
                            <div  className="form-outline mb-4">
                                <input type="password" id="registerName" className="form-control" value={rePass} onChange={(e)=>setRePass(e.target.value)} />
                                <label className="form-label" htmlFor="registerName">Re-Password</label>
                            </div>
                            <button type="submit" className="btn bg-darkBlue hover:bg-darkBlue text-white">Register</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default SignupComponent