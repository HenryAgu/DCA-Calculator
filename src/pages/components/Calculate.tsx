interface TransactionProps {
  totalSpent: string;
  totalUnit: string;
  averageCost: string;
  calculateTotal: () => void;
}

const Calculate: React.FC<TransactionProps> = ({
  totalSpent,
  totalUnit,
  averageCost,
  calculateTotal,
}) => {
  return (
    <div className="mt-20 md:pb-4">
      <button
        className="bg-primary font-mullish py-3 px-4 rounded-lg text-white"
        onClick={calculateTotal}
      >
        Calculate
      </button>
      <div className="flex flex-col md:flex-row md:items-center gap-x-8 font-redHatDisplay text-grey-100 font-semibold lg:text-2xl">
        <div className="ml-22 mt-6">
          <p className="p-4 px-8 text-sm rounded-lg border border-purple-50 shadow-lg font-redHatDisplay w-[90vw] w-full lg:w-[100%]">
            {averageCost}
          </p>
          <span className="text-grey-100 text-sm font-bold">
            Average Cost/Unit
          </span>
        </div>
        <div className="ml-22 mt-6">
          <p className="p-4 px-8 text-sm rounded-lg border border-purple-50 shadow-lg font-redHatDisplay w-[90vw] w-full lg:w-[100%]">
            {totalUnit}
          </p>
          <span className="text-grey-100 text-sm font-bold">
            Total Units Bought
          </span>
        </div>
        <div className="ml-22 mt-6">
          <p className="p-4 px-8 text-sm rounded-lg border border-purple-50 shadow-lg font-redHatDisplay w-[90vw] w-full lg:w-[100%]">
            {totalSpent}
          </p>
          <span className="text-grey-100 text-sm font-bold">Total Spent</span>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
