# Map
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-map.html  
> Referensi (Video):  
> https://youtu.be/_4w2QxintH4  

- Map mirip seperti array/slice
    Pada array/slice kita menggunakan indeks(angka) untuk mengakses nilai.
    Sedangkan **Map** adalah tipe data lain yang **berisikan kumpulan data yang sama**, **namun kita bisa menentukan jenis tipe data index yang akan kita gunakan**
- **Jumlah data** yang kita masukkan ke dalam Map **boleh sebanyak-banyaknya**, asalkan kata kunci nya berbeda
- Sederhananya, **Map adalah tipe data kumpulan key-value**. Dimana key bersifat unik.
## Map Function
| Operasi                     | Keterangan                           |
| --------------------------- | ------------------------------------ |
| len(map)                    | Untuk mendapatkan jumlah data di map |
| map[key]                    | Mengambil data di map dengan key     |
| map[key] = value            | Mengubah data di map dengan key      |
| make(map[TypeKey]TypeValue) | Membuat map baru                     |
| delete(map, key)            | Menghapus data di map dengan key     |

## Cara Membuat Map
```go
// map dengan key string dan value string
myMap := map[string]string{}
myMap["satu"] = "nilai1"
myMap["dua"] = "nilai2"
myMap["tiga"] = "nilai3"
myMap["empat"] = "nilai4"

// cara mengakses nilai pada map tinggal menggunakan key-nya.
fmt.Printf("myMap[\"satu\"] : %s \n", myMap["satu"])


// Cara membuat map sekaligus assign
myMap2 := map[string]string{
    "name" : "Sakura Yamauchi",
    "gender" : "female",
    "status" : "deceased",
    "xyz" : "ini datanya salah tolong dihapus",
}
// cara mengubah nilai pada map
myMap["xyz"] = "data ini sudah diubah"
// cara menghapus data di map delete(map, key)
delete(myMap2, "xyz")

if myMap2["name"] == "Sakura Yamauchi" {
    if myMap2["status"] == "deceased" {
        fmt.Println("MENANGIS")
    } else {
        fmt.Println("Bahagia")
    }
}
```