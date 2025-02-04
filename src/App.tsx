import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import ImageGallery from './pages/ImageGalleryPage'
import News from './pages/NewsPage';
import Weather from './pages/WeatherPage';
import NotFoundPage from './pages/NotFoundPage';
import NavbarComponent from './components/NavbarComponent';
import WeatherCityPage from './pages/WeatherCityPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ImageGallery />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/weather',
    element: <Weather />
  },
  {
    path: '/weather/:city',
    element: <WeatherCityPage />
  }
]);

function App() {

  return (
    <div className="p-10">
      {/* <RouterProvider router={router}>
        
      </RouterProvider> */}
      <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<ImageGallery />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        <Route path='/weather/:city' element={<WeatherCityPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
