import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {

    const [{basket, user}] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            
        {/* logo -> left = img */}
        <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0xRjTB0mJ4WjPkQye-_gzi32gQdwwUAt7cA&usqp=CAU" alt="" className="header__logo" />
        </Link>

        {/* Search box */}
        <div className="header__search">
            
        </div>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />

        {/* links */}
        <div className="header__nav">
        {/* link 1 */}
        <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
        <span className="header__optionLineOne">Hello {user?.email}</span>
        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>   
        </div>
        </Link>

        {/* link 2 */}
        <Link to="/orders" className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>   
        </div>
        </Link>

        {/* link 3 */}
        <Link to="/" className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>   
        </div>
        </Link>

        {/* link 4 */}
        <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
        
        </div>
        {/* Cart */}

        </nav>
    )
}

export default Header
