import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import "../styles/datatable.css";

const DataTable: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    const deleteItem = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    
    const navigate = useNavigate();

    const data = React.useMemo(
        () => [
            { id: 1, name: "Item 1", description: "Description 1" },
            { id: 2, name: "Item 2", description: "Description 2" },
            { id: 3, name: "Item 3", description: "Description 3" },
            { id: 1, name: "Item 1", description: "Description 1" },
            { id: 2, name: "Item 2", description: "Description 2" },
            { id: 3, name: "Item 3", description: "Description 3" },
            { id: 1, name: "Item 1", description: "Description 1" },
            { id: 2, name: "Item 2", description: "Description 2" },
            { id: 3, name: "Item 3", description: "Description 3" },
            { id: 1, name: "Item 1", description: "Description 1" },
            { id: 2, name: "Item 2", description: "Description 2" },
            { id: 3, name: "Item 3", description: "Description 3" },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "Name", accessor: "name" },
            { Header: "Description", accessor: "description" },
            {
                Header: "Actions",
                Cell: ({ row }: { row: any }) => (
                    <div className="actions">
                        <button onClick={() => editItem(row.values.id)}>Edit</button>
                        <button className="actionsDelete" onClick={deleteItem}>Delete</button>
                    </div>
                    
                ),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        previousPage,
        nextPage,
        pageCount,
        gotoPage,
        state: { pageIndex },
    } = useTable(
        { columns, data, initialState: { pageIndex: 0 } },
        usePagination
    );

    const editItem = (id: number) => {
        navigate(`/edit/${id}`);
    };

    // const deleteItem = (id: number) => {
    //     alert(`Delete item with ID: ${id}`);
    // };

    return (
        <div>
            <table {...getTableProps()} className="datatable">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={previousPage} disabled={!canPreviousPage}>
                    Previous
                </button>
                <span>
                    Page {pageIndex + 1} of {pageCount}
                </span>
                <button onClick={nextPage} disabled={!canNextPage}>
                    Next
                </button>
            </div>
            {showPopup && (
                <div className="popup">
                <div className="popup-content">
                    <p>Are you sure you want to delete this item?</p>
                    <div className="popup-btn">
                        <button onClick={closePopup}>Cancel</button>
                        <button>Confirm</button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;