import React from 'react';
import { ColorfulWord } from '../../utilities/ColorfulWord';

export const Dalana = () => {
  return (
    <div className="flex space-x-2">
      <ColorfulWord size="text-6xl sm:text-8xl">DALANA</ColorfulWord>
      <span className="text-5xl text-blue-400 sm:text-6xl" style={{ fontFamily: 'Luckiest Guy', alignSelf: 'flex-end'}}>kids</span> 
    </div>
  );
};