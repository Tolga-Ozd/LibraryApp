import DataContextProvider from './context/DataContext';
import AppRouter from './router/AppRouter';

function App() {
  return (

    <div className="App">
        <DataContextProvider>
          <AppRouter/>
        </DataContextProvider>
    </div>

  );
}

export default App;
