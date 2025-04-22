import { useState, useEffect } from "react";

const Typewriter = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 30,
  charsPerFrame = 2,
  loop = true, 
  cursor = true,
  delayAfterText = 2000,
  className = ""
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && charIndex < texts[textIndex].length) {
      // Typing phase
      const charsToAdd = Math.min(
        charsPerFrame,
        texts[textIndex].length - charIndex
      );
      
      const timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].slice(0, charIndex + charsToAdd));
        setCharIndex(prev => prev + charsToAdd);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex >= texts[textIndex].length) {
      // Delay after typing complete
      const timeout = setTimeout(() => {
        if (loop) {
          setIsDeleting(true);
        }
      }, delayAfterText);
      
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting phase
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -charsPerFrame));
      }, deleteSpeed);
      
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next text
      setIsDeleting(false);
      setCharIndex(0);
      setTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [
    charIndex,
    textIndex,
    texts,
    speed,
    deleteSpeed,
    loop,
    isDeleting,
    displayText.length,
    charsPerFrame,
    delayAfterText
  ]);

  return (
    <span className={`typewriter ${className}`}>
      {displayText}
      {cursor && <span className="cursor">|</span>}
      <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;