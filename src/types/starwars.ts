import { type APIStarWars } from "../types/api";

export const getPersonId = async ({id}) => {
    
}

export const  getStarWars = async () => {
    const people = await fetch("https://swapi.py4e.com/api/people", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});


const { results: launches } = (await people.json()) as APIStarWars;
return launches
}


// const buscarPersona = await fetch(`https://swapi.py4e.com/api/${}`, {});
// const { count: personas } = (await buscarPersona.json()) as APIStarWars;

