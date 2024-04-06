import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import Routers from "./pages/Routers";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {Provider} from "react-redux";
import store from "./store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
      <ChakraProvider>
          <Provider store={store}>
              <BrowserRouter>
                  <Routers/>
              </BrowserRouter>
          </Provider>
          <ToastContainer
          theme="dark"
          />
      </ChakraProvider>
    );
}

export default App;
