const AgentCard = ({agent}) => {
  return (
    <div className='border-2 border-red-400 rounded-lg p-2 md:p-5 bg-neutral-800' key={agent.uuid}>
        <h3 className='font-[VALORANT] text-red-400 text-lg'>{agent.displayName}</h3>
        <p className='text-neutral-300'>{agent.description}</p>
    </div>
  );
};

export default AgentCard;