import { Route, Routes } from 'react-router-dom';
import GistsListingPage from "./pages/GistsListingPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' exact element={<GistsListingPage/>} />
    </Routes>
  );
}

export default App;
