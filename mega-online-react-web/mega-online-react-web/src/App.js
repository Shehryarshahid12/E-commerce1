
import Routers from './Routes/Routers';
import {BrowserRouter} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Theme from './assets/Themes/Theme';
import { GlobalStyle } from './assets/Themes/Styles/GlobalStyle';
import { SherryGlobalStyle } from './assets/Themes/Styles/SherryGlobalStyle';
import "react-multi-carousel/lib/styles.css";


function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle/>
        <SherryGlobalStyle/>
        <Header/>
          <Routers/>
        <Footer/>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
