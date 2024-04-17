# Loop
> Referensi (Text):  
> https://dasarpemrogramangolang.novalagung.com/A-perulangan.html  
> Referensi (Video):  
> https://youtu.be/6LYLd5UiQdo (for loops)  
> https://youtu.be/xFFM8V37uQg (Break & Continue)  

Loop merupakan proses perulangan blok kode selama kondisi yang disertakan bernilai true.
- For dengan statement
    skema:
    ```go
    for <init>;<kondisi>;<post-statement>{
    //blok kode
    }
    ```
    `<init>` → dieksekusi sekali saja sebelum loop dijalankan  
    `<kondisi>` → loop akan terus berjalan selama kondisi bernilai true  
    `<post-statement>` → akan dijalankan setiap blok kode loop selesai dieksekusi  
    ```go
	// contoh
	// loop ini akan berjalan selama i lebih kecil daripada 10
	// i = 0, i = 1, i = 2, i = 3, i = 4, i = 5, i = 6, i = 7, i = 8, i = 9
	// ketika i = 10, loop berhenti
	for i := 0; i < 10; i++ {
		fmt.Println("i =", i)
	}
    ```
- For dengan hanya kondisi
    ```go
	// loop akan berjalan sebanyak 5x
	counter := 1
	for counter <= 5 {
		fmt.Printf("ini loop ke-%d\n", counter)
		counter++
	}

	// infinite loop
	for {
		fmt.Println("hai", counter)
		counter++
	}
    ```
- Break & continue keyword
    break → menghentikan perulangan
    continue → memaksa maju ke perulangan berikutnya
    ```go
	awal := 0
	akhir := 10
	for {
		// jika angkanya genap, maka paksa ke loop selanjutnya
		if awal % 2 == 0 {
			awal++
			continue
		}
		
		fmt.Println("angka ganjil:", awal)
		awal++

		// jika awal == akhir, maka hentikan loop
		if awal == akhir {
			break
		}
	}
    ```
