# Fungsi
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-fungsi.html  
> https://dasarpemrogramangolang.novalagung.com/A-fungsi-multiple-return.html  
> https://dasarpemrogramangolang.novalagung.com/A-fungsi-variadic.html  
> https://dasarpemrogramangolang.novalagung.com/A-fungsi-closure.html  
> https://dasarpemrogramangolang.novalagung.com/A-fungsi-sebagai-parameter.html  

- Sebelumnya, kita telah mempelajari sebuah fungsi yang wajib dibuat pada sebuah program go, yaitu fungsi bernama main.
- Fungsi atau function adalah sebuah blok kode yang sengaja dibuat dalam program agar bisa digunakan berulang-ulang
- Skema:  
    `func <nama-function>(<parameter>) (<return-value>) { 
    //blok kode disini 
    }`  
    **parameter** dan **return-value** bersifat **opsional***
    ```go
    package main

    import "fmt"

    func main() {
        // memanggil function selamat pagi
        selamatPagi() 
        selamatPagi() 

        // function selamatPagi akan berjalan 2x
    }

    func selamatPagi(){
        fmt.Println("Selamat pagi!")
    }
    ```
- Terkadang, ketika membuat function kita membutuhkan data dari luar function tersebut. Hal tersebut bisa kita lakukan dengan function parameter
    ```go
    package main

    import "fmt"

    // function dengan 1 parameter
    func selamatPagi(nama string){
        fmt.Printf("Selamat pagi %s!\n", nama)
    }

    // function dengan 1 parameter lebih
    func sapa(nama string, waktu string){
        fmt.Printf("Selamat %s %s!\n", waktu, nama)
    }

    func main() {
        selamatPagi("bbabakz") // Selamat pagi bbabakz!
        sapa("John", "pagi") // Selamat pagi John!
    }
    ```
- Function bisa mengembalikan data (kita harus menuliskan tipe data kembalian dari function tersebut)
package main
    ```go
    package main

    import "fmt"

    // function dengan return type int
    func tambah(a int, b int) int {
        return a + b
    }

    func main() {
        hasil := tambah(1, 999)
        fmt.Println(hasil) // 1000
    }
    ```
- Go juga mendukung multipe return value, contoh:
    ```go
    package main

    import "fmt"

    // function dengan multiple return value
    func getFullName() (string, string) {
        return "Rie", "Takahashi"
    }

    func main() {
        _, lName := getFullName()
        fmt.Printf("Halo %s-san\n", lName) // Halo Takahashi-san
    }
    ```
## Lainnya
### Variadic Function
- Go mengadopsi konsep **variadic function** atau pembuatan fungsi dengan **parameter sejenis yang tak terbatas**
- Penulisannya mirip seperti parameter biasa, hanya tinggal **ditambahkan** tanda **titik 3 kali** (…) setelah variable (**pas sebelum tipe data**)
- **Parameter variadic memiliki sifat yang mirip dengan slice**. Nilai dari parameter-parameter yang disisipkan bertipe data sama, dan ditampung oleh sebuah variabel saja. Cara pengaksesan tiap datanya juga sama, dengan menggunakan index
```go
package main

import "fmt"

// contoh parameter variadic, bisa diakses sama seperti slice
func haloVariadic(names ...string){
	for _, name := range names {
		fmt.Printf("Halo %s!\n", name)
	}
}

// parameter variadic bisa dikombinasikan dengan parameter biasa juga
// asalkan parameter variadic diletakkan di akhir
func sapa(waktu string, names ...string){
	for _, name := range names {
		fmt.Printf("Selamat %s %s!\n", waktu, name)
	}
}

func main() {
	// parameter bisa dimasukkan sebanyak mungkin
	haloVariadic("1", "2", "3", "4") 

	sapa("pagi", "dunia", "akhirat") 

	
	friends := []string{"Fizi", "Ehsan", "Ijat", "Mei mei"}
	// jika ingin memasukkan sebuah slice sebagai parameter variadic,
	// bisa dilakukan sebagai berikut: (ditambahkan ... diakhir)
	haloVariadic(friends...)
	sapa("siang", friends...)
}
```
### Closure Function
Closure function merupakan fungsi yang ada di dalam variable.
```go
func main() {
	var helloWorld = func(){
		fmt.Println("Hello World!")
	}

	helloWorld()

	//*note: func closure juga bisa digunakan sbg return type
}
```
### Function Sebagai Parameter
https://dasarpemrogramangolang.novalagung.com/A-fungsi-sebagai-parameter.html