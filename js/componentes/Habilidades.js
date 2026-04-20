export class Habilidades {
    render() {
        const section = document.createElement('section');
        section.id = "habilidades";
        section.innerHTML = `
            <h2>Mis habilidades</h2>
            <div class="grid skill-grid">
                ${this.skillCard('Java', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg')}
                ${this.skillCard('Spring Boot', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg')}
                ${this.skillCard('Spring JPA', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg')}               
                ${this.skillCard('Maven', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg')}
                ${this.skillCard('Hibernate', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg')}
                ${this.skillCard('Tomcat', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg')}
                ${this.skillCard('Postman', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg')}
                ${this.skillCard('JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg')}
                ${this.skillCard('HTML', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg')}
                ${this.skillCard('CSS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg')}
                ${this.skillCard('GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg')}
                ${this.skillCard('Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg')}
                ${this.skillCard('MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg')}
                ${this.skillCard('Oraccle DB', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg')}
                
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