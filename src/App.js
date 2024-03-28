import './App.css';
import { BrowserRouter} from 'react-router-dom';
import ThemeRoutes from './ThemeRoutes';
import { RecoilRoot } from 'recoil';
import "./ALL-Theme/SMININGROCKS/Pages/fonts.css"

function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;