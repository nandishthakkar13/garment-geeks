import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

/*
persistconfig object is passed to inform that these are the rules you need to follow 
key is to inform where to start persisting (from root)
storage is which storage to use in this case we are using storage from redux-persist
whitelist is which reducers we want to persist in our case we dont need users b ecause firebase is taking care of it

 */
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
}) 

export default persistReducer(persistConfig,rootReducer);