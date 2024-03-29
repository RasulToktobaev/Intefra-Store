import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import Routers from "./pages/Routers";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {Provider} from "react-redux";
import store from "./store";



function App() {
    return (
      <ChakraProvider>
          <Provider store={store}>
              <BrowserRouter>
                  <Routers/>
              </BrowserRouter>
          </Provider>

      </ChakraProvider>
    );
}

export default App;
