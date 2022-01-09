import React from 'react'
import './Card.css'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
function Card(props) {
    return (

        // {props.children}
        <div className='Card'>

            <CardHeader></CardHeader>
            <CardBody></CardBody>
            <CardFooter></CardFooter>
            {/* <EditAppointment/>
            <DeleteAppointment/> */}
        </div>

    )
}

export default Card
