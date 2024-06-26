import { useState } from "react";
import Calculate from "./components/Calculate";
import Transaction from "./components/Transaction";
import { transactionType } from "../type/transactions";

const Home = () => {
  const [transactions, setTransactions] = useState<transactionType[]>([
    {
      id: 0,
      totalSpent: null,
      costOfStock: null,
      stocksReceived: null,
    },
  ]);

  const handleAddTransaction = () => {
    const newTransaction = {
      id: transactions.length,
    };
    // @ts-ignore
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id: number) => {
    const updatedTransaction = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransaction);
  };

  const [totalSpent, setTotalSpent] = useState("XXXXX");
  const [totalUnit, setTotalUnit] = useState("XXXXX");
  const [averageCost, setAverageCost] = useState("XXXXX");

  const calculateTotal = () => {
    const spentValues = transactions.map((spent) => spent.totalSpent || 0);
    // @ts-ignore
    const total = spentValues.reduce(
      (acc: number, value: number) => acc + value,
      0
    ).toLocaleString();
    // @ts-ignore
    setTotalSpent(total);
 
    // Calculate total unit
    let totalUnit = 0;
    transactions.forEach((transaction) => {
      if (transaction.totalSpent !== null && transaction.costOfStock !== null) {
        totalUnit += transaction.totalSpent / transaction.costOfStock;
      }
    });
    // @ts-ignore
    setTotalUnit(totalUnit);

    // Calculate average cost
    // @ts-ignore
    let averageCost = total / totalUnit
    // @ts-ignore
    setAverageCost(averageCost)
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
          <div
            className="flex flex-col md:flex-row md:items-center"
            key={transaction.id}
          >
            <Transaction
              transaction={transaction}
              transactions={transactions}
              setTransactions={setTransactions}
            />
            <button
              className="md:ml-2 mt-5 md:mt-10 bg-red-500 text-white px-3 py-1 rounded w-fit"
              // @ts-ignore
              onClick={() => handleDeleteTransaction(transaction.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Calculate */}
      <Calculate
        totalSpent={totalSpent}
        totalUnit={totalUnit}
        averageCost={averageCost}
        calculateTotal={calculateTotal}
      />
    </div>
  );
};

export default Home;
