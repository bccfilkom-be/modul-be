# Percabangan/Conditional
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-seleksi-kondisi.html  
> Referensi (Video):  
> https://youtu.be/Y0ZjeA7iYic (if expression)  
> https://youtu.be/S8EQdhJJwnE (switch)  


Percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
## if-else
1. if
```go
nama := "Daffa Nabil"
if nama == "Daffa Nabil"{ //true, maka blok kode if dijalankan 
    fmt.Println("Halo", nama)
}
// *kalau kondisinya false, blok kode if tidak akan berjalan
```

2. if else
Blok if akan dijalankan ketika kondisi if bernilai true
Blok else akan dijalankan ketika kondisi if bernilai false
```go
nama := "Asep Setiawan"
authorized := "Daffa Nabil"

if nama == authorized{ 
    fmt.Println("Halo", nama)
} else {
    fmt.Println("kamu bukan", authorized)
}
// kamu bukan Daffa Nabil
```
​
3. else if
Untuk menyatakan beberapa kondisi, gunakan else if
```go
nama := "Ichijō Raku"

if nama == "Daffa Nabil"{ 
    fmt.Println("Halo Daffa Nabil")
} else if nama == "Subaygo"{
    fmt.Println("Halo Subaygo")
} else if nama == "Anjing" {
    fmt.Println("kamu manusia?")
} else if nama == "Junta Shiraishi" {
    fmt.Println("Aku iri padamu")
} else if nama == "Ichijou Raku" || nama == "Ichijō Raku" {
    fmt.Println("Kamu buta")
} else {
    fmt.Println("Siapa kamu?")
}

// Hasil program: Kamu buta
```
## switch
```go
myVar := 5

switch myVar {
case 1 :
    fmt.Println("satu")
case 2 : 
    fmt.Println("dua")
case 3 : 
    fmt.Println("tiga")
default : // jika tidak ada case yang sesuai, maka default dijalankan.
    fmt.Println("angka tidak dikenal")
}
// Hasil program: angka tidak dikenal
// silahkan dicoba coba :)
```