// ========================================
// ICONOS SOCIALES REUTILIZABLES
// ========================================

export const Iconos = {
    // Icono de GitHub
    github: () => `
        <svg class="github-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.49C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.09 15.88 5.09 15.88C6.1 15.94 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.34 14.5 18.26C14.5 19.56 14.5 20.55 14.5 21C14.5 21.27 14.66 21.59 15.17 21.49C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
        </svg>
    `,

    // Icono de LinkedIn
    linkedin: () => `
        <svg class="linkedin-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452H16.892V14.882C16.892 13.556 16.87 11.846 15.042 11.846C13.192 11.846 12.908 13.291 12.908 14.784V20.452H9.353V9H12.766V10.561H12.81C13.289 9.666 14.452 8.724 16.191 8.724C19.807 8.724 20.447 11.151 20.447 14.276V20.452ZM5.337 7.433C4.195 7.433 3.275 6.51 3.275 5.371C3.275 4.233 4.195 3.31 5.337 3.31C6.478 3.31 7.398 4.233 7.398 5.371C7.398 6.51 6.478 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z" fill="currentColor"/>
        </svg>
    `,

    // Icono de Twitter/X
    twitter: () => `
        <svg class="twitter-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
        </svg>
    `,

    // Icono de Email
    email: () => `
        <svg class="email-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
        </svg>
    `,

    // Icono de Teléfono
    phone: () => `
        <svg class="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
        </svg>
    `,

    // Icono de Ubicación
    location: () => `
        <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
        </svg>
    `
};

// Función para crear un enlace social completo
export function crearEnlaceSocial(tipo, url, texto, variante = 'default') {
    const icono = Iconos[tipo] ? Iconos[tipo]() : '';
    const clases = `social-icon ${variante === 'icon-only' ? 'social-icon-only' : ''} ${variante === 'small' ? 'social-icon-small' : ''} ${variante === 'large' ? 'social-icon-large' : ''}`;
    
    if (variante === 'icon-only') {
        return `<a href="${url}" class="${clases}" target="_blank" rel="noopener noreferrer">${icono}</a>`;
    }
    
    return `<a href="${url}" class="${clases}" target="_blank" rel="noopener noreferrer">${icono} ${texto}</a>`;
}

// Función para crear un badge de contacto
export function crearBadgeContacto(tipo, texto, url = null) {
    const icono = Iconos[tipo] ? Iconos[tipo]() : '';
    
    if (url) {
        return `<a href="${url}" class="contact-badge" target="_blank" rel="noopener noreferrer">${icono} ${texto}</a>`;
    }
    
    return `<div class="contact-badge">${icono} ${texto}</div>`;
}