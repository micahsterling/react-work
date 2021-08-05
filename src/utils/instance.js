import axios from 'axios';

export const instance = axios.create({
    // baseURL: "https://pokeapi.glitch.me",
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export const getAllPokemon = async() => {
    return await instance.get('/')
        .then(res => {
            console.log("Res: ", res);
            return res.data;
        })
        .catch(err => {
            return err;
        })
}

export const getPokemon = async(url) => {
    return await axios.get(url)
        .then(res => {
            console.log("Res: ", res);
            return res.data;
        })
        .catch(err => {
            return err;
        })
}