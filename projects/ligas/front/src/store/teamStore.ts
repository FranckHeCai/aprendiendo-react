import { create } from "zustand"
import { Team } from "../types"

interface TeamStore {
  teams : Team[] | null,
  setTeams : (teams:Team[]) => void
}

export const useTeamStore = create<TeamStore>((set)=>({
  teams : null,
  setTeams : (teams) => set({teams})
}))