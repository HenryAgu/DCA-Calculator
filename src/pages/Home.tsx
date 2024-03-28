const Home = () => {
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
        <div className="mt-10 flex items-baseline gap-x-8">
          <div className="flex items-center gap-x-2 font-redHatDisplay text-grey-100 font-semibold lg:text-2xl">
            <p>1.</p>
            <p>Transaction 01</p>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex flex-col gap-y-1">
              <input
                type="text"
                className="p-3 rounded-lg border border-purple-50"
              />
              <span className="text-grey-100 text-sm font-bold">
                Total Spent on Transaction
              </span>
            </div>
            <div className="flex flex-col gap-y-1">
              <input
                type="text"
                className="p-3 rounded-lg border border-purple-50"
              />
              <span className="text-grey-100 text-sm font-bold">
                Cost of stock
              </span>
            </div>
          </div>
          <div className="ml-22">
            <p className="p-3 rounded-lg border border-purple-50 shadow-lg">
              0
            </p>
            <span className="text-grey-100 text-sm font-bold">
              Units Recieved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
