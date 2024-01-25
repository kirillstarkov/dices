import { render } from "react-dom";
import App from "./app/App";
import {ThemeProvider} from "app/providers/theme-provider";
import { BrowserRouter } from "react-router-dom";
import {StoreProvider} from "store/ui/store-provider";

render(
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
    ,
    document.getElementById('root'),
    );
