import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function AddPage() {

    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");


    const navigate = useNavigate();


    const addCar = () => {
        

        axios.post('https://66f16df8415379191550df7c.mockapi.io/data', {
            image: img,
            name: name,
            gender: gender,
            })
            .then(function () {
                // console.log(response);
                navigate("/home");
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    

    useEffect(() => {
        // AddCharacter();
    }, [])



  return (
    <div className=" flex flex-col justify-center items-center h-screen w-screen bg-slate-400">
        <input onChange={(e) => {setImg(e.target.value)}} className="input input-bordered join-item mb-5 w-full md:w-1/2" placeholder="The Image" />
        <input onChange={(e) => {setName(e.target.value)}} className="input input-bordered join-item mb-5 w-full md:w-1/2" placeholder="The Name" />
        <select onChange={(e) => {setGender(e.target.value)}} className="select select-bordered mb-5 w-full md:w-1/2">
            <option disabled selected>The Gender ?</option>
            <option>Male</option>
            <option>Female</option>
        </select>

        <button onClick={addCar} className="btn join-item rounded-full mb-5 w-full md:w-1/2">Submite</button>
    </div>
  )
}