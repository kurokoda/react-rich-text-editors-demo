import { ApplicationRouter } from "./components/navigation/applicationRouter";
import { ApplicationNavBar } from "./components/navigation/applicationNavBar";
import { ApplicationContainer } from "./styledComponents/applicationContainer";

function App() {
  return (
    <ApplicationContainer>
      <ApplicationNavBar />
     <ApplicationRouter />
    </ApplicationContainer>
  );
}

export default App;
