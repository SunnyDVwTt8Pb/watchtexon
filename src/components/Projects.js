import React from 'react';

function Projects() {
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
    projectItem: {
      fontSize: '16px',
      margin: '8px 0',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: 'linear-gradient(90deg,red,green,yellow)',
    },
  };

  const projects = [
    'Machine Learning Project (Car Price Prediction)',
    'Deep Learning ( Indian Birds Classification)',
    'Web Development Project (Tourist Booking Website)',
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} style={styles.projectItem}>
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
