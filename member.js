function skillsMember() {
    var skills = ['Javascript', 'React', 'Node', 'MongoDB', 'Express', 'HTML', 'CSS', 'SCSS', 'Bootstrap', 'Materialize', 'jQuery', 'Python', 'Django', 'Flask', 'SQL', 'PostgreSQL', 'Git', 'GitHub', 'Heroku', 'Netlify', 'VSCode', 'Atom', 'GitHub Desktop', 'Photoshop', 'Illustrator'];
    var skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        var skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}