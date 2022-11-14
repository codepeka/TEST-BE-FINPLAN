function pencarian(data) {
    let input = "Berikut adalah kisah sang gajah. Sang gajah sering dibela oleh serigala ketika harimau mendekati gajah.".toLowerCase()
    
    let result = '';

    for (let j = 0; j < data.length; j++) {
        let tempInput = input
        for (let i = 0; i < input.length; i++) {
            let cari = tempInput.indexOf(data[j].toLowerCase())
            if (cari > 1) {
                result += (result === '') ? data[j] : ' - ' +  data[j] 
                tempInput = tempInput.substring(cari + 1, input.length)
            } else {
                i = input.length
            }
        }
    }

    return result
}

console.log(pencarian(['sang gajah', 'serigala', 'harimau']))