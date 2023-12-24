import React, { useState } from 'react';
import './component/ButtonComponent.css';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'; // Ensure correct path to your i18n setup

const App: React.FC = () => {
  const initialTexts = [
    'circle',
    'square',
    'horizontal-circle',
    'trapezoid',
    'rectangle',
    'rhombus',
  ];

  const { t } = useTranslation();
  const [texts, setTexts] = useState<string[]>(initialTexts);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
      .then(() => console.log('Language changed successfully'))
      .catch((err) => console.error('Error in changing language', err));
  };

  const shuffleArray = (array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleButtonClick = (direction: 'left' | 'right') => {
    const updatedTexts = [...texts];

    if (direction === 'left') {
      const firstText = updatedTexts.shift();
      updatedTexts.push(firstText as string);
    } else if (direction === 'right') {
      const lastText = updatedTexts.pop();
      updatedTexts.unshift(lastText as string);
    }

    setTexts(updatedTexts);
  };

  const handleRandomizeClick = () => {
    const randomizedTexts = shuffleArray(texts);
    setTexts(randomizedTexts);
  };

  return (
    <div className="button-container">
     <h1>{t('LayoutStyle')}</h1>
      <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="th">ไทย</option>
        {/* Add other language options as needed */}
      </select>
      <button className='arrow-left' onClick={() => handleButtonClick('left')}></button>
      <button className='arrow-right' onClick={() => handleButtonClick('right')}></button>
      <div className="container">
        {texts.map((text, index) => (
          <Button key={index} text={text} onRandomizeClick={handleRandomizeClick} />
        ))}
      </div>
    </div>
  );
};

interface ButtonProps {
  text: string;
  onRandomizeClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onRandomizeClick }) => {
  return (
    <button onClick={onRandomizeClick} className="custom-button">
      <div className={text}></div>
    </button>
  );
};

export default App;
