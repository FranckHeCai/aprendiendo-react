const fetchAgents = async (query = '') =>{
    const res = await fetch(`https://valorant-api.com/v1/agents/${query}`)
    const data = await res.json()
    console.log(data.data)
    return data.data
}

export default fetchAgents