const AgentCard = ({agent}) => {
  return (
    <div className='flex flex-col items-center gap-2 md:gap-5 border-2 border-neutral-700 hover:border-red-400 transition duration-300 rounded-lg p-2 md:p-5 bg-neutral-800' key={agent.uuid}>
        <img className="border-2 border-neutral-700 hover:border-red-400/50 transition duration-300 rounded-lg" src={agent.displayIcon} alt={`${agent.displayName} portrait`} />
        <div className="flex flex-col gap-1">
          <h3 className='font-[VALORANT] text-red-400 text-md sm:text-lg md:text-xl lg:text-2xl'>{agent.displayName}</h3>
          <img className="w-8 m-auto" src={agent.role?.displayIcon} alt="role icon" />
        </div>
    </div>
  );
};

export default AgentCard;