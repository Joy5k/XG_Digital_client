import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;