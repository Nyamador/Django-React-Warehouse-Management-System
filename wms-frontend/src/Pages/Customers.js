import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import Table from '../common/Table';

const Customers = () => {
  const [dataList, setdataList] = useState([]);

  const dataHeadings = ['Firstname', 'Lastname', 'Email'];
  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/v1/customers/all')
    .then( res => res.json())
    .then( data => setdataList([...data]) );
  }, [])

  return (
    <>
      <Header />
      <Table data={dataHeadings} editable={false} list={dataList}/>
    </>
  );
};

export default Customers;
