import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {

    const [character, setCharacter] = useState([])

    const getInformation = () => {
        axios.get('https://66f16df8415379191550df7c.mockapi.io/data')
        .then(function (response) {
            // handle success
            setCharacter(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    const del = (id) => {
        // confirm("Are you Sure");
        axios.delete(`https://66f16df8415379191550df7c.mockapi.io/data/${id}`)
        .then(() => {
            setCharacter(character.filter(character => character.id !== id))
        })
    }

    useEffect(() => {
        getInformation();
    }, [])

  return (
    <>
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="join">
            <div>
                <div>
                <input className="input input-bordered join-item" placeholder="Search" />
                </div>
            </div>

            <div className="indicator">
                <button className="btn join-item">Search</button>
            </div>
            </div>
            <Link to={"/add"}>
                <div className="w-fit bg-blue-500 p-4 rounded-full my-3">
                    <h2 className="text-xl font-bold text-white">Add New Character +</h2>
                </div>
            </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:items-start md:flex-wrap my-10">
            {character.map((element, index) => {
                 return (
                    <div key={index}>
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                src={element.image}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{element.name}</h2>
                                <div>
                                    <p className="text-2xl font-bold text-gray-500">status: <span className="text-black">{element.status}</span></p>
                                    <p className="text-2xl font-bold text-gray-500">species: <span className="text-black">{element.species}</span></p>
                                    <p className="text-2xl font-bold text-gray-500">gender: <span className="text-black">{element.gender}</span></p>
                                    <p className="text-2xl font-bold text-gray-500">hair: <span className="text-black">{element.hair}</span></p>
                                    <p className="text-2xl font-bold text-gray-500">origin: <span className="text-black">{element.origin}</span></p>
                                </div>
                                <div className="card-actions justify-end">
                                <button onClick={() => del[element.id]} className="btn btn-primary w-full text-2xl">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}