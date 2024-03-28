interface TransactionProps {
    transaction: number,
}
const Transaction:React.FC<TransactionProps> = ({transaction}) => {
  return (
    <>
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
          <p className="p-3 rounded-lg border border-purple-50 shadow-lg font-redHatDisplay w-[90vw] w-fit lg:w-[100%]">
            0
          </p>
          <span className="text-grey-100 text-sm font-bold">
            Units Recieved
          </span>
        </div>
      </div>
    </>
  );
};

export default Transaction;