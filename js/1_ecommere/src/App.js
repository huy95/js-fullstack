import { BrowserRouter } from "react-router-dom";
import Nav from "./comp/nav";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
