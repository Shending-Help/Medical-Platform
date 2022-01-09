import React from 'react'
import SectionLayout from './SectionLayout'


function MainLayout(props) {
    return (
        <div className={props.className}>
            
            <hr />
            MainLayout
            <SectionLayout></SectionLayout>
        </div>
    )
}

export default MainLayout
