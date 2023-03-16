import fbLogo from './assets/fb.png'
import instLogo from './assets/inst.png'
import './App.css'

function App() {
  

  return (
    <div className="App">
       <div>
        <a href="https://www.instagram.com/sfisomuzi0/" target="_blank">
          <img src={instLogo}className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.facebook.com/HuccGreen/" target="_blank">
          <img src={fbLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
      <h1>Krieytive Website Coming Soon</h1>
      
      <p className="read-the-docs">
        Click on the above icons to go to the respective social media accounts.
      </p>
    </div>
  )
}

export default App
