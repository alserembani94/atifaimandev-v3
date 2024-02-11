import { useState, useEffect } from 'react';
import useKeyCapture from 'use-key-capture';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const useKonamiCode = (callback: () => void) => {
  const { keyData } = useKeyCapture();
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    if (keyData.key) setKeySequence((prevKeySequence) => {
      const newKeySequence = [...prevKeySequence, keyData.key];
      if (newKeySequence.length > konamiCode.length) {
        newKeySequence.shift();
      }
      return newKeySequence;
    });
  }, [keyData]);

  useEffect(() => {
    const keyInterval = setInterval(() => {
      setKeySequence((prevKeySequence) => {
        const newKeySequence = [...prevKeySequence];
        newKeySequence.shift();
        return newKeySequence;
      });
    }, 1000);

    if (keySequence.length === 0) {
      clearInterval(keyInterval);
    }

    return () => clearInterval(keyInterval);
  }, [keySequence]);

  useEffect(() => {
    if (keySequence.join('') === konamiCode.join('')) {
      callback();
    }
  }, [keySequence, callback]);
};

export default useKonamiCode;