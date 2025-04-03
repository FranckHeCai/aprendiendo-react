import axios from "axios";
import { Team } from "../types";

export default async function fetchTeams():Promise<Team[]> {
  try {
    const response = await axios.get<Team[]>("http://localhost:3000/equipos");
    return response.data; 
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error;
  }
}

export async function fetchTeam (teamId: number):Promise<Team> {
  try {
    const response = await axios.get<Team>(`http://localhost:3000/equipos/${teamId}`)
    return response.data
  } catch (error) {
    console.error("Error fetching team:", error);
    throw error;
  }
}