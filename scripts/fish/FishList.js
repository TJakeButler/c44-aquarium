
// Where we combine Array of Objects and HTML with string Interpolation to be pluged into an HTML ELEMENT

import { Fish } from "./Fish.js"
import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"


const buildFishContainerHTML = (arrayOfFish) => {
    
    // Generate all of the HTML for all of the fish


    let fishHTMLRepresentations = ""
    for (const fish of arrayOfFish) {

        /* Invoke the fish component function and pass the current fish object as an argument. Each, add the return value to the fishHTMLRepresntation variable with `+=` */


        fishHTMLRepresentations += Fish(fish)
    }
    return fishHTMLRepresentations
}



export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

    // Use a function either below and capture in a const
    const holyFish = mostHolyFish()
    const catchSoilder = soldierFish();
    const catchRegularFish = nonHolyFish();
    
    // Use the above function buildFishContainerHTML and give it an argument of afunction
    const soilderFishHTML = buildFishContainerHTML(catchSoilder)
    const holyFishHTML = buildFishContainerHTML(holyFish)
    const regularFishHTML = buildFishContainerHTML(catchRegularFish)
    

// Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fish">
    ${holyFishHTML}
    ${soilderFishHTML}
    ${regularFishHTML}
    </div>
    </section>
    `
}



