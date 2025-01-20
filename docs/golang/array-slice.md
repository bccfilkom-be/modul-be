# Array & Slice
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-array.html (array)  
> https://dasarpemrogramangolang.novalagung.com/A-slice.html (slice)  
> Referensi (Video):  
> https://youtu.be/HK_lBa6iOiU (array)  
> https://youtu.be/ktrz4BCq-jM (slice)  

## Array
- Array adalah tipe data yang berisikan kumpulan data dengan tipe yang sama
Saat membuat array, kita perlu menentukan jumlah data yang bisa ditampung oleh Array tersebut  
- Daya tampung Array tidak bisa berubah setelah diinisiasi
- Indeks array dimulai dari 0.
### Cara Membuat Array
1. Deklarasi terus assign
    ```go
    var x [4]int
    x[0] = 1 // indeks 0 (indeks awal) array kita isi dengan nilai 1
    x[1] = 2 // dst...
    x[2] = 3
    x[3] = 4
    // maksimum nilai indeks x adalah 3, 
    // karena panjang x sebesar 4 (0,1,2,3)

    // print out
    fmt.Println(x)
    ```

    ![Array Output](/assets/array_output.png)

2. Sekaligus
    ```go
    var x = [4]int{1,2,3,4}
    fmt.Println(x) // [1 2 3 4]
    ```

## Mengakses Array/Slice & Loop
### Cara Mengakses Array
```go
var myArray = [4]string{"Hell", "ow", "orl", "d"}

// skema -> array[angka]
// contoh: mendapatkan nilai myArray indeks ke-0, lalu printout 
fmt.Println(myArray[0]) // Hell
```
### Loop for array/slice
```go
var myArray2 = [7]int{
        10,
        100,
        1,
        1000,
        10000,
        100000,
        1000000,
    }

    // panjang dari myArray2
    length := len(myArray2)
    fmt.Println("Panjang dari myArray2 adalah:", length)

    // LOOP BIASA
    fmt.Println("==Loop biasa==")
    for i := 0; i < length; i++{
        fmt.Printf("indeks ke-%d nilanya:%d\n", i, myArray2[i])
    }
    println()

    // FOR RANGE
    fmt.Println("==for range==")
    for indeks, nilai := range myArray2 {
        fmt.Printf("indeks ke-%d nilanya:%d\n", indeks, nilai)
    }

    // kedua loop diatas hasilnya sama
    // silahkan dicoba-coba :D
```
## Slice
- **Slice** adalah ***reference* elemen array** (potongan dari data Array)
- **Slice** mirip dengan Array, yang membedakan adalah **ukuran Slice dapat berubah**
- Perubahan data pada elemen **slice** akan berdampak pada slice lain yang memiliki alamat memori yang sama

### Cara Membuat Slice

Sama seperti array, tetapi tidak perlu mendefinisikan length-nya

```go
	var x = []int{1,1,1}
```
### Array and Slice in a nutshell
**untuk pengertian pointer, length, dan capacity bisa dilihat pada bagian slice built-in function*  
Contoh:
```go
// ARRAY
var myArr = [4]string{"apple", "banana", "dragon fruit", "tomato"}

// SLICE (mereference nilai myArr pada indeks ke 0 sampai indeks sebelum ke-2)
mySlice := myArr[0:2] // "apple" & "banana"

fmt.Println(mySlice)

// *penting
// karena slice merupakan reference dari array
// jika kita mengubah nilai slice, maka array akan berubah
fmt.Println("\nMerubah nilai slice ")
mySlice[0] = "apple baru"
fmt.Println("nilai myArr:", myArr)
// coba di run :)
```
### Membuat Slice dari Array
| Membuat Slice   | Keterangan                                                             |
| --------------- | ---------------------------------------------------------------------- |
| array[low:high] | Membuat slice dari array dimulai index low sampai index sebelum high   |
| array[low:]     | Membuat slide dari array dimulai index low sampai index akhir di array |
| array[:high]    | Membuat slice dari array dimulai index 0 sampai index sebelum high     |
| array[:]        | Membuat slice dari array dimulai index 0 sampai index akhir di array   |
### Slice built-in fuction
| Function                           | Keterangan                                                                                                                 |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| len(slice)                         | Menghitung jumlah elemen pada slice                                                                                        |
| cap(slice)                         | Untuk mendapat kapasitas                                                                                                   |
| append(slice, data)                | Membuat slice baru dengan menambah data ke posisi terakhir slice, jika kapasitas sudah penuh, maka akan membuat array baru |
| make([]TypeData, length, capacity) | Membuat slice baru                                                                                                         |
| copy(destination, source)          | Menyalin slice dari source ke destination                                                                                  |
#### len & cap
```go
// len()
angkaSlice := []int{1,2,3}
fmt.Println("angkaSlice: ", angkaSlice)
fmt.Println("len(angkaSlice):", len(angkaSlice)) // 3, karena ada 3 elemen
println()

// cap()
arr1 := [5]int{5,4,3,2,1}
fmt.Println("ARRAY:", arr1)

slice1 := arr1[1:] // 4 elemen, kapasitas: 4
fmt.Printf("[1:]\tSLICE: %v, len: %d, cap: %d\n", slice1, len(slice1), cap(slice1)) 

slice1 = arr1[2:3] // 1 elemen, kapasitas: 3
fmt.Printf("[2:3]\tSLICE: %v, len: %d, cap: %d\n", slice1, len(slice1), cap(slice1)) 

slice1 = arr1[4:] // 1 elemen, kapasitas: 1
fmt.Printf("[4:]\tSLICE: %v, len: %d, cap: %d\n", slice1, len(slice1), cap(slice1)) 

slice1 = arr1[:3] // 3 elemen, kapasitas: 5
fmt.Printf("[:3]\tSLICE: %v, len: %d, cap: %d\n", slice1, len(slice1), cap(slice1))
```
#### make, copy, & append
```go
// make([]TypeData, length, capacity) & copy(dst,src)
dst := make([]string, 3)
src := []string{"watermelon", "pinnaple", "apple", "orange"}
n := copy(dst, src)

fmt.Println(dst) // watermelon pinnaple apple
fmt.Println(src) // watermelon pinnaple apple orange
fmt.Println(n)   // 3

// percobaan append()
println("\n==========")
fmt.Println("percobaan append()")
arrayTest := [3]int{99, 999, 999}
fmt.Println("array:", arrayTest)

sliceTest := arrayTest[0:2] // len=2, cap=3
fmt.Printf("[0:2] SLICE:%v (len:%d, cap:%d)\n", sliceTest, len(sliceTest), cap(sliceTest))

fmt.Print("append nilai 111 SLICE pada indeks ke 2 ->")
sliceTest = append(sliceTest, 111) //slice masih mereference array (cap=3)
fmt.Println(sliceTest)
fmt.Println("nilai array terpengaruhi, bukti:")
fmt.Println("array: ", arrayTest)
println()

fmt.Print("append nilai 222 SLICE pada indeks ke 3 ->")
sliceTest = append(sliceTest, 222) //reference array baru (melewati capacity)
fmt.Println(sliceTest)
fmt.Print("mengubah nilai SLICE pada indeks ke 0 menjadi 69 ->")
sliceTest[0] = 69
fmt.Println(sliceTest)
fmt.Println("nilai array TIDAK terpengaruhi (melewati capacity), bukti:")
fmt.Println("array: ", arrayTest)
println("==========")
// selamat mencoba :D
```