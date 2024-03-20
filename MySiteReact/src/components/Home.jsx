import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Typewriter({ text, speed }) {
  const [displayText, setDisplayText] = useState('');
  const positionRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = positionRef.current + 1;
      if (newPosition <= text.length) {
        setDisplayText(text.substring(0, newPosition) + (newPosition === text.length ? `<hr class="char blink" />` : `<hr class="char" />`));
        positionRef.current = newPosition;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="se" dangerouslySetInnerHTML={{ __html: displayText }} />;
}

function Home() {
  const leng = [
    `Ciao! Sono Matteo!`, 
    `Hi! I'm Matteo!`, 
    `¡Hola! soy Matteo!`, 
    `Olá! Eu sou Matteo!`,

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // Chiave per forzare la rimozione e la ricreazione del componente Typewriter

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leng.length);
    }, 4000); // Cambia elemento ogni 2 secondi

    return () => clearInterval(interval);
  }, [leng]);

  useEffect(() => {
    // Incrementa la chiave per forzare la rimozione e la ricreazione del componente Typewriter
    setKey((prevKey) => prevKey + 1);
  }, [currentIndex]);

  return (
    <div className="maintext">
      <h1 className="maintitle">
        <Typewriter key={key} text={leng[currentIndex]} speed={100} />
      </h1>
      <span className="underh1">/ Jr. Web Developer /</span>
    </div>
  );
}

export default Home;
