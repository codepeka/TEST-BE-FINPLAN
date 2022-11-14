function pola(n) {
    if (n % 2 == 0) return 'Harus bilangan ganjil'
    
    let result = '';
    for (let i = 0; i < n; i++) {
        let text = ''
        for (let j = 0; j < n; j++) {
            if ((i > 0 && i < n-1) && (j > 0 && j < n-1))
                if ((n - 1 - i) > j || (n - 1 - i) < j) 
                    text += "O "
                else 
                    text += "X "
            else
                text += "X "
        }
        result += text + '\n'
    }
    return result
}

console.log(pola(5))
console.log(pola(3))
console.log(pola(7))
console.log(pola(2))