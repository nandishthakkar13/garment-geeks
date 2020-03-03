import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


/**
 * *As we going deal with state we are making shop component a class component
 */

 class ShopPage extends React.Component{

    /**
     * ?Why are we passing props as a parameter here
     * ? What are we using it for
     * *our state equals SHOP_DATA which is an array of things we want to preview which is located in a different file and the data for now is static.
     */
    constructor(props){
        super(props);

        this.state = {
            collections:SHOP_DATA
        }
    }

    render(){

        
        return(
            <div className='shop-page'>
                 {this.state.collections.map(({id, ...otherCollectionProps})=>(
                    <CollectionPreview key={id}  {...otherCollectionProps}/>
                 ))}
            </div>
        );
    }
 }

 export default ShopPage;