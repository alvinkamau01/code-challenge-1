import React, { useState } from 'react';

function Form() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleEvent = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Convert amount to a number if necessary
    const numericAmount = parseFloat(amount);

    try {
      const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          amount: isNaN(numericAmount) ? amount : numericAmount, // Ensure amount is a number
          date,
          category,
        }),
      });

// Handle success (e.g., show a success message)
      console.log('Data submitted successfully!');
      // Reset form fields after successful submission
      setDescription('');
      setAmount('');
      setDate('');
      setCategory('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleEvent}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" id="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
