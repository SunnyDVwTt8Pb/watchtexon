import React from 'react';

function Education() {
  // Define the internal CSS using a style object
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
    school: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Education</h2>
      <div style={styles.school}>
        <p>Studied upto 4th class in government school.</p>
        <p>continued 5th-10th classes in Chaitanya School,Martur</p>
        <p>Completed Intermediate studies in Chaitanya Junior College</p>
        <p>present pursuing 3rd year at B.Tech in VIT-AP University</p>
      </div>
    </div>
  );
}

export default Education;
