import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({items,title}) =>{

    /**
     * *using filter array function we are only previewing 4 items from our list of items 
     * !The only concern being whenever we re-render this component each single time it would filter through our array no matter how big our array would be which is
     * ! not the most efficient thing to do.
     * ?Learn more about accessing props using spread operator
     * ?How did we got access to id even though we didnt destructure it
     * !We also used spread operator in a similar way in the directory-menuItem component.
     * ?Learn about using backtick while setting dynamic imageUrl to the backgroundImage property.
     */
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
            {items.filter((item,index)=> index < 4).map(({id, ...otherItemProps})=>(
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
            </div>
        </div>
    );

}

export default CollectionPreview;