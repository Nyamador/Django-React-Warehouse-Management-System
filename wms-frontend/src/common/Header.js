import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="topnav">
        <div className="container">

          <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="navbar-user">
      

            <div className="dropdown">
        
              <div className="avatar-img rounded-circle">
                <Link to="/login">
                <i className="fe fe-user">                      </i>          
                </Link>
              </div>

            </div>

          </div>


          <div className="collapse navbar-collapse mr-auto order-lg-first" id="navbar">




            <ul className="navbar-nav mr-auto">

              <h2 className="text-muted nav-item mb-0">
                <div>
                  <Link to='/'>
                  Stock
                  </Link>
                </div>
              </h2>
            </ul>

          </div>

        </div>
      </nav>
    )
}


export default Header;