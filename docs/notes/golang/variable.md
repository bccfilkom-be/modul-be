# Variable

> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-variabel.html  
> Referensi (Video):  
> https://youtu.be/vbTDLECgpZU  > 
> Referensi (Buku):  
> Clean Code - Martin Fowler  > 

## Pengertian

- Variable adalah tempat untuk menyimpan data
- Di Go-Lang Variable hanya bisa menyimpan tipe data yang sama, jika kita ingin menyimpan data yang berbeda-beda jenis, kita harus membuat beberapa variable

Sebelum membaca bab ini, keep in mind kalau golang mempunyai fitur yg memaksa kita menggunakan semua variable dan juga semua package yang di-import (cth package: fmt)
Kalau ada salah 1 yang engga dipakai bakal muncul error. Jadi jangan bingung :)

## Deklarasi Variable

1. Deklarasi variable dengan var
    
    ```go
        // deklarasi terus assign sebuah nilai ke variable
        var myString string
        myString = "contoh1"
        fmt.Println(myString)
        // Skema: var <namaVariable> <tipeData>
    
        
        // deklarasi sekaligus assign
        var myString2 string = "contoh2"
        fmt.Println(myString2)
        //Skema: var <namaVariable> <tipeData> = <nilai> 
    
        
        // tanpa tipe data, lebih ringkas sedikit
        var myString3 = "contoh3"
        fmt.Println(myString3)
    ```
    
2. Deklarasi variable tanpa var
    
    Agar tidak perlu menggunakan kata kunci `var`, kita perlu menggunakan kata kunci := saat menginisialisasikan data pada variable tersebut
    
    Metode deklarasi ini tipe data-nya ditentukan oleh tipe data nilainya.
    
    ```go
        // jenis jenis tipe data akan dipelajari pada bab selanjutnya
        
        // tipe data string
        myVariable := "APAAN TUH"
        fmt.Println(myVariable)
        
        // tipe data int
        myVariable2 := 4
        fmt.Println(myVariable2)
    ```
    
3. Deklarasi multiple variable
    
    ```go
        var pertama, kedua, ketiga string = "satu", "dua", "tiga"
        fmt.Printf("%s %s %s", kedua, pertama, ketiga)
        
        // baca cara menggunakan Printf disini (opsional)
        // https://www.geeksforgeeks.org/fmt-printf-function-in-golang-with-examples/
    ```
    
    ```go
        var (
            pertama1 = "satu1" 
            kedua2 = "dua2"
            ketiga3 = "tiga3"
        ) 
        fmt.Printf("%s %s %s", kedua2, pertama1, ketiga3)
    ```
    
4. Underscore _ (blank identifier)
    
    Misalnya nih, ada variable yang kamu deklarasi tapi ngga bakal dipakai
    Kan bakal muncul error tuh, workaround-nya ada 2:
    
    1. **Comment**
        
        ![Error](/assets/variable_error.png)
        
        ![Comment Workaround](/assets/variable_error_comment.png)
        
    2. **Underscore**
        
        ![Error](/assets/variable_error.png)
        
        ![Underscore Workaround](/assets/variable_error_underscore.png)