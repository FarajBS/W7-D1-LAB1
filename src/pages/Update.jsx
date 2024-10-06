import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Update() {

    const [img, setImg] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();
    const id = localStorage.getItem("id")


    const updCar = () => {
        axios.put(`https://66f16df8415379191550df7c.mockapi.io/data/${id}`, 
            {
                image: img,
                name: name
            })
        .then(() => {
            navigate("/home");
        })
        .catch(error => {
            console.log(error);
        });
    }


  return (
    <div>
        <div className=" flex flex-col justify-center items-center h-screen w-screen bg-slate-400">
            <input onChange={(e) => {setImg(e.target.value)}} className="input input-bordered join-item mb-5 w-full md:w-1/2" placeholder="The Image" />
            <input onChange={(e) => {setName(e.target.value)}} className="input input-bordered join-item mb-5 w-full md:w-1/2" placeholder="The Name" />

            <button onClick={updCar} className="btn join-item rounded-full mb-5 w-full md:w-1/2">Submite</button>
        </div>
    </div>
  )
};