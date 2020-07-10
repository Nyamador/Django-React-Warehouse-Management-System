import React from 'react';
import Header from '../common/Header';
import InputElement from '../common/InputElement';



const CreateProductPage = () => {

    return (
        <React.Fragment>
            <Header/>

            <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                
        <div className="header mt-md-5">
            <div className="header-body">
            <div className="row align-items-center">
                <div className="col">


                
                <h1 className="header-title">
                        <i className="fe fe-tag"></i>
                    Add a product
                </h1>

                </div>
            </div>
            </div>
        </div>


  <form className="organizer-form" method="post">
    
    
    <div className="form-group">
        <label for="id_name">Product Name</label>
        <InputElement type="text" name="name" id="id_name"/>
                <div className="invalid-feedback">
                    
                </div>
    </div>

    <div className="form-group">
        <label for="id_quantity">Product Quantity</label>
        <InputElement type="number" name="quantity" id="id_quantity"/>
                <div className="invalid-feedback">
                    
                </div>
    </div>

    <div className="form-group">
        <label for="id_price">Unit Price</label>
            <input type="number" name="price" step="0.01" className="required form-control" required="" id="id_price"/>
                <div className="invalid-feedback">
                    
                </div>
    </div>
    
    <div className="form-group">
        <label for="id_sku">Stock Keeping Unit</label>
            <input type="text" name="sku" maxlength="50" className="required form-control" required="" id="id_sku"/>
                <div className="invalid-feedback">
                    
                </div>
    </div>    

    <input type="submit" className="primaryAction btn btn-lg btn-block btn-primary mb-3" value="Create Product"/>
    
    
    </form>


            </div>
        </div>
    </div>
        </React.Fragment>
    )
}


export default CreateProductPage;