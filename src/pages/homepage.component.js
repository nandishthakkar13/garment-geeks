import React from 'react';
import './homepage.styles.scss';
import Directory from '../components/directory/directory.component';
const HomePage = () =>{
    return(
    <div className='HomePage'>
    <h1>Welcome to my HomePage</h1>
        <Directory/>
    </div>
    )};

    export default HomePage;