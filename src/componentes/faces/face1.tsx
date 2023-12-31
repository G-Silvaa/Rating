import React, { useState, useEffect } from "react";
import { Button } from "./styles";

interface FaceProps {
  isActive: boolean;
  onClick: () => void;
}

const Face1: React.FC<FaceProps> = ({ isActive, onClick }) => {
  return (
    <Button onMouseEnter={onClick}>
      {
        <svg
          className={`face-button ${isActive ? "clicked" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          {<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />}
        </svg>
      }
    </Button>
  );
};

const Face2: React.FC<FaceProps> = ({ isActive, onClick }) => {
  return (
    <Button onMouseEnter={onClick}>
      {
        <svg
          className={`face-button ${isActive ? "clicked" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          {          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
}
        </svg>
      }
    </Button>
  );
};

const Face3: React.FC<FaceProps> = ({ isActive, onClick }) => {
  return (
    <Button onMouseEnter={onClick}>
      {
        <svg
          className={`face-button2 ${isActive ? "clicked" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          {          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z" />
}
        </svg>
      }
    </Button>
  );
};

const Face4: React.FC<FaceProps> = ({ isActive, onClick }) => {
  return (
    <Button onMouseEnter={onClick}>
      {
        <svg
          className={`face-button3 ${isActive ? "clicked" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          { <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
}
        </svg>
      }
    </Button>
  );
};

const Face5: React.FC<FaceProps> = ({ isActive, onClick }) => {
  return (
    <Button onMouseEnter={onClick}>
      {
        <svg
          className={`face-button3 ${isActive ? "clicked" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          {<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />}
        </svg>
      }
    </Button>
  );
};



const App: React.FC = () => {
  const [activeFace, setActiveFace] = useState<number | null>(null);

  const handleFaceClick = (faceIndex: number) => {
    setActiveFace(faceIndex);
    
  };

  useEffect(() => {
    console.log(activeFace);
  }, [activeFace]);

  

  return (
    <div className="container">
      <Face1 isActive={activeFace === 0} onClick={() => handleFaceClick(0)} />
      <Face2 isActive={activeFace === 1} onClick={() => handleFaceClick(1)} />
      <Face3 isActive={activeFace === 2} onClick={() => handleFaceClick(2)} />
      <Face4 isActive={activeFace === 3} onClick={() => handleFaceClick(3)} />
      <Face5 isActive={activeFace === 4} onClick={() => handleFaceClick(4)} />
     
    </div>
    
  );

  
};

export default App;
