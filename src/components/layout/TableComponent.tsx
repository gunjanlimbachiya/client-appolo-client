import React from "react";
import "./TableComponent.css";
import { TableProps } from "../../types/types";

const TableComponent = <T extends Record<string, React.ReactNode>>({
  data,
  columns,
  operation = false,
}: TableProps<T>) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
          {operation && (
            <>
              <th>Operations</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.accessor]}</td>
            ))}
            {operation && (
              <>
                <td colSpan={2}>
                  <button className="primary">Edit</button>
                  <button className="danger">Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
