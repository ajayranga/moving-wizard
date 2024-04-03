import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
    flip: boolean;
  }>({ top: 0, left: 0, flip: false });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickBoard = (e: any) => {
    setPosition((prevSt) => ({
      top: e.clientY - 75,
      left: e.clientX - 75,
      flip: prevSt.left < e.clientX ? false : true,
    }));
  };
  return (
    <main className='mainContainer' onClick={clickBoard}>
      <img
        src='https://www.wizard.financial/static/media/wizaart-img.56787174.gif'
        className={`wizImg ${position.flip && 'flip'}`}
        style={{ top: position.top, left: position.left }}
        alt='Wizard image'
      />
    </main>
  );
}

export default App;
