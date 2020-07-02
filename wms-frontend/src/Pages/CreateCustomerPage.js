import React from 'react';
import Header from '../common/Header';


const CreateCustomerPage = () => {
    return(
        <>
        <Header/>

        <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                
<div className="header mt-md-5">
    <div className="header-body">
      <div className="row align-items-center">
        <div className="col">


          
          <h1 className="header-title">
                  <i className="fe fe-user"></i>
            Add a Customer
          </h1>

        </div>
      </div> 
    </div>
  </div>

  <form className="organizer-form" method="post">
    
    
    <div className="form-group">
        <label for="id_firstname">Firstname</label>
            <input type="text" name="firstname" maxlength="50" className="required form-control" required="" id="id_firstname"/>
                <div className="invalid-feedback">
                    
                </div>
    </div>

    <div className="form-group">
        <label for="id_lastname">Lastname</label>
            <input type="text" name="lastname" maxlength="50" className="required form-control" required="" id="id_lastname"/>
                <div className="invalid-feedback">
                    
                </div>
    </div>

    <div className="form-group">
        <label for="id_email">Email Address</label>
            <input type="email" name="email" maxlength="100" className="required form-control" required="" id="id_email"/>
                <div className="invalid-feedback">
                    
                </div>
    </div>

    <input type="submit" className="primaryAction btn btn-lg btn-block btn-primary mb-3" value="Create Customer"/>
    
    </form>

            </div>
        </div>
    </div>
        </>
    )
}


export default CreateCustomerPage;