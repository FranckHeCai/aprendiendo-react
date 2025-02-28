import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../services/api";


const DeleteUpdate = () => {
  const { id } = useParams()
  const [patient, setPatient] = useState(null)
  useEffect(() => {
    getItemById(id)
    .then(data => setPatient(data))
  }, [])
  
  const formatDate = date =>{
    return date.split("/").reverse().join("-")
  }

  return (
    <div className="flex flex-col gap-5 p-3 max-w-xl mx-auto items-center">
      <h2 className="text-2xl font-medium">Patient Data</h2>
    {!patient && <p>Loading...</p> }
    {patient && (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <input value={patient.name} type="text" />
          <input value={patient.surname} type="text" />
          <input value={formatDate(patient.date)} type="date" />
        </div>
        <div className="flex gap-2">
          <button className="bg-sky-300 active:bg-sky-400 py-2 px-4 rounded-md mt-2">Save changes</button>
          <button className="bg-red-300 active:bg-red-400 py-2 px-4 rounded-md mt-2">Delete</button>
        </div>
      </div>
    )}
    </div>
  );
};

export default DeleteUpdate;