// Fungsi untuk mendapatkan data dari local storage
function getProjectsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("projects")) || [];
}

// Fungsi untuk menyimpan data ke local storage
function saveProjectsToLocalStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// Fungsi untuk menambahkan proyek baru
function addProject(project) {
  const projects = getProjectsFromLocalStorage();
  projects.push(project);
  saveProjectsToLocalStorage(projects);
  displayProjects(); // Tampilkan ulang proyek setelah ditambah
}

// Fungsi untuk mengupdate proyek
function updateProject(updatedProject) {
  let projects = getProjectsFromLocalStorage();
  projects = projects.map(project => project.id ===
    updatedProject.id ? updateProject : project);
  saveProjectsToLocalStorage(projects);
  displayProjects(); // Tampilkan ulang proyek setelah diupdate
}

// Fungsi untuk menghapus proyek
function deleteProject(projectId) {
  let projects = getProjectsFromLocalStorage();
  projects = projects.filter(project => project.id !==
    projectId
  );
  saveProjectsToLocalStorage(projects);
  displayProjects(); // Tampilkan ulang proyek setelah dihapus
}

// Fungsi untuk menampilkan proyek di halaman
function displayProjects() {
  const projectCardsContainer = document.querySelector('.project-cards');
  projectCardsContainer.innerHTML = ''; // Kosongkan container sebelum menampilkan ulang

  const projects = getProjectsFromLocalStorage();

  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('card');

    // Tambahkan gambar
    const img = document.createElement('img');
    img.src = project.image || 'https://via.placeholder.com/150';
    img.alt = project.name;
    card.appendChild(img);

    // Tambahkan judul proyek
    const title = document.createElement.createElement('h2');
    title.textContent = project.name;
    card.appendChild(title);

    // Tambahkan tanggal dalam format "31 Aug 2024"
    const date = document.createElement("p");
    const formattedDate = new Date(project.startDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'number'
    });
    date.textContent = formattedDate;
    card.appendChild(date);

    // Tambahkan durasi proyek
    const
  })
}
