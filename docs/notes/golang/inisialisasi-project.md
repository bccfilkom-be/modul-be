# Inisiasi Project (Go Modules)

> Referensi (Text):
https://dasarpemrogramangolang.novalagung.com/A-setup-go-project-dengan-go-modules.html
> 

**Modules** digunakan untuk **menginisialisasi** sebuah **project**, **sekaligus melakukan manajemen terhadap 3rd party atau library lain yang dipergunakan**. (Go modules digunakan lewat CLI/*Command Line Interface*)

**Percobaan Inisiasi Project**

1. Buat folder baru sebagai direktori project yang akan dibuat, 
Command: (pada terminal/command prompt)
`mkdir projectsaya` 

2. lalu, pindah ke direktori tsb
`cd projectsaya`
3. Jalankan command ini untuk menginisiasi sebuah project Go bernama `projectsaya`
`go mod init projectsaya`

Horee! kamu berhasil menginisiasi project go pertamamu!

Untuk nama project, umumnya adalah disamakan dengan nama direktori, tapi bisa saja sebenarnya menggunakan nama yang lain.

Eksekusi perintah `go mod init <namaproject>` menghasilkan satu buah file baru bernama **go.mod**. File ini digunakan oleh Go toolchain untuk menandai bahwa folder di mana file tersebut berada adalah folder project. **Jadi jangan di hapus ya file tersebut**.