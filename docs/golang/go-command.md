# Go Command

> Referensi (Text):
https://dasarpemrogramangolang.novalagung.com/A-go-command.html

- **go mod init**
    Digunakan untuk menginisialisassi project go (go modules)
    Skema:
    `go mod init <nama-project>`
- **go run**
    Command yang digunakan untuk mengeksekusi sebuah file berektensi .go
    *command ini hanya bisa digunakan pada file yang terletak di package main!*
    Contoh:
    `go run main.go`
    `go run main.go routes.go`
- **go build**
    Command ini digunakan untuk mengkompilasi file program
    Command ini menghasilkan file executable atau binary pada folder yang sedang aktif
    Untuk nama executable sendiri bisa diubah menggunakan flag -o
- **go get**
    Command ini digunakan untuk download package.
    Misalnya, ingin menggunakan https://github.com/gin-gonic/gin/
    Bisa kita download package tersebut dengan command:
    `go get https://github.com/gin-gonic/gin/`
    Untuk mendownload release yang terbaru, bisa menggunakan flag -u
    Contoh
    `go get -u [github.com/gin-gonic/gin](http://github.com/gin-gonic/gin)`
- **go mod tidy**
    Command go mod tidy digunakan untuk memvalidasi dependensi. Jika ada dependensi yang belum ter-download, maka akan otomatis di-download.