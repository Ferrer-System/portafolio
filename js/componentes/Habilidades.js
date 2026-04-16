export class Habilidades {
    render() {
        const section = document.createElement('section');
        section.id = "habilidades";
        section.innerHTML = `
            <h2>⚙️ Mis habilidades</h2>
            <div class="grid skill-grid">
                ${this.skillCard('Java', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg')}
                ${this.skillCard('Spring Boot', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg')}
                ${this.skillCard('JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg')}
                ${this.skillCard('HTML/CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg')}
                ${this.skillCard('Git/GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg')}
                ${this.skillCard('MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg')}
            </div>
            <div class="card" style="margin-top:2rem;">
                <h3>🎓 Formación destacada</h3>
                <p><strong>Capacitación de Generation México</strong> - Desarrollador Java Full Stack (2024)</p>
                <p>Certificaciones: Oracle Certified Associate, Scrum Fundamentals, AWS Cloud Practitioner (en curso).</p>
                <p><strong>Experiencia profesional:</strong> 1 año como freelance desarrollando APIs, 6 meses de prácticas en TechSolutions S.L.</p>
                <p><strong>Habilidades blandas:</strong> Trabajo en equipo, resolución de problemas, comunicación asertiva, adaptabilidad.</p>
            </div>
        `;
        return section;
    }

    skillCard(nombre, imgUrl) {
        return `
            <div class="skill-card">
                <img src="${imgUrl}" alt="${nombre}" loading="lazy">
                <p>${nombre}</p>
            </div>
        `;
    }
}