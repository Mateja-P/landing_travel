const Dots = ({ bgColor }) => {
  return (
    <div>
      <div className='flex mb-4'>
        <div className={`w-[8px] h-[8px] mr-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] ml-2 ${bgColor} rounded-full`}></div>
      </div>
      <div className='flex mb-4'>
        <div className={`w-[8px] h-[8px] mr-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] ml-2 ${bgColor} rounded-full`}></div>
      </div>
      <div className='flex mb-4'>
        <div className={`w-[8px] h-[8px] mr-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] ml-2 ${bgColor} rounded-full`}></div>
      </div>
      <div className='flex'>
        <div className={`w-[8px] h-[8px] mr-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] mx-2 ${bgColor} rounded-full`}></div>
        <div className={`w-[8px] h-[8px] ml-2 ${bgColor} rounded-full`}></div>
      </div>
    </div>
  );
};

export default Dots;
