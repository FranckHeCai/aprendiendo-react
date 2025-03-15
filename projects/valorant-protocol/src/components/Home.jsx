import useFilter from "../hooks/useFilter";
import AgentsList from "./Agents/AgentsList";
import Filter from "./Filter";
import Header from "./Header";

const Home = () => {
    const {filterAgents} = useFilter()
    const filteredAgents = filterAgents()
    return (
        <div className='flex flex-col gap-5'>
            <Filter />
            <AgentsList agents={filteredAgents} />
        </div>
    );
};

export default Home;