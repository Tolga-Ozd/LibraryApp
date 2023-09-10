import { ThemeProvider } from 'styled-components';
// import DataContextProvider from './context/DataContext';
import AppRouter from './router/AppRouter';
import { useThemeContext } from './context/ThemeContext';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/Global.styles';
import AuthContextProvider from './context/AuthContext';

function App() {

  //consuming
  const {myTheme} = useThemeContext()
  const themes = myTheme === "light" ? lightTheme : darkTheme

  return (
 
    <div className="App">
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <AuthContextProvider>
          <AppRouter/>
        </AuthContextProvider>
      </ThemeProvider>
    </div>

  );
}

export default App;
