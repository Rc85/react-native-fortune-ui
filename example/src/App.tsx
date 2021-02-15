import * as React from 'react';
import { Container, ThemeContext } from 'react-native-fortune-ui';
import Alerts from './components/Alerts';
import ButtonGroups from './components/ButtonGroups';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import CheckBoxes from './components/CheckBoxes';
import Chips from './components/Chips';
import Colors from './components/Colors';
import IconButtons from './components/IconButtons';
import Inputs from './components/Inputs';
import RadioGroups from './components/RadioGroups';
import Tab from './components/Tab';
import Typography from './components/Typography';

export default function App() {
  const [themeName, setThemeName] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = themeName === 'light' ? 'dark' : 'light';

    setThemeName(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggle: toggleTheme }}>
      <Container>
        <Colors />

        <Typography />

        <Buttons />

        <ButtonGroups />

        <Alerts />

        <CheckBoxes />

        <Chips />

        <RadioGroups />

        <Tab />

        <IconButtons />

        <Inputs />

        <Cards />
      </Container>
    </ThemeContext.Provider>
  );
}
