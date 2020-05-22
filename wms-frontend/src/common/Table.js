import React from 'react';

const Table = ({data, editable, list}) => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-10 col-xl-8'>
          <div
            className='table-responsive'
            data-toggle='lists'
            data-options='{"valueNames": ["tables-row", "tables-name", "tables-quantity",
        "tables-sku", "tables-delete", "tables-edit"]}'
          >
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>
                    <p className='text-muted sort' data-sort='tables-row'>
                      #
                    </p>
                  </th>
                  <th scope='col'>
                    <p className='text-muted sort' data-sort='tables-name'>
                      Name
                    </p>
                  </th>
                  <th scope='col'>
                    <p className='text-muted sort' data-sort='tables-quantity'>
                      Quantity
                    </p>
                  </th>
                  <th scope='col'>
                    <p className='text-muted sort' data-sort='tables-sku'>
                      SKU
                    </p>
                  </th>
                  <th scope='col'>
                    <p className='text-muted'>Delete</p>
                  </th>
                  <th scope='col'>
                    <p className='text-muted'>Edit</p>
                  </th>
                </tr>
              </thead>
              <tbody className='list'>
                <tr>
                  <th scope='row' className='tables-row'>
                    {' '}
                    product.id{' '}
                  </th>
                  { data.map( item =>  <td className='tables-first' key={Math.random()}> {item} </td>)}
                  { editable ?
                  <>
                  <td className='tables-handle text-center'>
                    <p>
                      <i className='fe fe-trash'></i>
                    </p>
                  </td>
                  <td className='tables-handle text-center'>
                    <p>
                      <i className='fe fe-edit-2'></i>
                    </p>
                  </td>
                  </>
                  :
                  <>
                  <td className='tables-first'>No Permission</td>
                  <td className='tables-first'>No Permission</td>
                  </>
                }
                                </tr>

                {
                    list.map(
                        datapoint => 
                        <tr key={Math.random()}>
                            <td className="tables-handle text-center">
                            {datapoint.firstname}
                            </td>
                            <td className="tables-handle text-center">
                            {datapoint.lastname}
                            </td>
                            <td className="tables-handle text-center">
                            {datapoint.email}
                            </td>
                        </tr>
                    )
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
