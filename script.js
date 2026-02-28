// Tambah Data
document.getElementById("experienceForm").addEventListener("submit", function(e){
    e.preventDefault();

    let tahun = document.getElementById("tahun").value;
    let kegiatan = document.getElementById("kegiatan").value;
    let posisi = document.getElementById("posisi").value;

    let table = document.getElementById("experienceTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = tahun;
    newRow.insertCell(1).innerHTML = kegiatan;
    newRow.insertCell(2).innerHTML = posisi;

    document.getElementById("experienceForm").reset();
});

// Search
document.getElementById("searchInput").addEventListener("keyup", function(){
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#experienceTable tbody tr");

    rows.forEach(row=>{
        row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
});

// Sort
function sortTable(n){
    let table = document.getElementById("experienceTable");
    let rows = Array.from(table.rows).slice(1);
    let asc = table.getAttribute("data-sort") !== "asc";
    table.setAttribute("data-sort", asc ? "asc" : "desc");

    rows.sort((a,b)=>{
        let x = a.cells[n].innerText.toLowerCase();
        let y = b.cells[n].innerText.toLowerCase();
        return asc ? x.localeCompare(y) : y.localeCompare(x);
    });

    let tbody = table.querySelector("tbody");
    tbody.innerHTML="";
    rows.forEach(row=>tbody.appendChild(row));
}