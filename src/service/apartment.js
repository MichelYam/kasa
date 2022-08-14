
/**
 * extract data from json
 * @returns array
 */
export async function getAllApartement() {
    try {
        const res = await fetch('/data/data.json')
        const data = res.json()
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }

}
/**
 * get specific apartment from id
 * @param {id} id 
 * @returns 
 */
export async function getApartmentByID(id) {
    const data = await getAllApartement()
    const apartmentData = data.find((elem) => elem.id === id)
    if (apartmentData) {
        return { apartmentData };
    } else {
        return null;
    }
}