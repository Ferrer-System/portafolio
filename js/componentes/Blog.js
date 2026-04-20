export class Blog {
    render() {
        const section = document.createElement('section');
        section.id = "blog";
        section.innerHTML = `
            <h2>Blog / Artículos</h2>
            <div class="blog-container">
                <!-- Artículo destacado (el nuevo) -->
                <div class="blog-post featured-post">
                    <div class="post-badge">Artículo destacado</div>
                    <div class="post-header">
                        <div class="post-icon"></div>
                        <div class="post-title-section">
                            <h3>Cómo implementé autenticación segura en mi API con Spring Boot</h3>
                            <div class="post-meta">
                                <span class="post-date">15 de Diciembre, 2025</span>
                                <span class="post-read-time">5 min de lectura</span>
                                <span class="post-category">Seguridad · Spring Boot</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="post-content">
                        <!-- Introducción -->
                        <div class="content-block">
                            <h4>Introducción</h4>
                            <p>Al desarrollar mi API, uno de los puntos más importantes fue asegurar que solo usuarios autorizados pudieran acceder a la información. Buscaba una solución que fuera <strong>segura, escalable y fácil de integrar</strong> con cualquier tipo de aplicación, ya sea web o móvil.</p>
                        </div>

                        <!-- El reto -->
                        <div class="content-block challenge">
                            <h4>El reto</h4>
                            <p>Muchas aplicaciones manejan usuarios sin una seguridad adecuada, lo que puede provocar accesos no autorizados o problemas al crecer el sistema.</p>
                            <div class="goals-list">
                                <div class="goal-item">Proteger la información</div>
                                <div class="goal-item">Permitir acceso solo a usuarios válidos</div>
                                <div class="goal-item">Mantener el sistema eficiente</div>
                            </div>
                        </div>

                        <!-- La solución -->
                        <div class="content-block solution">
                            <h4>La solución</h4>
                            <p>Implementé un sistema de autenticación basado en <strong>tokens JWT</strong>.</p>
                            <div class="steps-flow">
                                <div class="step">
                                    <span class="step-number">1</span>
                                    <span>Usuario inicia sesión</span>
                                </div>
                                <div class="step-arrow">→</div>
                                <div class="step">
                                    <span class="step-number">2</span>
                                    <span>Genera token seguro</span>
                                </div>
                                <div class="step-arrow">→</div>
                                <div class="step">
                                    <span class="step-number">3</span>
                                    <span>Token en cada petición</span>
                                </div>
                                <div class="step-arrow">→</div>
                                <div class="step">
                                    <span class="step-number">4</span>
                                    <span>Valida al usuario</span>
                                </div>
                            </div>
                            <p class="benefit-note">Esto evita guardar sesiones en el servidor y hace que la aplicación sea más rápida y escalable.</p>
                        </div>

                        <!-- Implementación -->
                        <div class="content-block">
                            <h4>¿Cómo lo implementé?</h4>
                            <p>De forma general, el proceso fue:</p>
                            <ul class="implementation-list">
                                <li>Configurar seguridad en el backend</li>
                                <li>Crear un endpoint para inicio de sesión</li>
                                <li>Generar un token único para cada usuario</li>
                                <li>Validar ese token en cada petición</li>
                            </ul>
                            <div class="tech-stack-blog">
                                <span class="tech-tag">Spring Boot</span>
                                <span class="tech-tag">Maven</span>
                                <span class="tech-tag">JWT</span>
                                <span class="tech-tag">Spring Security</span>
                                <span class="tech-tag">Oracle DB</span>
                            </div>
                        </div>

                        <!-- Retos -->
                        <div class="content-block challenges-learned">
                            <h4>Retos durante el desarrollo</h4>
                            <div class="challenges-grid">
                                <div class="challenge-card">
                                    <span class="challenge-icon"></span>
                                    <p>Errores en la validación del token</p>
                                </div>
                                <div class="challenge-card">
                                    <span class="challenge-icon"></span>
                                    <p>Configuración incorrecta de seguridad</p>
                                </div>
                                <div class="challenge-card">
                                    <span class="challenge-icon"></span>
                                    <p>Bloqueos entre frontend y backend</p>
                                </div>
                            </div>
                            <p class="learning-note">Cada uno de estos retos me ayudó a entender mejor cómo funcionan los sistemas de autenticación en aplicaciones reales.</p>
                        </div>

                        <!-- Resultado -->
                        <div class="content-block result">
                            <h4>Resultado</h4>
                            <div class="result-grid">
                                <div class="result-item">API protegida</div>
                                <div class="result-item">Solo usuarios autorizados</div>
                                <div class="result-item">Sistema escalable</div>
                                <div class="result-item">Listo para frontend</div>
                            </div>
                        </div>

                        <!-- Conclusión -->
                        <div class="content-block conclusion">
                            <h4>Conclusión</h4>
                            <p>La seguridad es una parte fundamental en cualquier aplicación moderna. Implementar autenticación correctamente no solo protege la información, también mejora la calidad del sistema y lo prepara para crecer.</p>
                            <p class="highlight-text">Este tipo de soluciones son clave cuando se desarrollan proyectos profesionales.</p>
                        </div>

                        <!-- Cierre -->
                        <div class="post-footer">
                            <p class="closing">Este proyecto forma parte de mi crecimiento como desarrollador backend, donde busco construir sistemas funcionales, seguros y listos para entornos reales.</p>
                            <div class="post-actions">
                                <button class="btn-like">Me gusta</button>
                                <button class="btn-share">Compartir</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Grid de artículos anteriores -->
                <div class="other-posts">
                    <h3 class="other-posts-title">Más artículos</h3>
                    <div class="grid">
                        ${this.articulo(
                            "Cómo optimizar consultas JPA en Spring Boot",
                            "2025-03-20",
                            "Aprende a evitar n+1 queries y mejorar rendimiento con @EntityGraph y consultas personalizadas.",
                            "",
                            "Optimización"
                        )}
                        ${this.articulo(
                            "Mi experiencia en Generation: de novato a junior Java",
                            "2025-03-10",
                            "Comparto mi viaje, retos y cómo logré mi primer empleo como desarrollador backend.",
                            "",
                            "Carrera"
                        )}
                        ${this.articulo(
                            "Comparativa: Maven vs Gradle para proyectos Spring",
                            "2025-02-28",
                            "Ventajas, desventajas y cuál elegir según el tamaño del equipo y necesidades del proyecto.",
                            "",
                            "Herramientas"
                        )}
                    </div>
                </div>
            </div>
        `;
        return section;
    }

    articulo(titulo, fecha, resumen, icono = "", categoria = "Tecnología") {
        return `
            <div class="card article-card">
                <div class="article-icon">${icono}</div>
                <h3>${titulo}</h3>
                <div class="article-meta">
                    <span class="blog-date">${fecha}</span>
                    <span class="article-category">${categoria}</span>
                </div>
                <p>${resumen}</p>
                <a href="#" class="btn btn-article">Leer artículo →</a>
            </div>
        `;
    }
}