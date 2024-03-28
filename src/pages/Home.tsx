import Calculate from "./components/Calculate";
import Transaction from "./components/Transaction";
interface transaction {
  id: number;
}
const Home: React.FC<transaction> = () => {
  const transaction = [
    {
      id: 1,
    },
  ];
  return (
    <div className="relative flex flex-col w-11/12 lg:w-10/12 mx-auto my-5 lg:my-20">
      {/* Header */}
      <div>
        <h1 className="font-redHatDisplay font-semibold text-2xl lg:text-3xl">
          DCA CALCULATOR
        </h1>
      </div>
      {/* Transaction */}
      <div className="mt-6">
        <button className="bg-primary font-mullish py-3 px-4 rounded-lg text-white">
          Add Transaction
        </button>
        {transaction.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </div>

      {/* Calculate */}
      <Calculate />
    </div>
  );
};

export default Home;
