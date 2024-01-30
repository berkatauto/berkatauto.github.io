async function getArticles() {
    fetch("https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/getarticle", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
        })
    .then(response => {
        return response.json();
    })
    .then (data => {
        console.log(data);
        data.forEach(data => {
        const title = `<td id="title" class="w-1/3 text-left py-3 px-4">${data.title}</td>`;
        const author = `<td class="w-1/3 text-left py-3 px-4">${data.author}</td>`;
        const category = `<td class="w-1/3 text-left py-3 px-4">${data.category}</td>`;
        const options = `<td class="text-left py-3 px-4">
        <a href="./editarticle.html?title=${data.title}" class="text-blue-500 hover:underline mr-2">Edit</a>
        <button id="deleteArticle" class="text-red-500 hover:underline">Delete</button>
        </td>`
        const row = `<tr>${title}${author}${category}${options}</tr>`;
        document.getElementById("articlelist").innerHTML += row;
        });
    })
    .catch
    (error => {
        console.log(error);
    });
}

getArticles();

// delete function
function deleteArticle() {
    var title = document.getElementById("title").innerHTML;
    var deleteButton = document.getElementById("deleteArticle");
    deleteButton.addEventListener("", function() {
        alert("Apa Anda ingin menghapus artikel ini?");
        if (confirm("Apa Anda ingin menghapus artikel ini?")) {
            // delete article with title as parameter
            fetch("https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/deletearticle", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                })
                })
            .then(response => {
                return response.json();
            }
            )
            .then (data => {
                console.log(data);
            })
            .catch
            (error => {
                console.log(error);
            });
            // reload page
            location.reload();

        } else {
            // Do nothing!
        }
    });
}

deleteArticle();



// // Fungsi untuk mendapatkan data artikel dari Google Cloud Function
// async function getArticles() {
//     try {
//         const response = await fetch("https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/getarticle");
//         if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return null;
//     }
//     }

//   // Fungsi untuk memuat data ke dalam tabel HTML
//     function loadArticlesIntoTable(articles) {
//     const articleListDiv = document.getElementById("articlelist");
    
//     // Bersihkan isi div sebelum memuat artikel baru
//     articleListDiv.innerHTML = "";
//     // Loop melalui artikel dan tambahkan ke tabel
//     articles.forEach(article => {
//         const newRow = document.createElement("tr");
    
//         const nameCell = document.createElement("td");
//         nameCell.classList.add("w-1/3", "text-left", "py-3", "px-4");
//         const nameLink = document.createElement("a");
//         nameLink.classList.add("hover:text-blue-500");
//         nameLink.href = article.url; // Gantilink dengan properti yang sesuai dari artikel
//         nameLink.textContent = article.name;
//         nameCell.appendChild(nameLink);
    
//         const categoryCell = document.createElement("td");
//         categoryCell.classList.add("w-1/3", "text-left", "py-3", "px-4");
//         categoryCell.textContent = article.category;
    
//         const tagsCell = document.createElement("td");
//         tagsCell.classList.add("text-left", "py-3", "px-4");
//         tagsCell.textContent = article.tags.join(", ");
    
//         const dateCell = document.createElement("td");
//         dateCell.classList.add("text-left", "py-3", "px-4");
//         dateCell.textContent = article.date;
    
//         const actionsCell = document.createElement("td");
//         actionsCell.classList.add("text-left", "py-3", "px-4");
//         const editLink = document.createElement("a");
//         editLink.classList.add("text-blue-500", "hover:underline", "mr-2");
//         editLink.href = article.editUrl; // Ganti link dengan properti yang sesuai dari artikel
//         editLink.textContent = "Edit";
    
//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.classList.add("text-red-500", "hover:underline");
//         deleteButton.onclick = () => deleteArticle(article.id); // Ganti dengan fungsi penghapusan yang sesuai
    
//         actionsCell.appendChild(editLink);
//         actionsCell.appendChild(deleteButton);
    
//         newRow.appendChild(nameCell);
//         newRow.appendChild(categoryCell);
//         newRow.appendChild(tagsCell);
//         newRow.appendChild(dateCell);
//         newRow.appendChild(actionsCell);
    
//         articleListDiv.appendChild(newRow);
//         });
//     }
    
//     // Fungsi untuk menghapus artikel (contoh implementasi)
//     function deleteArticle(articleId) {
//         // Implementasikan logika penghapusan artikel sesuai kebutuhan
//         console.log(`Deleting article with ID: ${articleId}`);
//     }
    
//     // Memanggil fungsi untuk mendapatkan artikel dan memuatnya ke dalam tabel saat halaman dimuat
//     document.addEventListener("DOMContentLoaded", async () => {
//         const articles = await getArticles();
//         if (articles) {
//         loadArticlesIntoTable(articles);
//         }
//     });