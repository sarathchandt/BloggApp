import { useState } from "react"

import TextEditor from "../TextEditor/TextEditor"

function ProfileComponent() {
    const [about, setAbout] = useState(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa possimus quaerat sed quam inventore consectetur suscipit distinctio harum delectus aut, optio cum placeat molestiae explicabo unde debitis dolor obcaecati")
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                
                    <div className="  col-md-6 my-3 px-4">
                        <div className="flex justify-center">
                            <img src="images/decaprio.jfif" className="w-56 h-56 object-cover rounded-5" alt="" />
                        </div>

                        <span className=" flex justify-center  ">
                            <span className="text-2xl border-b-2 border-darkBlue"> sarath</span>
                        </span>
                        <div className="flex justify-center">
                            <textarea name="" className="w-full px-3" id="" placeholder=" Write about you" value={about} cols="30" rows="10" style={{ outline: "none" }} onChange={(e) => { setAbout(e.target.value) }}></textarea>
                        </div>
                    </div>

                    <div className="col-md-6">


                    </div>



                    {/* ........................text editor.............................. */}

                    <div className="col-12 mb-5"><TextEditor/></div>
                 
                </div>
            </div>
        </>
    )
}

export default ProfileComponent