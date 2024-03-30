import { useState } from "react";
import Calculate from "./components/Calculate";
import Transaction from "./components/Transaction";

const Home = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
    },
  ]);

  const handleAddTransaction = () => {
    const newTransaction = {
      id: transactions.length + 1,
    };
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id:number) => {
    const updatedTransaction = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransaction);
  };
  return (
    <div className="relative flex flex-col w-11/12 mx-auto my-5 lg:my-20">
      {/* Header */}
      <div>
        <h1 className="font-redHatDisplay font-semibold text-2xl lg:text-3xl">
          DCA CALCULATOR
        </h1>
      </div>
      {/* Transaction */}
      <div className="mt-6">
        <button
          className="bg-primary font-mullish py-3 px-4 rounded-lg text-white"
          onClick={handleAddTransaction}
        >
          Add Transaction
        </button>
        {transactions.map((transaction) => (
          <div className="flex flex-col md:flex-row md:items-center">
            <Transaction transaction={transaction} />
            <button
              className="md:ml-2 mt-5 md:mt-10 bg-red-500 text-white px-3 py-1 rounded w-fit"
              onClick={() => handleDeleteTransaction(transaction.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Calculate */}
      <Calculate />
    </div>
  );
};

export default Home;
