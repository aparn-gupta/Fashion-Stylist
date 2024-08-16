import './App.css'
import Sidebar from './Sidebar'
import Main from './MainComponent'
import ContextProvider from './Context/Context'

function App() {
 

  return (
    <>
 <ContextProvider>
 <div className="flex">
  <Sidebar />
  <Main />
</div>
 </ContextProvider>
    </>
  )
}

export default App
