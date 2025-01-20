# Nil dan Zero Value
## Nil
**nil** merupakan sebuah nilai yang berarti nilai *kosong*. **nil** tidak bisa digunakan pada tipe data string, bool, desimal dan non-desimal. **nil** bisa di assign pada variable bertipe:
- pointer
- tipe data fungsi
- slice
- map
- channel
- interface kosong atau any (yang merupakan alias dari interface{})

Contoh:
```go
// variable dengan tipe data map (map dipelajari pada bab lain)
var myMap map[string]string

// mengecek apakah myMap bernilai nil (operator dipelajari bab selanjutnya)
fmt.Println(myMap == nil) // true
```
## Zero Value
**zero value** merupakan sebuah nilai default (meskipun variabel dideklarasikan dengan tanpa nilai awal, tetap akan ada nilai default-nya)
  - Zero value dari `string` adalah `""` (string kosong).
  - Zero value dari `bool` adalah `false`.
  - Zero value dari tipe numerik non-desimal adalah `0`.
  - Zero value dari tipe numerik desimal adalah `0.0`.