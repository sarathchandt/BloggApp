import { useNavigate } from "react-router-dom"


function Header() {
    let navigate = useNavigate()
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 flex justify-center bg-darkBlue h-16 gap-5">
                        <h1 className="text-3xl font-bold text-white p-2 mt-1 ">BLOG</h1>
                       <div className=" mx-5 hidden md:block">
                        <div className="flex  gap-4 pt-3 text-white">
                            <a href="#" className="border-bottom">Home</a>
                            <a href="#">Cultural</a>
                            <a href="#">Business</a>
                            <a href="#">Politics</a>
                            
                        </div>
                        </div>
                        <div className=" flex  pt-3">
                            <div>
                            <input type="text" name="" className="border-2 rounded-3 bg-darkBlue text-white  " placeholder=" Search here" id=""  style={{outline:"none"}} />
                            </div>
                            <div className="md:mx-5 mx-1 text-white cursor-pointer" onClick={()=>{navigate('/login')}}>Login</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header