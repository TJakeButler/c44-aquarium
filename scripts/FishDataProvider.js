/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans"
    }

    // You already have this code. Don't add this
// const fishCollection = [...]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}