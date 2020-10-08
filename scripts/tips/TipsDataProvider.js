
// This will be where I store my tips in an array

const tipsCollection = [
    {
    description: "Always keep the tank clean, feed him lots of bugs and be nice to him."
    },
    {
    description: "Keep the water warm and always sing their name."
    },
    {
    description: "Never feed him after midnight."
    }
    
]

export const useTip = () => {
    return tipsCollection.slice()
}