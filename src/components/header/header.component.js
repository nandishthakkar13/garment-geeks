import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({currentUser,hidden}) =>{
    return(
    <div className='header'>
        <Link className='image-container' to='/'>
            <Logo className='image'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        

        {currentUser ? 
            (<div className='option' onClick={() => auth.signOut()}>
             SIGN OUT
             </div>) 
            : 
            (<Link to='/signin' className='option'>
            SIGN IN
            </Link>)
        }

        <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
        
    </div>
    );
} 

const mapStateToProps =  createStructuredSelector({
     currentUser: selectCurrentUser,
    hidden : selectCartHidden
})
export default connect(mapStateToProps)(Header);