import {useState, useEffect} from 'react';

export default function Home () {

      const [text, setText] = useState('');
  const phrases = ['Front end web development', 'Web design', 'UI/UX', 'SEO', 'Technical writing']; // Add your phrases here
  const typingSpeed = 100; // Speed in milliseconds
  const delayBetweenPhrases = 1500; // Delay between phrases in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < phrases[currentIndex].length) {
        setText(phrases[currentIndex].substring(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          charIndex = 0;
          currentIndex = (currentIndex + 1) % phrases.length;
          setText('');
        }, delayBetweenPhrases);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);
    return (
        <div className="home">
             <h2 className="typewriter">
                  <span>{text}</span>
                  <span className="cursor"></span></h2>

        </div>
    )
}