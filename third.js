function validate(pass) {
    let text = pass.split('').filter(el => (isNaN(+el)))

    if (pass.length < 8) {
        return 'Kata sandi minimal 8 karakter';
    } else if (pass.length > 32) {
        return 'Kata sandi maximal 32 karakter';
    } else if (!isNaN(+pass[0])) {
        return 'Karakter awal tidak boleh angka';
    } else if (!pass.split('').find(el => !isNaN(+el))) {
        return 'Harus memiliki angka'
    } else if (!(text.find(el => (el == el.toLowerCase())) && text.find(el => (el == el.toUpperCase())))) {
        return 'Harus memiliki huruf kapital dan huruf kecil'
    } else {
        return 'Kata sandi valid'
    }
}

console.log(validate('5andiwara'))
console.log(validate('sandiwar4'))
console.log(validate('Sandiwar4'))
