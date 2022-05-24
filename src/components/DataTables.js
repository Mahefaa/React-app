import { render } from '@testing-library/react';
import React,{ useState,useEffect } from 'react';
import { useTable,usePagination, useGlobalFilter } from 'react-table/dist/react-table.development';
export default function DataTable(props){
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('data.json',{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
    getData()
    },[])
        const columns = React.useMemo(
                 () => [
                   {
                    Header: 'Name',
                    accessor: 'Name', // accessor is the "key" in the data
                   },
                   {
                     Header: 'Position',
                     accessor: 'Position',
                   },
                   {
                     Header: 'Office',
                     accessor: 'Office',
                   },
                   {
                     Header: 'Age',
                     accessor: 'Age',
                   },
                   {
                     Header: 'Start date',
                     accessor: 'StartDate',
                   },
                   {
                     Header: 'Salary',
                     accessor: 'Salary',
                   },
                ],
                 []
               );
             
               const {
                 getTableProps,
                 getTableBodyProps,
                headerGroups,
                 rows,
                 prepareRow,
                 page,
                canPreviousPage,
                canNextPage,
                pageOptions,
                pageCount,
                gotoPage,
                nextPage,
                previousPage,
                setPageSize,
                state: { pageIndex, pageSize },
            } = useTable(
                {
                columns,
                data,
                initialState: { pageIndex: 0 },
                },
                usePagination,
            )
            let pages=[];
            for(let i =1 ;i<=pageCount; i++){
                pages.push(i);
            }
               return (
                    <>
                   <select
                    id="choice"
                    value={pageSize}
                    onChange={e => {
                    setPageSize(Number(e.target.value))
                    }}
                     >
                    {[5,10,15 ,20, 25].map(pageSize => (
                        <option key={pageSize} value={pageSize} selected>
                            {pageSize}
                        </option>
                    ))}
                    </select>
                    <label for="choice"> entries per page</label>

                    
                    <table {...getTableProps()} style={{border:"solid 1px lightgrey"}} cellSpacing={1} cellPadding={10}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{borderBottom:"2px solid black"}}
                            >
                                {column.render('Header')}
                            </th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        border:"1px solid lightgrey"
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                                )
                            })}
                            </tr>
                        )
                        })}
                    </tbody>
                    </table>
                    <br></br>
                    <hr></hr>
                    <div className="pagination">
                        <span>Showing{' '}
                            <strong>
                                {(pageSize)*(pageIndex)+1} to {pageSize*(pageIndex+1)<=rows.length?pageSize*(pageIndex+1):rows.length} of {rows.length} entries
                            </strong>
                        </span>
                        <span style={{
                            position:"absolute",
                            right:0,
                            }}>

                            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            {'<'}
                            </button>

                            {pages.map((value)=>
                                <button onClick={()=>
                                    gotoPage(value)
                                    }>
                                    {value}
                                </button>
                            )}

                            <button onClick={() => nextPage()} disabled={!canNextPage}>
                                {'>'}
                            </button>
                        </span>
                    </div>
                 </>
                )
}