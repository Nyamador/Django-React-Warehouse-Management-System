import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import Table from '../common/Table';

const ShipmentsPage = () => {
  const [shipmentsList, setshipmentsList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const dataHeadings = ['Destination', 'Quantity', 'Product'];
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/shipments/all')
      .then((res) => res.json())
      .then((data) => setshipmentsList([...data]))
      .then(setisLoading(false));
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <div className='spinner-border text-primary' role='status'>
          {' '}
          <span className='sr-only'>Loading...</span>{' '}
        </div>
      ) : (
        <Table data={dataHeadings} editable={false} list={shipmentsList} />
      )}
    </>
  );
};

export default ShipmentsPage;
