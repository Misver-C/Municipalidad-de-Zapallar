document.addEventListener('DOMContentLoaded', () => {
    // ==================== BARRAS DE BÚSQUEDA ====================
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function ejecutarBusqueda() {
        const query = searchInput.value.trim();
        if (query !== "") {
            alert("Buscando: " + query);
        } else {
            alert("Por favor, ingresa un término de búsqueda.");
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', ejecutarBusqueda);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                ejecutarBusqueda();
            }
        });
    }

    // ==================== REDES SOCIALES OFICIALES (HEADER) ====================
    // Enlaces oficiales de la Municipalidad de Zapallar
    const enlacesSociales = {
        whatsapp: "https://wa.me/56947428315",
        facebook: "https://www.facebook.com/municipalidadzapallar",
        instagram: "https://www.instagram.com/munizapallar"
    };

    const iconoWhatsapp = document.querySelector(".social-icons a[aria-label='WhatsApp']");
    const iconoFacebook = document.querySelector(".social-icons a[aria-label='Facebook']");
    const iconoInstagram = document.querySelector(".social-icons a[aria-label='Instagram']");

    if (iconoWhatsapp) {
        iconoWhatsapp.href = enlacesSociales.whatsapp;
        iconoWhatsapp.target = "_blank";
    }
    if (iconoFacebook) {
        iconoFacebook.href = enlacesSociales.facebook;
        iconoFacebook.target = "_blank";
    }
    if (iconoInstagram) {
        iconoInstagram.href = enlacesSociales.instagram;
        iconoInstagram.target = "_blank";
    }
});