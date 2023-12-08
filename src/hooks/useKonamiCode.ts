import { useEffect } from 'react';
import useKeyCapture from 'use-key-capture';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const useKonamiCode = (callback: () => void) => {
  const theHook = useKeyCapture();

  console.log(theHook.keyData);

  // useEffect(() => {
  //   const checkKonamiCode = () => {
  //     if (pressedKeys.join('') === konamiCode.join('')) {
  //       callback();
  //     }
  //   };

  //   konamiCode.forEach((key) => captureKey(key));
  //   checkKonamiCode();

  //   return () => {
  //     konamiCode.forEach((key) => captureKey(key, false));
  //   };
  // }, [pressedKeys, callback, captureKey]);
};

export default useKonamiCode;