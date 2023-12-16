 import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return { colorScheme };
}