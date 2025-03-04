import { useEffect, useState } from "react";
import { createItem } from "../services/api";

const Create = () => {
  const [patient, setPatient] = useState({name: "", surname:"", date: ""})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const date = new Date(e.target.date.value).toLocaleDateString('es-ES', { timeZone: 'Europe/Madrid' });
    const newPatient = {name: name, surname: surname, date: date };
    createItem(newPatient)
  }

  return (
    <div className="flex flex-col gap-5 p-3 max-w-xl mx-auto">
      <h1 className='text-2xl font-bold text-center'>Create</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="name">Name</label>
          <input className="border-2 border-blue-300 rounded" id="name" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="surname">Surname</label>
          <input className="border-2 border-blue-300 rounded" id="surname" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="date">Birthday</label>
          <input className="border-2 border-blue-300 rounded" id="date" type="date" />
        </div>
        <button className="bg-sky-200 active:bg-sky-400 py-2 rounded-md mt-2">Create</button>
      </form>
    </div>
  );
};

export default Create;