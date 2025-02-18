import React from 'react';
import Navbar from './Navbar';

const getData=async()=>{
    let category =(await(await fetch('http://localhost:3000/api/category')).json()).data
    // let social =(await(await fetch('http://localhost:3000/api/social')).json()).data
    return category
}   

const PlaneLayout =async ({children}) => {
    let data =await getData()
    return (
        <div>
            <Navbar data={data}/>
            {children}
        </div>
        
    );
};

export default PlaneLayout;