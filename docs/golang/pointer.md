# Pointer
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-pointer.html  
> Referensi (Video): ← pelajari struct dulu  
> https://youtu.be/uhF5MVmYwA4  
> https://youtu.be/13skDy7BQyU  

| Operator Pointer | Keterangan                            | Contoh                                       |
| ---------------- | ------------------------------------- | -------------------------------------------- |
| &                | Returns ‘alamat’ dari sebuah variable | &a; provides actual address of the variable. |
| *                | ‘Pointer’ ke sebuah variable          | *a; provides pointer to a variable.          |

- Secara default, passing variable dalam golang itu dilakukan secara pass by value (duplikasi)
  ```go
  func main() {
	myInt := 6437
	// print address variable myInt pada func main
	fmt.Printf("(func main) myInt: %d, address: %v\n", myInt, &myInt)
	
	// print address variable myInt yang di pass ke func printAddress
	printAddress(myInt)
	
	// kedua alamat tersebut akan terbukti berbeda (pass by value)
  }
  
  func printAddress(x int){
    fmt.Printf("(func printAddress) myInt: %d, address: %v\n", x, &x)
  }
  ```
  ![nilainya sama, tapi addressnya berbeda](/assets/pointer_output.png)
- Pointer adalah kemampuan membuat reference ke lokasi data di memory yang sama, tanpa menduplikasi data yang sudah ada (pass by reference)
  ```go
  func main() {
	myInt := 6437
	// print address variable myInt pada func main
	fmt.Printf("(func main) myInt: %d, address: %v\n", myInt, &myInt)
	
	// print address (pointer) variable myInt yang di pass ke func printAddress
	printAddress(&myInt)
	
	// kedua alamat tersebut akan terbukti SAMA (pass by reference)
  }

  func printAddress(x *int){
	fmt.Printf("(func printAddress) myInt: %d, address: %v\n", *x, x)
  }
  ```
  ![address terlihat sama ketika melakukan pass by reference](/assets/pointer_output_highlight.png)


```go
// cara mendeklarasikan pointer (tipe datanya terserah)
var a *int // variable a merupakan pointer integer

var angka = 2
// kita bisa menggunakan '&' utk mendapatkan alamat sebuah variable
a = &angka // assign alamat dari angka ke variable a

// karena a merupakan sebuah pointer, ketika di print hasilnya akan mengeluarkan alamat
fmt.Println(a)

// untuk mendapatkan nilai ASLI dari sebuah pointer, dapat menggunakan '*'
fmt.Println(*a)

/* 
    note: 
    tipe data pointer juga dapat digunakan sebagai parameter
    seperti yang dicontohkan pada contoh sebelumnya. 
*/
```