import { Route, Routes } from 'react-router-dom';
import { Navbar } from './app/components/navbar';
import { AuthPage } from './app/containers/AuthPage/index';
import { HomePage } from './app/containers/HomePage/index';
import { MainPage } from './app/containers/MainPage/index';
import { AppContainer } from './styles';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
