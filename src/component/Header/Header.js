import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
          
            <nav>
                {/* <Link to ='/home'>Home</Link>
                <Link to ='/orderView'>OderView</Link> */}
               
                <CustomLink to ='/home'>Home</CustomLink>
                <CustomLink to ='/orderView'>OrderView</CustomLink>
                <CustomLink to ='/grandfather'>GrandFather</CustomLink>
            </nav>
        </div>
    );
};

export default Header;