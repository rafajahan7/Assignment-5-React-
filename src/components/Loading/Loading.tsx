

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">

      <div className="flex flex-col items-center gap-3">

        
        <span className="loading loading-spinner loading-md text-pink-500"></span>

        <p className="text-sm text-gray-400">
          Loading technologies...
        </p>

      </div>

    </div>
  );
};

export default Loading;