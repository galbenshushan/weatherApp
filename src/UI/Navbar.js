import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const themeSlice = useSelector(state => state.theme)

  const dynamicTheme = themeSlice === 'dark' ? null : 'rgb(71, 181, 232)';
  
  return (
    <div class style={{ backgroundColor: themeSlice === 'dark' ? null : 'rgb(201, 236, 252)', 'transition': '1s' }}>
      <div className="site-header" >
        <div className="container aclass" >
          <div style={{ paddingLeft: '5rem' }} className="branding" >
            <img src="images/icons/icon-2.svg" alt="" className="logo" />
            <div className="logo-type">
              <h1 className="site-title" style={{ color: dynamicTheme, fontSize: '2rem' }}>Wheather app</h1>
              <h3 className="site-title" style={{ color: dynamicTheme }}>By Gal Ben-Shushan</h3>
            </div>
          </div>
          <div className="main-navigation">
            <ul className="menu">
              <li style={{ paddingTop: '2rem' }} className="menu-item current-menu-item linked">
                <Link to="/">Home</Link>
              </li>
              <li style={{ paddingTop: '2rem' }} className="menu-item current-menu-item linked">
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar