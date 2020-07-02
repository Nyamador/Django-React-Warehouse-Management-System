import React from 'react';
import '../fonts/feather/feather.min.css';
import Header from '../common/Header';
import {Link} from 'react-router-dom';


const Homepage = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-10 col-xl-8'>
          <div className='header mt-md-2'>
            <div className='header-body'>
              <h1 className='header-title'>Warehouse Name</h1>

              <p className='header-subtitle'>Welcome - Desmond</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-lg-6 col-xl'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h6 className='card-title text-uppercase text-muted mb-2'>
                        Total Orders
                      </h6>

                      <span className='h2 mb-0'>GHS 200</span>
                    </div>
                    <div className='col-auto'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-lg-6 col-xl'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h6 className='card-title text-uppercase text-muted mb-2'>
                        Total Products
                      </h6>

                      <span className='h2 mb-0'>100</span>
                    </div>
                    <div className='col-auto'>
                      <span className='h2 fe fe-tag text-muted mb-0'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 col-xl'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h6 className='card-title text-uppercase text-muted mb-2'>
                        Customers
                      </h6>

                      <div className='row align-items-center no-gutters'>
                        <div className='col-auto'>
                          <span className='h2 mr-2 mb-0'>20</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-auto'>
                      <span className='h2 fe fe-user text-muted mb-0'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-6 col-xl-4'>
              <div className='card'>
                <div className='card-header'>
                  <h2 className='card-header-title'>
                    <i className='fe fe-truck'></i> &nbsp;&nbsp;&nbsp; Shipments
                  </h2>
                </div>

                <div className='card-header'>
                  <h4 className='card-header-title'>
                    <Link to="/shipments/new">
                      <i className='fe fe-plus-circle'></i> &nbsp;&nbsp;&nbsp;
                      Add New
                    </Link>
                  </h4>
                </div>

                <div className='card-header'>
                  <h4 className='card-header-title'>
                  <Link to="/shipments">
                    <i className='fe fe-list'></i> &nbsp;&nbsp;&nbsp; All Shipments
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-xl-4'>
              <div className='card'>
                <div className='card-header'>
                  <h2 className='card-header-title'>
                    <i className='fe fe-tag'></i> &nbsp;&nbsp;&nbsp; Products
                  </h2>
                </div>

                <div className='card-header'>
                  <h4 className='card-header-title'>
                    <Link to="/products/new">
                      <i className='fe fe-plus-circle'></i> &nbsp;&nbsp;&nbsp;
                      Add New
                    </Link>
                  </h4>
                </div>

                <div className='card-header'>
                  <h4 className='card-header-title'>
                    <Link to="/products">
                    <i className='fe fe-list'></i> &nbsp;&nbsp;&nbsp; All Products
                    </Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-xl-4'>
              <div className='card'>
                <div className='card-header'>
                  <h4 className='card-header-title'>
                    <i className='fe fe-user'></i> &nbsp;&nbsp; Customers
                  </h4>
                </div>

                <div className='card-header'>
                  <h4 className='card-header-title'>
                    <Link to="/customers/new">
                      <i className='fe fe-plus-circle'></i> &nbsp;&nbsp;&nbsp;
                      Add New
                    </Link>
                  </h4>
                </div>

                <div className='card-header'>
                  <h4 className='card-header-title'>
                    <Link to='/customers'>
                      <i className='fe fe-list'></i> &nbsp;&nbsp;&nbsp; All Customers
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;
