import Pages from './Pages/Pages';
import "./App.css"
import { useEffect, useState } from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { AiOutlineWechat } from "react-icons/ai"

function App() {
  const [ShowGoToTop, setShowGotoTop] = useState(false)

  const handleMoveToTop = () => {
    document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowGotoTop(window.scrollY >= 100)
    }
    window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }

  }, [])

  return (
    <div className="App">
      <Pages />
      {ShowGoToTop ?
        <div className='moveToTop' onClick={() => handleMoveToTop()}>
          <MdOutlineArrowBackIosNew className='moveToTop__icon' />
        </div> : ""}
      <div className='contact-admin'>
        <AiOutlineWechat className='contact-admin__icon' />
      </div>
    </div>
  )
}

export default App;
