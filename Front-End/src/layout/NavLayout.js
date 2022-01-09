import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './NavLayout.css'
function NavLayout(props) {
    // const [searchKW, setSearchKW]
    const logStatus = props.auth.logStatus;
    const logbtn = {
        logedIn: {
            btnTxt:'Log Out',
            btnPath:'/'
        }, logedOut: {
            btnTxt:'Log in',
            btnPath:'/signin'
        }
    }

    return (
        <div className={props.className + " NavLayout-container"}>
            <div className="NavLayout-logo">
                <Link to="/"> MedicalCare</Link>
            </div>
            <div className='NavLayout-saerch'>
                <form>
                    <input type="search"></input>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='NavLayout-last'>
                <Link to={logbtn[logStatus].btnPath}>{logbtn[logStatus].btnTxt}</Link>
            </div>
        </div>
    )
}

export default NavLayout
