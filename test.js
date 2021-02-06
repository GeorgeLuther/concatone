const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}

let motifs = [
    [[2, 3, 4],[2,4,5]],
    [[7, 6, 5, 8, 7, 6, 5],[7,8,10]],
]
