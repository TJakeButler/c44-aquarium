import { useLocation } from './LocationDataProvider.js'
import { Location } from './Locations.js'


export const LocationsList = () => {

const ContentElement = document.querySelector(".locations")

const locations = useLocation()

let locationHTML = ""
for (const local of locations) {
    locationHTML += Location(local)
}

ContentElement.innerHTML += `
<h3>Locations Section </h3>
${locationHTML}
`
}