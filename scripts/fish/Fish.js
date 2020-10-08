/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fishObj) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="${fishObj.image}" /></div>
            <div class="fish__name">Name:${fishObj.name}</div>
            <div class="fish__species">Species:${fishObj.species}</div>
            <div class="fish__length">Length:${fishObj.length}</div>
            <div class="fish__location">Location:${fishObj.location}</div>
            <div class="fish__diet">Diet:${fishObj.food}</div>
        </section>
    `
}  