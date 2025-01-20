# Tipe Data & Konstanta
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-tipe-data.html  
> https://dasarpemrogramangolang.novalagung.com/A-konstanta.html  
>
## Tipe Data
### Angka
1. **Non Desimal (Integer)**

 | Tipe Data | Minimum              | Maksimum             |
 | --------- | -------------------- | -------------------- |
 | int8      | -128                 | 127                  |
 | int16     | -32768               | 32767                |
 | int32     | -2147483648          | 2147483647           |
 | int64     | -9223372036854775808 | 9223372036854775807  |
 |           |                      |                      |
 | uint8     | 0                    | 255                  |
 | uint16    | 0                    | 65535                |
 | uint32    | 0                    | 4294967295           |
 | uint64    | 0                    | 18446744073709551615 |
        
Alias

| Tipe Data | Alias untuk    |
| --------- | -------------- |
| byte      | uint8          |
| rune      | int32          |
| int       | Minimal int32  |
| uint      | Minimal uint32 |

2. **Desimal (floating point)**

| Tipe Data  | Nilai Minimum                                                     | Nilai Maksimum |
| ---------- | ----------------------------------------------------------------- | -------------- |
| float32    | 1.18×10−38                                                        | 3.4×1038       |
| float64    | 2.23×10−308                                                       | 1.80×10308     |
| complex64  | complex numbers with float32 real and imaginary parts. (opsional) |                |
| complex128 | complex numbers with float64 real and imaginary parts. (opsional) |                |

### Boolean
Tipe data boolean (bool) hanya dapat menyimpan nilai true atau false
```go
var x bool = true
var y bool = false

fmt.Println(x)
fmt.Printf("%t", y)
```
### String
Tipe data kumpulan karakter, umumnya diapit oleh dua tanda quote(")
```go
x := "abc\tdefg"
fmt.Println(x)

// menggunakan backtick(`) juga bisa
y := `abc\tdefg`
fmt.Println(y)
```
```go
// Tips untuk tipe data string:
// 1. len() untuk mengecek panjang karakter sebuah string
myStr := "abc"
fmt.Println(len(myStr)) // 3

// 2. string[number] <- mengambil karakter yang telah ditentukan
fmt.Println(string(myStr[0])) // a
fmt.Println(string(myStr[1])) // b
fmt.Println(string(myStr[2])) // c

// 3. string[number:number] <- substring
fmt.Println(myStr[1:2]) // mulai indeks 1 (b) batasnya indeks 2(c) -> b
fmt.Println(myStr[0:2]) // mulai indeks 0 (a) batasnya indeks 2(c) -> ab
fmt.Println(myStr[0:]) // abc
// selamat mencoba :)
```
## Konstanta
Constant adalah variable yang nilainya tidak bisa diubah lagi setelah pertama kali diberi nilai
```go
const pi = 3.14159265359
fmt.Println("nilai π adalah", pi)

//kalau mau coba ngubah pasti error
pi = 2
```
