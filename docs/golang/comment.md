# Comment
Comment tidak akan mempengaruhi jalannya sebuah program (diabaikan ketika eksekusi program), biasa digunakan sebagai catatan.

1. Inline comment
```go
package main

import "fmt"

func main() {
    // baris kode ini akan menyetak "Hello world" ke dalam terminal.
    fmt.Println("Hello world")
    // ini adalah inline comment!
    // halo lagi!
}
```
2. Multiline comment
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello world")
    /*
        halo ini adalah multiline comment!
        halo lagi!
        123

    */
}
```

Comment dapat membantu programmer dalam memahami kode. Sebaiknya kita  menggunakan comment seefektif dan sesedikit mungkin, karena kode program kita tulis harus sudah mudah dipahami.

## Penggunaan Tepat
1. Menjelaskan informasi tambahan
```go
var dateString string // format: 20-02-2023
```
2. Menjelaskan maksud dari suatu perintah, blok kode, atau function
```go
func isEqual(map1, map2 map[int]string) {
    // for now, we just check the length of the map because map is unordered
    // and cannot be compared
    return len(map1) == len(map2)
}
```

## Penggunaan Kurang Tepat
1. Memberikan informasi yang tidak penting (i)
```go
// Get last day of the month based on given month number
func getLastDayOfTheMonth(monthNum int) {
```
2. Memberikan informasi yang seharusnya bisa disampaikan melalui penamaan variabel atau fungsi yang baik. 
```go
// Copy the array from a to b
func copyArray(a, b []int)
```
3. Menjelaskan yang tidak perlu dijelaskan
```go
if (totalPrice > 500_000) {
    discount := getDiscount(totalPrice);
    totalPrice -= discount
} else {
    // do nothing
}
```