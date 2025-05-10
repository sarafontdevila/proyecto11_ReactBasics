import { useState, useEffect } from "react"
import "./Characters.css"
import Loading from "../../components/Loading/Loading"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import ButtonPage from "../../components/ButtonPage/ButtonPage"
import { Link } from "react-router-dom"

const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage]= useState(1)

  /*useEffect(()=> {
    setLoading(true)
    fetch(`https://thronesapi.com/api/v2/Characters?page=${page}&limit=10`)
    .then((res) => res.json())
    .then((res) => {
      setCharacters(res)
      setLoading(false)
    })
  },[page])*/

  useEffect(()=> {
    setLoading(true)
    const apiUrl = `https://thronesapi.com/api/v2/Characters?page=${page}&limit=5`
    console.log ("llamando a la API:", apiUrl)
    fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      setCharacters(res)
      setLoading(false)
    })
  },[page])


  return (
    
  <main id= "characters">
    {loading && <Loading/>} 
    {characters.map((character) => (
      <Link key={character.id} to ={`/character/${character.id}`} className="character_link">
        <CharacterCard character={character} />
        </Link>
        
      ))}
      <ButtonPage page={page} setPage={setPage}/>
  </main>
  
  )
}

export default Characters
