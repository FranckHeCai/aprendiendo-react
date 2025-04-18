const PopupScreen = ({children, setShowPop}) => {
  return (
    <div className="update fixed top-0 left-0 w-full h-screen bg-black/50 flex justify-center items-center">
        <div className='w-xs bg-white rounded-lg p-5 flex flex-col gap-2'>
        {children}
        <button className="py-1 px-3 bg-slate-500 active:bg-slate-400 cursor-pointer rounded-md text-white" onClick={()=>{setShowPop(false)}} >Cancel</button>
        </div>
    </div>
  );
};

export default PopupScreen;