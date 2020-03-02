import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
/**
 * ! this component is class component because it holds state of menu-items
 * 
 */

 class Directory extends React.Component{
    constructor(){
        /**
         * * so that it calls the constructor of Component class and brings in the necessary things
         */
        super();   
        /**
         * * Adding the property size for the 4th and 5th object so that in menu-item component we can indicate the image size to be large
         */
        this.state ={
            /**
             * * we name it sections which refer to each menu-item of our page which holds an array of 5 objects.
             */
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }   /*State ends */

    }/*constructor ends */

    /**
     * *we here use spread operator(...) to indicate all the other properties title={title} imageUrl={imageUrl} size={size} linkUrl = {linkUrl}
     * ? {...otherSectionProps} learn about spread operator
     */
    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }

 }/*end of Directory class */

 export default Directory;