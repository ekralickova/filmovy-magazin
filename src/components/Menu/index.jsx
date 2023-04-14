import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Menu = () => {

    return (
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
            <Link to="/">Home</Link> |{' '}
            <Link to="/reviews">Reviews</Link> |{' '}
            <Link to="/articles">Articles</Link> |{' '}
            <Link to="/movies">Movies</Link>
        </nav>
    )

}

export default Menu;