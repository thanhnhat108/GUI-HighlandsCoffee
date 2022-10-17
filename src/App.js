import Pages from './Pages/Pages';
import "./App.css"
import { useEffect, useState } from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { AiOutlineWechat } from "react-icons/ai"

function App() {
  const [ShowGoToTop, setShowGotoTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGotoTop(window.scrollY >= 100)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="App">
      <Pages />
      {ShowGoToTop ?
        <div className='moveToTop'>
          <MdOutlineArrowBackIosNew className='moveToTop__icon' />
        </div> : ""}
      <div className='contact-admin'>
        <AiOutlineWechat className='contact-admin__icon' />
      </div>
    </div>
  )
}

export default App;
