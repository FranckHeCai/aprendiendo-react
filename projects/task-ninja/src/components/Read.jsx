import { useNavigate } from "react-router-dom";

const Read = ( {patients} ) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-5 sm:border-2 sm:border-sky-300 sm:rounded-md p-3 max-w-xl mx-auto items-center">
      <h1 className='text-2xl font-bold'>Home</h1>
      <div className="flex flex-col w-full">
        {
        patients.map(patient =>(
          <div className="flex w-full items-center justify-between border-b-2 border-sky-200 py-2" key={patient.id}>
            <div className="flex gap-1.5">
              <p className="">{patient.name}</p>
              <p>{patient.surname}</p>
              <p>{patient.date}</p>
            </div>
            <div>
              <button onClick={()=>{navigate(`/patient/${patient.id}`)}} className="py-1 px-3 bg-blue-500 cursor-pointer rounded-md text-white">Details</button>
            </div>
          </div>
        ))
      }
      </div>
      
    </div>
  );
};

export default Read;