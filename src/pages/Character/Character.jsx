import { useParams } from "react-router-dom";
import "./Character.css"
import { useEffect, useState } from "react";
import Background from "../../components/Background/Background";

const Character = () => {

  const { id } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
    .then((res) => res.json())
    .then((res) => setCharacter(res))
  },[id])
  return (
   
      <div className="character">
      <h2>{character.fullName}</h2>
      <div>
      <img src={character.imageUrl} alt={character.fullName} />
      </div>
      <p>{character.title}</p>
      <p>{character.family}</p>
      </div>
    
  )
}

export default Character