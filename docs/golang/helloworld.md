# Hello World!
    
> Referensi (Text):
https://dasarpemrogramangolang.novalagung.com/A-hello-world.html
Referensi (Video): ← Code editornya bukan vscode
https://www.youtube.com/watch?v=sDHZbPfrNoM&list=PL-CtdCApEFH_t5_dtCQZgWJqWF45WRgZw&index=2
> 

**Percobaan Membuat Program Hello World**

1. Pertama buatlah sebuah project bernama hello-world (atau namanya bebas gapapa), 
kalau masih bingung cara buat sebuah project silahkan baca kembali bab **Inisiasi Project (Go Modules).**
2. lalu buat sebuah file dalam project direktori kamu dengan nama `main.go`

    ![New Main](/assets/hello_world_new_main.png)
    
3. Tuliskan code dibawah ini ke dalam file `main.go` (jangan copy paste pls)  
    
    ```go
    package main
    
    import "fmt"
    
    func main() {
        fmt.Println("Hello world")
    }
    ```
    
4. Jalankan command `go run main.go` dengan terminal pada direktori project kamu.
**kalau pakai vscode tinggal `ctrl+`` atau `⌃+`` (untuk mac) untuk buka terminal .*
1. berhasil :o 
    
    ![Berhasil](/assets/hello_world_success.png)
    
**Penjelasan**
- `package main`
    - Setiap file **WAJIB** memiliki package
    - Setiap project **harus ada minimal 1** file dengan **package main**
    - Skema:
    `package <nama-package>`
- `import "fmt"`
    - keyword `import` digunakan untuk mengimport package lain yang akan digunakan dalam project, pada kasus ini kita menggunakan package `fmt` yang digunakan untuk keperluan input/output (`fmt.Println("Hello world")`)
    - Skema:
      ```go
      import "<nama-package>"
      ```
      atau
      ```go
      import (
          "<nama-package1>"
          "<nama-package2>"
          //package lainnya...
      )
      ```

- `func main()`
    
    **Dalam sebuah proyek harus ada** file program yang di dalamnya berisi sebuah **fungsi** bernama **main**(). **Fungsi tersebut harus berada di file** yang **package**-nya bernama **main**.
    
    Fungsi/function main merupakan fungsi yang dipanggil pertama kali pada saat eksekusi program. 
    
    Skema penulisan function:
    ```go
    func <nama-function>{ 
        //kode program disini 
    }
    ```
    
- `fmt.Println()`
    
    **Fungsi fmt.Println**() **digunakan untuk memunculkan text ke layar (pada konteks ini, terminal atau CMD)**. Di program pertama yang telah kita buat, fungsi ini memunculkan tulisan Hello world.
    
    Fungsi fmt.Println() berada dalam package fmt, maka untuk menggunakannya perlu package tersebut untuk di-import terlebih dahulu.