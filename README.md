# Dokumentasi Sistem Sekolah SDN 6 Surabaya

## Pengaturan Lingkungan Pengembangan Aplikasi

1. Unduh dan instal [Visual Studio Code](https://code.visualstudio.com/download).
2. Clone repositori ini ke folder di komputer Anda:

   ```bash
   git clone https://github.com/username/sistem-sekolah.git
   ```

3. Buka folder proyek di VS Code, dan buka terminal. Kemudian jalankan `npm install` untuk mengunduh semua dependensi yang dibutuhkan.
4. Konfigurasikan database Anda di file `config.json` di dalam folder `config` dengan pengaturan yang sesuai.
5. Jalankan aplikasi dengan perintah `npm start`.
6. Aplikasi siap digunakan di `http://localhost:3000`.

## Penjelasan

### A. [Visual Studio Code](https://code.visualstudio.com/)

Visual Studio Code (VS Code) adalah editor kode yang ringan dan canggih yang dikembangkan oleh Microsoft. VS Code banyak digunakan oleh pengembang untuk berbagai bahasa pemrograman dan mendukung beragam ekstensi untuk meningkatkan fungsionalitasnya.

1. **Penyuntingan Kode**  
   Mendukung berbagai bahasa pemrograman dengan fitur pewarnaan sintaks, pelengkapan kode otomatis, linting, dan debugging.

2. **Terminal Terintegrasi**  
   VS Code memiliki terminal bawaan yang memungkinkan Anda menjalankan perintah tanpa meninggalkan editor.

3. **Ekstensi**  
   Anda dapat menambahkan ekstensi untuk mendukung berbagai fitur tambahan seperti integrasi kontrol versi, dukungan bahasa tambahan, dan tema.

### B. [DBeaver](https://dbeaver.io/)

DBeaver adalah alat manajemen database universal yang mendukung berbagai sistem manajemen database seperti PostgreSQL, MySQL, SQLite, dan banyak lagi. DBeaver menyediakan antarmuka yang intuitif untuk mengelola dan mengatur database.

1. **Manajemen Database**  
   Memungkinkan pengelolaan database, pembuatan tabel, eksekusi query SQL, dan visualisasi data.

2. **Diagram ER**  
   Mendukung pembuatan diagram Entity-Relationship (ER) untuk desain skema database.

3. **Editor SQL**  
   Menyediakan editor SQL yang canggih dengan fitur pewarnaan sintaks, pelengkapan otomatis, dan format kode.

### C. [PostgreSQL](https://www.postgresql.org/)

PostgreSQL adalah sistem manajemen basis data relasional open-source yang terkenal dengan kinerjanya yang tinggi dan dukungannya terhadap berbagai fitur canggih. PostgreSQL sering digunakan untuk aplikasi yang membutuhkan skalabilitas dan keamanan yang tinggi.

```bash
npm install sequelize pg pg-hstore
```

1. **Open Source**  
   PostgreSQL tersedia secara gratis dan dapat dimodifikasi sesuai kebutuhan karena sifatnya yang open-source.

2. **Kinerja Tinggi**  
   Mendukung optimisasi query, caching, dan indexing yang canggih untuk meningkatkan performa aplikasi.

3. **Keamanan**  
   PostgreSQL mendukung fitur-fitur keamanan seperti autentikasi pengguna, kontrol akses tingkat baris (Row Level Security), dan enkripsi data.

### D. [Express JS](https://expressjs.com/)

Express.js adalah kerangka kerja web minimalis untuk Node.js yang menyediakan berbagai fitur untuk membangun aplikasi web dan API. Dengan Express.js, Anda dapat dengan mudah mengelola rute, middleware, dan menangani permintaan HTTP.

#### Middleware pada Express.js

Merupakan potongan kode yang dijalankan di antara permintaan (request) yang dikirim oleh pengguna dan respons (response) yang dikirim oleh server. Middleware bertindak sebagai penghubung atau "penengah" dalam alur kerja aplikasi web _(request, respond, nextFunction)_

1. **Application-level Middleware**  
   Middleware yang digunakan di tingkat aplikasi untuk menangani semua permintaan masuk.
   
   ```javascript
   app.use(bodyParser.json()); // app.js
   ```

2. **Router-level Middleware**  
   Middleware yang digunakan pada tingkat rute untuk menangani permintaan yang sesuai dengan rute tertentu.
   
   ```javascript
   router.post('/', validateMurid, createMurid); // muridRoutes.js
   ```

3. **Error-handling Middleware**  
   Middleware khusus untuk menangani kesalahan yang terjadi selama pemrosesan permintaan.
   
   ```javascript
   app.use((err, req, res, next) => {
       res.status(500).json({ error: 'Something went wrong!' });
   }); // app.js
   ```

4. **Built-in Middleware**  
   Middleware yang sudah disediakan oleh Express, seperti `express.json()` untuk parsing JSON dan `express.static()` untuk menyajikan file statis.
   
   ```javascript
   app.use(express.json()); // app.js
   ```

5. **Third-party Middleware**  
   Middleware yang diinstal dari npm dan digunakan untuk tugas tertentu, seperti `body-parser` untuk parsing badan permintaan.
   
   ```javascript
   const muridSchema = z.object({
       nama_murid: z.string().min(1),
       // ...
   }); // validate.js
   ```

### Middleware sebagai Penengah

Middleware dalam Express.js:

1. **Penerimaan Permintaan**: Middleware pertama-tama menerima permintaan dari pengguna.
2. **Pengolahan Permintaan**: Middleware melakukan tugas tertentu, seperti validasi atau otentikasi.
3. **Pengantaran ke Handler**: Setelah memproses permintaan, middleware menyerahkan kontrol ke fungsi berikutnya, biasanya rute akhir atau handler yang akan menghasilkan respons.

Dengan cara ini, middleware memastikan bahwa permintaan diproses dengan benar dan sesuai sebelum mencapai handler akhir, sama seperti pelayan yang memastikan makanan Anda sampai ke meja Anda dengan benar.

### E. [Sequelize (ORM)](https://sequelize.org/)

Sequelize adalah ORM (Object-Relational Mapping) untuk Node.js yang mendukung berbagai dialek SQL seperti PostgreSQL, MySQL, dan SQLite. Sequelize memungkinkan Anda berinteraksi dengan database menggunakan model JavaScript.

ORM singkatan dari Object-Relational Mapping. Ini adalah teknik yang memungkinkan Anda berinteraksi dengan database relasional (seperti MySQL, PostgreSQL, dll.) menggunakan objek dalam bahasa pemrograman Anda.

#### Fitur Utama Sequelize:

1. **Mapping Data dengan Model**  
   Sequelize memungkinkan Anda mendefinisikan model yang mewakili tabel dalam database. Setiap model dalam Sequelize terkait dengan satu tabel dalam database, dan setiap properti dalam model terkait dengan kolom dalam tabel tersebut.

   ```javascript
   const User = sequelize.define('User', {
       username: Sequelize.STRING,
       password: Sequelize.STRING,
   });
   ```

2. **Querying Data**  
   Dengan Sequelize, Anda bisa melakukan query terhadap database dengan menggunakan metode yang tersedia pada model, seperti `findAll`, `findOne`, `create`, `update`, `destroy`, dan sebagainya.

   ```javascript
   User.findAll().then(users => {
       console.log(users);
   });
   ```

3. **Associations**  
   Sequelize mendukung asosiasi antar model seperti `One-to-One`, `One-to-Many`, dan `Many-to-Many`, sehingga Anda bisa merepresentasikan relasi antara tabel dengan lebih mudah.

   ```javascript
   User.hasMany(Post);
   Post.belongsTo(User);
   ```

4. **Migrations**  
   Sequelize mendukung migrasi database, yang memungkinkan Anda untuk mengelola versi skema database dengan cara yang terkontrol.

5. **Data Validation & Hooks**  
   Anda dapat menambahkan validasi dan hooks (callback function) pada model untuk memproses data sebelum atau setelah operasi tertentu (seperti `beforeCreate`, `afterUpdate`, dll.).

### Keuntungan Menggunakan Sequelize:

- **Abstraksi SQL**: Anda dapat berinteraksi dengan database tanpa perlu menulis SQL murni, sehingga mengurangi kompleksitas dan meningkatkan produktivitas.
- **Portabilitas**: Menggunakan Sequelize membuat aplikasi Anda lebih portabel, karena ORM dapat digunakan dengan berbagai database tanpa harus menulis ulang query SQL.
- **Mudah Dipelajari**: Sequelize memiliki dokumentasi yang baik dan komunitas yang aktif, yang membuatnya mudah dipelajari dan diadopsi.

### F. [Zod Validation](https://zod.dev/)

Zod adalah library untuk deklarasi dan validasi skema yang berfokus pada TypeScript, tetapi dapat digunakan dengan JavaScript. Zod memungkinkan Anda memastikan bahwa data yang diterima aplikasi sesuai dengan skema yang diharapkan sebelum diproses.

Contoh penggunaan:
```javascript
import z from 'zod';

const muridSchema = z.object({
    nama_murid: z.string().min(1),
    kelamin: z.enum(['P', 'L']),
    umur: z.number().min(1),
});
```

### G. [Nodemon](https://nodemon.io/)

Nodemon adalah alat yang memantau perubahan dalam file di proyek Node.js Anda dan secara otomatis me-restart server saat perubahan terdeteksi, sehingga mempermudah pengembangan.

Instalasi:
```bash
npm install nodemon --save-dev
```

Konfigurasi di `package.json`:
```json
"scripts": {
    "start": "nodemon app.js"
}
```

### H. [Postman](https://www.postman.com/)

Postman adalah alat yang digunakan untuk menguji API. Dengan Postman, Anda dapat mengirim permintaan HTTP ke server dan memeriksa respons yang diberikan oleh server.

### I. [JSON Web Token (JWT)](https://jwt.io/)

**JSON Web Token (JWT)** adalah standar terbuka (RFC 7519) untuk representasi klaim aman antara dua pihak. JWT biasanya digunakan untuk autentikasi dan otorisasi, menyimpan informasi yang dapat dipertukarkan antara client dan server dengan cara yang aman dan terkompresi.

### J. [Pattern Repository](https://www.geeksforgeeks.org/repository-design-pattern/)
**Pattern Repository** adalah pola desain yang memisahkan logika akses data dari logika bisnis dalam sebuah aplikasi. Dalam konteks ini, pattern repository bertindak sebagai lapisan antara aplikasi dan data yang tersimpan dalam database. Tujuan adalah untuk memusatkan semua logika akses data di satu tempat, membuat kode lebih mudah dipelihara dan diubah tanpa memengaruhi bagian lain dari aplikasi.

Manfaat Pattern Repository:
1. **Pemisahan Tanggung Jawab**: Memisahkan logika bisnis dari logika akses data, yang mempermudah pengelolaan dan pemeliharaan kode.
2. **Konsistensi Akses Data**: Semua operasi data dilakukan melalui repository, yang membantu menjaga konsistensi dalam cara data diakses dan dimanipulasi.
3. **Pemeliharaan yang Lebih Mudah**: Karena logika akses data terkonsentrasi di satu tempat, perubahan dalam skema database atau query SQL dapat dilakukan dengan lebih mudah tanpa mengubah kode di berbagai tempat.

#### Struktur

 JWT:

1. **Header**: Mengandung informasi tentang algoritma dan tipe token.
2. **Payload**: Mengandung klaim atau data pengguna.
3. **Signature**: Mengamankan token dengan kombinasi dari header, payload, dan kunci rahasia.

```javascript
const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
```

JWT digunakan dalam otentikasi untuk menjaga sesi pengguna tetap aktif tanpa memerlukan penyimpanan sisi server. Hal ini memungkinkan aplikasi untuk memverifikasi identitas pengguna dan mengotorisasi akses mereka ke sumber daya tertentu.

## Struktur Direktori

```plaintext
/api-sekolah-dasar
  /src
    /config
      sequelizeInstance.js        
    /controllers
      authController.js
      kelasController.js
      muridController.js
      guruController.js     
    /middlewares
      auth.js
      validate.js
    /models
      murid.js
      kelas.js
      guru.js    
      user.js          
    /repositories
      guruRepository.js
      muridRepository.js
      kelasRepository.js
    /routes
      authRoutes.js
      kelasRoutes.js
      muridRoutes.js
      guruRoutes.js
      muridKelasRoutes.js  
    /utils
      generatePDF.js
    /validations
      guruValidation.js
      kelasValidation.js
      muridValidation.js
     app.js
  package-lock.json
  package.json
  README.md
```

### Installation

Setelah mengunduh atau meng-clone repositori, Anda bisa langsung meng-install semua dependensi yang dibutuhkan dengan perintah:

```bash
npm install
```

### Controllers

Folder ini berisi file controller yang menangani logika aplikasi ketika suatu route diakses.

### Config

Folder ini berisi file konfigurasi untuk mengatur koneksi ke database, seperti nama database, username, dan password.

### Middlewares

Folder ini berisi middleware yang digunakan untuk memvalidasi data atau menghandle error.

### Models

Folder ini berisi definisi model yang merepresentasikan tabel dalam database.

### Migrations

Folder ini berisi file migrasi yang mengatur skema database.

### Routes

Folder ini berisi file route yang menentukan endpoint yang dapat diakses dan middleware yang harus dilalui sebelum mencapai controller.

### Service

Bagian ini digunakan untuk mendefinisikan service yang dapat digunakan untuk mengakses resource yang diinginkan.

### Note Additions

*ORM vs. Native SQL*

ORM (ObjectRelational Mapping)
ORM allows developers to interact with a database using objectoriented code rather than writing raw SQL queries. This approach abstracts away the complexities of database operations, making it easier to work with data as objects, such as JSON.

Advantages of ORM:
1. Ease of Use: ORM provides an abstraction layer that allows developers to work with database entities as if they were regular objects in their programming language. This simplifies CRUD (Create, Read, Update, Delete) operations.
  
2. Code Consistency: ORM promotes consistency in database operations by providing a unified API, reducing the likelihood of SQL syntax errors and making the codebase easier to maintain.

3. CrossDatabase Compatibility: ORM tools are often databaseagnostic, meaning you can switch between different databases (e.g., PostgreSQL, MySQL) with minimal code changes.

Disadvantages of ORM:
1. Performance Overhead: ORMs like Sequelize in Node.js convert objectoriented queries into SQL. This conversion process can introduce a performance overhead, particularly for simple operations like `findAll()`, which transforms into `SELECT  FROM`. The transformation may cause a delay compared to writing raw SQL queries directly.

2. Limited Flexibility: ORMs can struggle with complex queries that involve intricate joins, subqueries, or specific database features. In such cases, using raw SQL may be necessary to achieve the desired result.

 Native SQL
Native SQL involves writing raw SQL queries directly, providing full control over database operations without any abstraction layer.

Advantages of Native SQL:
1. Performance: Native SQL can be more performant because it eliminates the overhead of query transformation inherent in ORMs. This direct interaction with the database is particularly advantageous for simple queries or operations where speed is critical.

2. Complex Queries: Native SQL allows developers to write complex queries involving advanced SQL features like window functions, recursive queries, and more. It provides the flexibility to optimize queries and take full advantage of the database's capabilities.

Disadvantages of Native SQL:
1. Complexity: Writing and maintaining raw SQL can be more complex and errorprone, especially in large projects with multiple developers. It requires a deep understanding of SQL and the specific database being used.

2. DatabaseSpecific Code: Native SQL is often tied to a specific database's syntax and features. This can make the codebase less portable and harder to switch between different database systems.

 When to Use Each:
 Use ORM when you need to perform standard CRUD operations, want to keep your codebase clean and consistent, and your queries are relatively simple.
 Use Native SQL when you encounter complex queries that are difficult to express using an ORM, or when you need to optimize performance for critical parts of your application.

