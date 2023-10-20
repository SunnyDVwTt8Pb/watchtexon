import React from 'react';

function Skills() {
  const styles = {
    container: {
      background: 'linear-gradient(90deg,red,green,yellow)',
      padding: '20px',
      borderRadius: '5px',
      margin: '0px',
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
    },
    skillsList: {
      listStyle: 'none',
      display: 'flex', // Use flexbox to arrange the skills side by side
      flexWrap: 'wrap', // Wrap skills to the next line if they don't fit
      padding: 0,
      margin: 0,
    },
    skillItem: {
      fontSize: '25px',
      color:'#fff',
      margin: '20px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      background: 'linear-gradient(90deg,red,green,yellow)',
    },
  };

  const skills = ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'JSON'];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Skills</h2>
      <ul style={styles.skillsList}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
