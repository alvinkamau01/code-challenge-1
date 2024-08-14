import React from 'react';

function Table({transactions,onRemove }) {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>{transaction.category}</td>
              <td><button className="btn btn-secondary" onClick={() => onRemove(transaction.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
