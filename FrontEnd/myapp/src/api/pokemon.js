export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokemons = await response.json()
    return pokemons
}
export const filter = async (name) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/filter?type_search='+name, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokemons = await response.json()
    return pokemons
}