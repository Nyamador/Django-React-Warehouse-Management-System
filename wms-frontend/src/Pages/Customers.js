import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Table from '../common/Table';

const Customers = () => {
  const [dataList, setdataList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const dataHeadings = ['Firstname', 'Lastname', 'Email'];
  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/v1/customers/all')
    .then( res => res.json())
    .then( data => setdataList([...data]) )
    .then(setisLoading(false))
    .catch(err => setisLoading(true));
  }, [])

  return (
    <>
      <Header />

      { isLoading ?  <div className="spinner-border text-primary" role="status"> <span className="sr-only">Loading...</span> </div>
                  :  <Table data={dataHeadings} editable={false} list={dataList}/>}
    </>
  );
};

export default Customers;
