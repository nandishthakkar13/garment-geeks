import React from 'react';
import './menu-item.styles.scss';

const menuItem = ({title,imageUrl,size}) =>{
    /**
     * *We add style object here and pass background image dynamically so we can handle changes from Directory state
     * *
     */
    return(

        /**
         * *inside there are 2 divs 
         * *one containing image and the other containing content box
         * *But we dont want this 2 divs as child because then both will be aside 
         * *we want the content div inside the image div
         * * we can't wrap the content div inside the image div because then when we hover over the image even the content box will zoom 
         * *so we kept them as child here
         * *then using css property position:absolute the content box will always be on top of image div and it will be always 
         * *at the calculation point 
         */
<div  className={`${size} menu-item`}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image' />

            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        );
}

export default menuItem;