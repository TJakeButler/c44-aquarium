
const fishCollection = [
    {
        name: "Bobby",
        species: "GolfFish",
        length: 3,
        location: "Alabama",
        food: "Bugs",
        image: "https://cf.ltkcdn.net/small-pets/images/std/246148-1600x1177-GettyImages-1050490488.jpg"

    }, 
    {
        name: "Joe",
        species: "CatFish",
        length: 5,
        location: "Texas",
        food: "Worms",
        image: "https://cf.ltkcdn.net/small-pets/images/std/246148-1600x1177-GettyImages-1050490488.jpg"

    }, 
    {
        name: "Dan",
        species: "Carp",
        length: 2,
        location: "Florida",
        food: "Clams",
        image: "https://cf.ltkcdn.net/small-pets/images/std/246148-1600x1177-GettyImages-1050490488.jpg"

    }, 
   
    
]
    export const useFish = () => {
        return fishCollection.slice()
    }