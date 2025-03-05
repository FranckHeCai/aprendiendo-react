const fetchAgents = async () =>{
    const res = await fetch("https://valorant-api.com/v1/agents")
    const data = await res.json()
    return data.data
}

export default fetchAgents