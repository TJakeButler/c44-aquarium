import { useTip } from './TipsDataProvider.js'
import { Tip } from './Tip.js'



export const TipList = () => {
    const contentElement = document.querySelector(".tipsList")

    const tips = useTip()
    let tipsHTMLRepresentation = ""

    for (const tip of tips) {
       tipsHTMLRepresentation +=  Tip(tip)
    }
    
    contentElement.innerHTML += `
        <h3>Tips Section </h3>
        <p>${tipsHTMLRepresentation}</p>
    
    `






}