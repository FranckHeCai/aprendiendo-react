import { Team } from "../types"

const TeamCard = ({ team }: {team: Team}) => {
  return(
    <div className="bg-white rounded-lg hover:outline-2 hover:outline-slate-600 cursor-pointer p-3 flex flex-col justify-center items-center">
      <picture>
        <img src={`/img-futbol/${team.foto_escudo}`} alt="" />
      </picture>
      <h2 className="text-center font-bold text-lg">{team.nombre}</h2>
      <h3 className="text-sm">Fundado: {team.fundacion}</h3>
      <h4>Presidente: {team.presidente}</h4>
    </div>
  )
}

export default TeamCard