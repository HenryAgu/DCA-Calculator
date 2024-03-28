const Home = () => {
  const transaction = [{ id: 1 }, { id: 2 }];
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto my-5 lg:my-20">
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
          <div className="mt-10 flex flex-col lg:flex-row lg:items-end gap-x-8">
            <div className="flex items-center gap-x-2 font-redHatDisplay text-grey-100 font-semibold lg:text-2xl">
              <p>{transaction.id}.</p>
              <p>Transaction 0{transaction.id}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-5 items-center gap-x-8">
              <div className="flex flex-col gap-y-1">
                <input
                  type="text"
                  className="p-3 w-[90vw] md:w-[100%] lg:p-3 rounded-lg border border-purple-50"
                />
                <span className="text-grey-100 text-sm font-bold">
                  Total Spent on Transaction
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <input
                  type="text"
                  className="p-3 w-[90vw] md:w-[100%] lg:p-3 rounded-lg border border-purple-50"
                />
                <span className="text-grey-100 text-sm font-bold">
                  Cost of stock
                </span>
              </div>
            </div>
            <div className="ml-22 mt-6">
              <p className="p-3 rounded-lg border border-purple-50 shadow-lg font-redHatDisplay w-[90vw] md:w-fit">
                0
              </p>
              <span className="text-grey-100 text-sm font-bold">
                Units Recieved
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
