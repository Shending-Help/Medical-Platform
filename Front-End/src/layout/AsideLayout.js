import React from 'react'
import { Link } from 'react-router-dom';
import {sideBarComponentTop, sideBarComponentbotton} from '../HelperDesignFun/SideBarHelper'
import {LOGbtn} from '../HelperDesignFun/LOGbtnHelper'

import './AsideLayout.css'
function AsideLayout(props) {

    const userType = props.auth.userType;
    const logStatus = props.auth.logStatus;
        
    // const logbtn = {
    //     logedIn: {
    //         btnTxt: 'Log Out',
    //         btnPath: '/'
    //     }, logedOut: {
    //         btnTxt: 'Log in',
    //         btnPath: '/sign'
    //     }
    // }

    return (
        <div className={props.className + " asideLayout-container"}>
            <div className='asideLayout-top'>
                {sideBarComponentTop(userType).map(e => {
                    return (
                        <div className='asideLayout-ele' key={e.route}>
                            <Link to={e.path}>{e.route}</Link>
                        </div>
                    )
                })}
            </div>
            <div className='asideLayout-borron'>
                <div className='asideLayout-ele'>
                    <Link to={sideBarComponentbotton(userType)[0].path}>{sideBarComponentbotton()[0].route}</Link>
                </div>
                <div className='asideLayout-ele'>
                    <Link to={LOGbtn(logStatus).btnPath}>{LOGbtn(logStatus).btnTxt}</Link>
                </div>
            </div>
        </div>
    )
}

export default AsideLayout
