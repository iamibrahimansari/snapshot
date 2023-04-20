import {MdSearch} from 'react-icons/md';
import {useState} from 'react';

const Header = ({handleOnChange, handleOnClick}) =>{
    const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];
    return(
        <div className="header">
            <h1 className="title">SnapShot</h1>
            <div className="search">
                <input onChange={handleOnChange} type="search" placeholder="Search..." />
                <button type="button">
                    <MdSearch />
                </button>
            </div>
            <div className="category-btns">
                {categories.map(category => <button onClick={() => handleOnClick(category)} key={category} type="button">{category}</button>)}
            </div>
        </div>
    )
}

export default Header;