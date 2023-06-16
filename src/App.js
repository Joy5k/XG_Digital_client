import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes';
import 'daisyui/dist/full.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
