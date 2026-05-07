export class Proyectos {
  constructor() {
    this.currentIndex = 0;
    this.proyectos = [
      {
        id: 1,
        titulo: "API de Gestión de Tareas",
        descripcion:
          "Backend REST con Spring Boot y JWT. Manejo de usuarios, tareas y roles. Desafío: implementar seguridad. Lo solucioné con Spring Security + filtros personalizados.",
        tecnologias: "Java 17, Spring Boot 3, JWT, MySQL, JPA",
        imagen:
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
        github: "https://github.com/tuusuario/api-tareas",
        demo: "https://api-tareas-demo.com",
      },
      {
        id: 2,
        titulo: "E-commerce HERA - Perfumes & Joyería",
        descripcion:
          "Plataforma completa de e-commerce con arquitectura full-stack. Mi contribución: desarrollo completo del backend (API REST, seguridad JWT, BCrypt, carrito de compras, gestión de inventario, panel admin) y frontend vanilla (JavaScript modular). Implementé sistema de favoritos persistente, carrito con soporte para usuarios invitados, checkout multi-step con cálculo de carriers, y panel de administración para gestión de productos.",
        tecnologias:
          "Java 17, Spring Boot 3.5, Spring Security, JWT, BCrypt, JPA/Hibernate, MySQL, Gradle Kotlin DSL, JavaScript (ES6), HTML5, CSS3, Bootstrap, Swagger/OpenAPI",
        imagen:
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=250&fit=crop",
        github: "https://github.com/tuusuario/hera-backend",
        demo: "https://hera-perfumes-demo.com",
      },
      {
        id: 3,
        titulo: "Microservicios E-commerce con Load Balancer",
        descripcion:
          "Arquitectura de microservicios para e-commerce con Spring Cloud Gateway, Eureka Service Discovery y balanceo de carga integrado. Implementé 2 microservicios core (products, items) con comunicación vía Feign Client y balanceo Round Robin.",
        tecnologias:
          "Java 17, Spring Boot 3, Spring Cloud Gateway, Netflix Eureka, Spring Cloud Load Balancer, Feign Client, MySQL, JPA/Hibernate, Docker",
        imagen:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
        github: "https://github.com/tuusuario/ms-ecommerce",
        demo: "https://api-gateway-demo.com",
      },
      {
        id: 4,
        titulo: "Lobos de Montaña - Hackathon",
        descripcion:
          "Plataforma de e-commerce para equipo de senderismo desarrollada en equipo durante un hackathon. Implementamos un carrito de compras funcional, catálogo de productos, formulario de contacto y diseño responsive. Mi rol principal fue desarrollar el backend de gestión de productos y colaborar en la lógica del carrito de compras.",
        tecnologias:
          "HTML5, CSS3, Bootstrap 5, JavaScript, FormSubmit, LocalStorage",
        imagen:
          "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop",
        github: "https://github.com/tuusuario/lobos-montana",
        demo: "https://lobos-montana.netlify.app",
      },
    ];
  }

  render() {
    const section = document.createElement("section");
    section.id = "proyectos";
    section.innerHTML = `
            <h2>Mis proyectos destacados</h2>
            <div class="carousel-container">
                <button class="carousel-btn prev-btn" aria-label="Anterior">❮</button>
                <div class="carousel-wrapper">
                    <div class="carousel-track">
                        ${this.proyectos.map((proyecto) => this.createCard(proyecto)).join("")}
                    </div>
                </div>
                <button class="carousel-btn next-btn" aria-label="Siguiente">❯</button>
            </div>
            <div class="carousel-indicators">
                ${this.proyectos
                  .map(
                    (_, index) => `
                    <button class="indicator ${index === 0 ? "active" : ""}" data-index="${index}"></button>
                `,
                  )
                  .join("")}
            </div>
            <div style="text-align:center; margin-top:2rem;">
                <a href="#" class="btn">Ver todos en GitHub</a>
            </div>
        `;

    this.setupCarousel(section);
    this.setupFlipCards(section);

    return section;
  }

  createCard(proyecto) {
    return `
            <div class="carousel-card">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <!-- FRENTE: Imagen -->
                        <div class="flip-card-front">
                            <img src="${proyecto.imagen}" alt="${proyecto.titulo}" loading="lazy">
                            <div class="card-overlay">
                                <h3>${proyecto.titulo}</h3>
                                <p class="tech-tags">${proyecto.tecnologias.split(",").slice(0, 3).join(" • ")}</p>
                                <p class="click-hint">Haz clic para ver más</p>
                            </div>
                        </div>
                        <!-- REVERSO: Información detallada -->
                        <div class="flip-card-back">
                            <div class="card-content">
                                <h3>${proyecto.titulo}</h3>
                                <div class="card-description">
                                    <p>${proyecto.descripcion}</p>
                                    <div class="tech-stack">
                                        <strong>Tecnologías:</strong><br>
                                        ${proyecto.tecnologias}
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <a href="${proyecto.github}" class="btn" target="_blank">GitHub</a>
                                    <a href="${proyecto.demo}" class="btn btn-secondary" target="_blank">Demo</a>
                                </div>
                                <p class="click-hint-back">Haz clic para volver</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  setupCarousel(section) {
    const track = section.querySelector(".carousel-track");
    const cards = section.querySelectorAll(".carousel-card");
    const prevBtn = section.querySelector(".prev-btn");
    const nextBtn = section.querySelector(".next-btn");
    const indicators = section.querySelectorAll(".indicator");

    const updateCarousel = () => {
      if (!track || cards.length === 0) return;
      const cardWidth = cards[0].offsetWidth + 32; // + gap
      track.style.transform = `translateX(-${this.currentIndex * cardWidth}px)`;

      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === this.currentIndex);
      });
    };

    const nextSlide = () => {
      this.currentIndex = (this.currentIndex + 1) % cards.length;
      updateCarousel();
    };

    const prevSlide = () => {
      this.currentIndex = (this.currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    };

    prevBtn?.addEventListener("click", prevSlide);
    nextBtn?.addEventListener("click", nextSlide);

    indicators.forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        this.currentIndex = parseInt(e.target.dataset.index);
        updateCarousel();
      });
    });

    // Auto-play cada 5 segundos (opcional)
    let interval = setInterval(nextSlide, 5000);

    // Pausar auto-play al hover
    const container = section.querySelector(".carousel-container");
    container?.addEventListener("mouseenter", () => clearInterval(interval));
    container?.addEventListener("mouseleave", () => {
      interval = setInterval(nextSlide, 5000);
    });

    // Responsive
    window.addEventListener("resize", () => updateCarousel());
    setTimeout(updateCarousel, 100);
  }

  setupFlipCards(section) {
    const flipCards = section.querySelectorAll(".flip-card");

    flipCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        // No girar si se hizo clic en un botón
        if (e.target.closest(".btn") || e.target.closest("a")) {
          e.stopPropagation();
          return;
        }
        card.classList.toggle("flipped");
      });
    });
  }
}
