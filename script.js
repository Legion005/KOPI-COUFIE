function showMenu() {
    const greetingElement = document.getElementById("greeting");
    const menuButton = document.getElementById("menuButton"); // Pilih tombol MENU secara spesifik
    const locationButton = document.getElementById("locationButton"); // Pilih tombol LOKASI
    const footerElement = document.querySelector("footer");

    if (menuButton.textContent === "MENU") {
        greetingElement.textContent = "INI ADALAH MENU REKOMENDASI DARI KAMI UNTUK KALIAN SEMUA";

        const imageElement = document.createElement("img");
        imageElement.src = "menu-image.jpg"; // Ganti dengan nama file gambar Anda
        imageElement.alt = "Menu Image";
        imageElement.className = "menu-image animated";
        document.body.appendChild(imageElement);

        menuButton.textContent = "KEMBALI";
        locationButton.classList.add("hidden"); // Sembunyikan tombol LOKASI
        footerElement.classList.add("hidden");
    } else {
        greetingElement.textContent = "PILIH AJA BOSSKU!";
        const image = document.querySelector(".menu-image");
        if (image) {
            image.remove();
        }
        menuButton.textContent = "MENU";
        locationButton.classList.remove("hidden"); // Tampilkan kembali tombol LOKASI
        footerElement.classList.remove("hidden");
    }
}

function showLocation() {
    const greetingElement = document.getElementById("greeting");
    const menuButton = document.getElementById("menuButton"); // Pilih tombol MENU
    const locationButton = document.getElementById("locationButton"); // Pilih tombol LOKASI

    if (locationButton.textContent === "LOKASI") {
        greetingElement.textContent = "Lokasi kami ada di: Jl. Kopi Coufie No. 123, Jakarta";

        const locationImage = document.createElement("img");
        locationImage.src = "location-map.jpg"; // Ganti dengan file gambar peta Anda
        locationImage.alt = "Lokasi Kami";
        locationImage.className = "menu-image animated"; // Gunakan kelas yang sama untuk styling
        document.body.appendChild(locationImage);

        locationButton.textContent = "KEMBALI"; // Ubah tombol LOKASI menjadi KEMBALI
        menuButton.classList.add("hidden"); // Sembunyikan tombol MENU
    } else {
        greetingElement.textContent = "PILIH AJA BOSSKU!";
        const image = document.querySelector(".menu-image");
        if (image) {
            image.remove();
        }
        locationButton.textContent = "LOKASI"; // Ubah kembali tombol menjadi LOKASI
        menuButton.classList.remove("hidden"); // Tampilkan kembali tombol MENU
    }
}