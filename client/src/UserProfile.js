import React from "react";
import { useState, useEffect } from "react";
import Loom from "./Loom";
import FamilyTable from "./FamilyTable";
import { Link } from "react-router-dom";
import Logout from "./Logout";


function UserProfile ({user, setUser}) {
// Need to make the following:
// 1. Create a loom (Need a form. GET, POST, DELETE)
// 2. Show Loom created. 
// 3. Able to click the loom and create a family
// 4. Need to make a family componnet and put family form in there




    return (
        <div>
            
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            
            <div className="loom-container">
                <FamilyTable user={user} setUser={setUser} />
            </div><br></br>

            <div>

            </div>



            <div>
                <Link to='/events'>Create an event!</Link>
            </div><br></br>

            <div className='logout-container'>
            <Logout setUser={setUser} />
            </div>

        </div>
    )
}

export default UserProfile