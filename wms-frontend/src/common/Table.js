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
                { data.map( item =>
                      (
                        <th scope='col' key={Math.random()}>
                        <p className='text-muted sort' data-sort='tables-row'>
                        {item}
                        </p>
                      </th>
                      )
                )
                }
                </tr>
              </thead>
              <tbody className='list'>

                {
                    list.map(
                        datapoint => 
                        <tr key={Math.random()}>
                            <td className="tables-handle">
                            {datapoint.firstname || datapoint.name || datapoint.destination}
                            </td>
                            <td className="tables-handle">
                            {datapoint.lastname || datapoint.quantity }
                            </td>
                            <td className="tables-handle">
                            {datapoint.email || datapoint.sku || datapoint.product}
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
