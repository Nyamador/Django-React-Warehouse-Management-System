import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Table from '../common/Table';

const Customers = () => {
  const [dataList, setdataList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const dataHeadings = ['Firstname', 'Lastname', 'Email'];

  // var myHeaders = new Headers();
  // myHeaders.append('Authorization', `Token ${localStorage.getItem('access_token')}`)

  const tokenAuth = `Authorization: Token ${localStorage.getItem('access_token')}`
  console.log(tokenAuth)

  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/v1/customers/all', {method: 'GET', headers:{tokenAuth, 'Access-Control-Allow-Headers': '*'}})
    .then( res => res.json())
    .then( data => setdataList([...data]) )
    .then(setisLoading(false))
    .catch(err => setisLoading(true));
  }, [tokenAuth])

  return (
    <>
      <Header />

      { isLoading ?  <div className="spinner-border text-primary" role="status"> <span className="sr-only">Loading...</span> </div>
                  :  <Table data={dataHeadings} editable={false} list={dataList}/>}
    </>
  );
};

export default Customers;
