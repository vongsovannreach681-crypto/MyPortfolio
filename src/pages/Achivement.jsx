import React from 'react'
import Achivment from '../assets/PDF/Reach.pdf'
import Header from '../components/Header'
const Achivement = () => {
  return (
    <>
        <Header />
        <iframe src={Achivment} title="Achivement" width="80%" className='mx-auto mt-20 h-[90vh] rounded-lg border border-white/20 shadow-2xl' allowFullScreen>

        </iframe>
    </>
  )
}

export default Achivement