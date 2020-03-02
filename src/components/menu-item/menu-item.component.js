import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

/**
 * 
 * @param {title,imageUrl,size,linkUrl} => comes from directory component
 * @param {match,history} =>  this comes from router component by using withRouter on the menuItem component.
 */
const menuItem = ({title,imageUrl,size,history,linkUrl,match}) =>{
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
        
        //`${match.url}${linkUrl}` (there shouldnt be any space between them)  in one of the cases evaluates to /shop/hats
<div  className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>         
        <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image' />

            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        );
}

/**
 * *This gives us the component with access to the props of that the router component passes to its child component which we render
 * *in our case the child component which router component renders it is Hompage but we want access to the props that the homepage component recieves
 * *And just passing props down to directory and then passing it to menu-item isnt the best way to do it
 * *so we use withRouter and it gives menu-item access to the props 
 */
export default withRouter(menuItem);