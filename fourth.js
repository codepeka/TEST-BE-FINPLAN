function cacahTerkecil (bil) {
    let bilSort = bubbleSort(bil)
    let id = bilSort[0]
    for (let i = 0; i < bil.length; i++) {
        if (bilSort[i] !== id) return id;
        id++
    }
}

function bubbleSort(items) {
    let length = items.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < (length - i - 1); j++) {
            if (items[j] > items[j+1]) {
                let temp = items[j]
                items[j] = items[j+1]
                items[j+1] = temp;
            }
        }
    }
    return items
}

console.log(cacahTerkecil([5, 2, 8, 4, 3, 10]))
console.log(cacahTerkecil([2, 3, 4, 6]))
console.log(cacahTerkecil([8, 6, 7, 12]))