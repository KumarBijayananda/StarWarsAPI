export default async function getAllStarships(page) {
    try {
        const url = `https://swapi.dev/api/starships/?page=${page}`;
        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch (error) {
        console.error(error)
    }

}
