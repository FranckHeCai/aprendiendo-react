import { useEffect, useState } from "react";
import { fetchTeam } from "../api/fetchTeams";
import { useTeamStore } from "../store/teamStore";

export default function useTeam(teamId:number) {
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)
  const { teams, setTeams } = useTeamStore(state => state)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTeams = await fetchTeam(teamId)
        setLoading(true)
      } catch (error) {
        console.error("Error fetching teams: ", error)
        setError(error instanceof Error ? error : new Error("Unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return {teams, loading, error}
}