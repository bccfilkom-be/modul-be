# Struct
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-struct.html  
> Referensi (Video):  
> https://youtu.be/4A6-RUX94e4  

- Struct adalah sebuah **template data** yang digunakan untuk **menggabungkan nol atau lebih tipe data lainnya** dalam satu kesatuan
- Data di struct disimpan dalam field, sederhananya **struct merupakan kumpulan field**

## Cara Membuat Struct
contoh struct bernama mahasiswa
```go
type mahasiswa struct {
    nama 	string
    nim		string
    gender	bool
}
```
Struct tidak bisa langsung digunakan karena struct merupakan sebuah ‘template’, kita bisa membuat sebuah object dari struct yang ada. Contoh:
```go
// membuat sebuah object dari struct mahasiswa
var joni mahasiswa
joni.nama = "joni seubagyo"
joni.nim = "abcdefghijklmn"
joni.gender = true

// cara lain:
juan := mahasiswa{
    nama : "juan",
    nim : "nmlkjihgfedcba",
    gender : true,
}

/*
    cara mengakses data field tinggal menggunakan 
    tanda titik diikuti dengan nama fieldnya
*/
```