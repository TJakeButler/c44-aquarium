
// Where we combine Array of Objects and HTML with string Interpolation to be pluged into an HTML ELEMENT

import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"


export const FishList = () => {


    const contentElement = document.querySelector(".contentContainer__left")

    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fish">
    ${fishHTMLRepresentations}
    </div>
    </section>
    `
}



