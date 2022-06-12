import ReactDOM from "react-dom";
import App from "./components/app/App";
import "./index.scss";
import { StoreProvider } from "./services/store";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
