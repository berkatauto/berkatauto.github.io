// Fungsi untuk mendapatkan data artikel dari Google Cloud Function
async function getArticles() {
    try {
      const response = await fetch("https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/getarticle");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  
  // Fungsi untuk memuat data ke dalam tabel HTML
  function loadArticlesIntoTable(articles) {
    const articleListDiv = document.getElementById("articlelist");
    
    // Bersihkan isi div sebelum memuat artikel baru
    articleListDiv.innerHTML = "";
  
    // Loop melalui artikel dan tambahkan ke tabel
    articles.forEach(article => {
      const newRow = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.classList.add("w-1/3", "text-left", "py-3", "px-4");
      const nameLink = document.createElement("a");
      nameLink.classList.add("hover:text-blue-500");
      nameLink.href = article.url; // Gantilink dengan properti yang sesuai dari artikel
      nameLink.textContent = article.name;
      nameCell.appendChild(nameLink);
  
      const categoryCell = document.createElement("td");
      categoryCell.classList.add("w-1/3", "text-left", "py-3", "px-4");
      categoryCell.textContent = article.category;
  
      const tagsCell = document.createElement("td");
      tagsCell.classList.add("text-left", "py-3", "px-4");
      tagsCell.textContent = article.tags.join(", ");
  
      const dateCell = document.createElement("td");
      dateCell.classList.add("text-left", "py-3", "px-4");
      dateCell.textContent = article.date;
  
      const actionsCell = document.createElement("td");
      actionsCell.classList.add("text-left", "py-3", "px-4");
      const editLink = document.createElement("a");
      editLink.classList.add("text-blue-500", "hover:underline", "mr-2");
      editLink.href = article.editUrl; // Ganti link dengan properti yang sesuai dari artikel
      editLink.textContent = "Edit";
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("text-red-500", "hover:underline");
      deleteButton.onclick = () => deleteArticle(article.id); // Ganti dengan fungsi penghapusan yang sesuai
  
      actionsCell.appendChild(editLink);
      actionsCell.appendChild(deleteButton);
  
      newRow.appendChild(nameCell);
      newRow.appendChild(categoryCell);
      newRow.appendChild(tagsCell);
      newRow.appendChild(dateCell);
      newRow.appendChild(actionsCell);
  
      articleListDiv.appendChild(newRow);
    });
  }
  
  // Fungsi untuk menghapus artikel (contoh implementasi)
  function deleteArticle(articleId) {
    // Implementasikan logika penghapusan artikel sesuai kebutuhan
    console.log(`Deleting article with ID: ${articleId}`);
  }
  
  // Memanggil fungsi untuk mendapatkan artikel dan memuatnya ke dalam tabel saat halaman dimuat
  document.addEventListener("DOMContentLoaded", async () => {
    const articles = await getArticles();
    if (articles) {
      loadArticlesIntoTable(articles);
    }
  });


//   const { MongoClient } = require('mongodb');

//   // URL MongoDB
//   const mongoURL = 'mongodb+srv://admin:402390@kukidata.jtgvziw.mongodb.net/';
  
//   // Nama database dan koleksi
//   const dbName = 'nama_database';
//   const collectionName = 'nama_koleksi';
  
//   exports.getarticle = async (req, res) => {
//       try {
//           // Buat koneksi ke MongoDB
//           const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
//           await client.connect();
  
//           // Pilih database dan koleksi
//           const db = client.db(dbName);
//           const collection = db.collection(collectionName);
  
//           // Ambil data dari MongoDB
//           const data = await collection.find().toArray();
  
//           // Kirim data sebagai response
//           res.status(200).json(data);
//       } catch (error) {
//           console.error('Error retrieving data:', error);
//           res.status(500).send('Internal Server Error');
//       } finally {
//           // Tutup koneksi setelah selesai
//           await client.close();
//       }
//   };