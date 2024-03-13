import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Typewriter({ text, speed}) {
  const [displayText, setDisplayText] = useState('');
  const positionRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = positionRef.current + 1;
      if (newPosition <= text.length) {
        setDisplayText(text.substring(0, newPosition) + (newPosition === text.length ? `<hr class="char blink" />` : `<hr class="char" />`));
        positionRef.current = newPosition;
      } else {
        setIsFinished(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);


  return <span className="se" dangerouslySetInnerHTML={{ __html: displayText }} />;;
}

function Home() {
  return (
    <div className="maintext">
      <h1 className="maintitle">
        <Typewriter className="maintitle" text="Hi, ${user}, I'm Matteo!" speed={100}/>
      </h1>
      <span className="underh1">/ Jr. Web Developer /</span>
    </div>
  );
}

export default Home;
