import { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'


function App() {
  const[data,setData]=useState(null)
  const[loading,setLoading]=useState(false)
  const[showModal,setShowModal]= useState(true);
  
  function handleToggleModal(){
    setShowModal(!showModal)
  }
  useEffect(()=>{
    async function fetchAPIData(params) {
      const NASA_KEY=import.meta.env.VITE_NASA_KEY
      const url='https://api.nasa.gov/planetary/apod?api_key='+NASA_KEY
      const today=(new Date()).toDateString()
      const localKey=`NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData=JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Fetched from Cache Today")
        return
      }
      localStorage.clear()

      try {
        const res=await fetch(url)
        const apiData=await res.json()
        localStorage.setItem(localKey,JSON.stringify(apiData))
        console.log("Fetched from API Today")
        setData(apiData)
        console.log('Data\n',data)
      } catch (error) {
        console.log(error)
        }
      }
  fetchAPIData()
},[])
  return (
    <>
        
        {data ?(<Main data={data}/>):(
          <div className='LoadingState'>
            <i className="fa-solid fa-gears"></i>
          </div>
        )}
        {showModal && (
        <Sidebar data={data} handleToggleModal={handleToggleModal}/>

        )}
        {data  && (<Footer data={data} handleToggleModal={handleToggleModal} />)}

    </>
  )
}

export default App
