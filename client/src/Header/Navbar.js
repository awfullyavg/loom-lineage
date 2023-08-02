import React from "react";
import ReactDOM  from "react-dom";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from 'react-modal';

function Navbar () {
    const [open, setOpen] = useState(false);
    const myStyle = {height: '64px'}

    const handleOpen = () => { //Opens Modal when login button clicked
        setOpen(true)
    }

    const handleClose = () => { //Closes Modal when cliked anywhere outside the modal
        setOpen(false)
    }

    return (
        <nav class="relative flex w-full flex-wrap items-center justify-between py-2 shadow-lg text-slate-500 hover:text-neutral-700 focus:text-neutral-700 bg-Ash-Gray lg:py-4">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div>
            <a class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0" href="#">
            <Link to='/' ><img
                class="mr-2"
                src="https://i.imgur.com/32wqxFa.png"
                style={myStyle}
                alt="TE Logo"
                loading="lazy" /></Link>
                <Link to='/' className="font-medium dark:text-neutral-200">Loom Lineage</Link>
            </a>
            </div>

            <div>
                <button className="login-button-modal" onClick={handleOpen}>Login</button>
                <Link to="/signup" className="sign-up">Signup</Link>
                <Modal className='' isOpen={open} onRequestClose={handleClose} contentLabel="Login" >
                    <h1>Please Login</h1>
                    <div>
                        <form onSubmit={''}>
                            <label>Email:</label><br></br>
                            <input type="text" id="email" onChange={(e) => ('') } ></input><br></br>
                            <label>Password:</label><br></br>
                            <input type="password" id="password" onChange={(e) => ('') } ></input><br></br>
                            <button className="login-button">Login</button>
                        </form>
                    </div>

                </Modal>
                
            </div>
            
        </div>
        </nav>

        );
      }
export default Navbar