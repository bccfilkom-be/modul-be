# Operator
> Referensi (Text):
> https://dasarpemrogramangolang.novalagung.com/A-operator.html
## Operator Aritmatika

| Operator | Keterangan                     |
| -------- | ------------------------------ |
| +        | penjumlahan                    |
| -        | pengurangan                    |
| *        | perkalian                      |
| /        | pembagian                      |
| %        | modulus / sisa hasil pembagian |

```go
// Contoh Penggunaan

fmt.Println(2+3)	// 5
fmt.Println(2-1) 	// 1
fmt.Println(2*10) // 20
fmt.Println(10/2)	// 5
fmt.Println(5%3)	// 2

fmt.Println(2 * 9 + 9 / 2) // 22
```
## Operator Perbandingan

| Operator | Keterangan              |
| -------- | ----------------------- |
| >        | Lebih Dari              |
| <        | Kurang Dari             |
| >=       | Lebih Dari Sama Dengan  |
| <=       | Kurang Dari Sama Dengan |
| ==       | Sama Dengan             |
| !=       | Tidak Sama Dengan       |

```go
// Contoh Penggunaan

var x int
fmt.Println(x == 0)	// true, karena default value dari int adalah 0

fmt.Println(5 > 2)	// true, karena 5 lebih besar daripada 2
fmt.Println(5 != 5)	// false
```
## Operator Logika/Boolean

| Operator | Keterangan             |
| -------- | ---------------------- |
| &&       | dan (kiri dan kanan)   |
| \|\|     | Atau (kiri atau kanan) |
| !        | Kebalikan (negasi)     |

```go
// Contoh Penggunaan

// && DAN
fmt.Println(true && true) // hasilnya true
fmt.Println(true && false) // hasilnya false
fmt.Println(3 < 2 && 5 > 999) // hasilnya false
println()

// || ATAU
fmt.Println(true || true) // true
fmt.Println(true || false) // true
fmt.Println("abc" == "ab" || "123" == "q") // false
println()

fmt.Println(!false) //true
fmt.Println(!(3-2 == 1)) //false
```
## Operator Assignment

| Operator | Contoh | Sama Seperti |
| -------- | ------ | ------------ |
| +=       | x += 3 | x = x + 3    |
| -=       | x -= 3 | x = x - 3    |
| *=       | x *= 3 | x = x * 3    |
| /=       | x /= 3 | x = x / 3    |
| %=       | x %= 3 | x = x % 3    |

Referensi: [operator bitwise opsional](https://www.w3schools.com/go/go_assignment_operators.php)
