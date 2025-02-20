import react from react;


const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './https://drive.google.com/file/d/1hKpnTHMQ_IyR1QpOilYnNeFqpSxH6H6w/view?usp=sharing'; // Ensure the resume is placed in the public folder
    link.download = 'Jatin_Rajvani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  export default handleDownload;