// Provides Array of Objects


const fishCollection = [
    {
        name: "Bobby",
        species: "GolfFish",
        length: 3,
        location: "Alabama",
        food: "Bugs",
        image: "images/gold-fish.jpg"

    },
    {
        name: "Joe",
        species: "CatFish",
        length: 5,
        location: "Texas",
        food: "Worms",
        image: "images/download.jpeg"

    },
    {
        name: "Dan",
        species: "Carp",
        length: 2,
        location: "Florida",
        food: "Clams",
        image: "images/carp.jpeg"

    },
    {
        name: "Dan",
        species: "Carp",
        length: 2,
        location: "Florida",
        food: "Clams",
        image: "images/ocean.jpg"

    },
    {
        name: "Becky",
        species: "TigerFish",
        length: 9,
        location: "California",
        food: "Veggies",
        image: "https://cf.ltkcdn.net/small-pets/images/std/246148-1600x1177-GettyImages-1050490488.jpg"

    },
    {
        name: "Becky",
        species: "TigerFish",
        length: 15,
        location: "California",
        food: "Veggies",
        image: "https://cf.ltkcdn.net/small-pets/images/std/246148-1600x1177-GettyImages-1050490488.jpg"

    },


]
export const useFish = () => {
    return fishCollection.slice()
}



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if(fish.length % 3 === 0) {
        holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishCollection) {
        if(fish.length % 5 === 0 && fish.length % 3 !== 0)
        soldiers.push(fish)
    }
    console.log(soldiers)
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishCollection) {
        if(fish.length % 3 !== 0 && fish.length % 5 !== 0)
        regularFish.push(fish)
    }
    return regularFish
}

