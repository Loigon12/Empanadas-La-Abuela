      // Sticky header
      window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        header.classList.toggle("scrolled", window.scrollY > 50);
      });

      // Smooth scroll
      document.getElementById("order-btn").addEventListener("click", () => {
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
      });

      // Validación formulario
      document
        .getElementById("contact-form")
        .addEventListener("submit", (e) => {
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
          if (!name || !email || !message) {
            e.preventDefault();
            alert("Por favor, completa todos los campos.");
          }
        });

      // Menú hamburguesa
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
      });

      // Cerrar menú al hacer clic en un enlace (móvil)
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          menuToggle.classList.remove("active");
          navLinks.classList.remove("active");
        });
      });