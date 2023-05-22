import { useNavigate } from "react-router-dom"

function LoginComponent() {
    let navigate = useNavigate()
    return (

        <>

            <div className="container-fluid">
                <div className="row pt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <div className
                                ="form-outline mb-4">
                                <input type="email" id="form2Example1" className
                                    ="form-control" />
                                <label className
                                    ="form-label" htmlFor="form2Example1">Email address</label>
                            </div>

                            <div className
                                ="form-outline mb-4">
                                <input type="password" id="form2Example2" className
                                    ="form-control" />
                                <label className
                                    ="form-label" htmlFor="form2Example2">Password</label>
                            </div>
                            <button className="btn bg-darkBlue hover:bg-blue text-white" type="submit">Login</button>
                            <div className  ="row mb-4">
                                <div className ="col d-flex justify-content-center">
                                    <div className ="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col">
                                    <a href="#!">Forgot password?</a>
                                </div>
                                <h1 className="text-center my-4">Do not have an account <a className="cursor-pointer" onClick={()=>{navigate('/signup')}}>Sign-up now</a></h1>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>


        </>
    )
}

export default LoginComponent