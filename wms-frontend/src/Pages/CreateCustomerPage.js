import React from 'react';
import Header from '../common/Header';


const CreateCustomerPage = () => {
    return(

        <Header/>

        <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                
                <div className="header mt-md-5">
                    <div className="header-body">
                      <div className="row align-items-center">
                        <div className="col">


                        <!-- Title -->
                          <h1 className="header-title">
                                  <i className="fe fe-user"></i>
                            Create A New Shipment
                          </h1>

                        </div>
                      </div> 
                    </div>
                  </div>

                <form method="POST">
                 

                    <div className="form-group">
                                  <div className="form-group">
                                      <label for="id_customer">Customer</label>
                                      <select name="customer" className="required form-control" required="" id="id_customer">
  <option value="" selected="">---------</option>

  <option value="1">Kwame Mensah</option>

  <option value="2">Desmond Nyamador</option>

  <option value="3">Ama Serwah</option>

  <option value="4">Nana Osei</option>

  <option value="5">Naa Laryea</option>

</select>
                                      <div className="invalid-feedback">
                                          
                                      </div>
                                  </div>
                    </div>

                    <div className="form-group">
                                  <div className="form-group">
                                      <label for="id_destination">Destination of Shipment</label>
                                      <input type="text" name="destination" maxlength="100" className="required form-control" required="" id="id_destination"/>
                                      <div className="invalid-feedback">
                                          
                                      </div>
                                  </div>
                    </div>

                    <div className="form-group">
                                  <div className="form-group">
                                      <label for="id_product">Product</label>
                                      <select name="product" className="required form-control" required="" id="id_product">
  <option value="" selected="">---------</option>

  <option value="4">Brown Leather Shoes</option>

  <option value="5">LG 23' OLED Monitor</option>

  <option value="6">Samsung Z Flip</option>

  <option value="10">Samsung Aa30</option>

</select>
                                      <div className="invalid-feedback">
                                          
                                      </div>
                                  </div>
                    </div>

                    <div className="form-group">
                                  <div className="form-group">
                                      <label for="id_quantity">Product Quantity</label>
                                      <input type="number" name="quantity" min="0" className="required form-control" required="" id="id_quantity"/>
                                      <div className="invalid-feedback">
                                          
                                      </div>
                                  </div>
                    </div>

                 
                </form>

              <input type="submit" className="primaryAction btn btn-lg btn-block btn-primary mb-3" value="Create Shipment">

            </div>
        </div>
    </div>
    )
}