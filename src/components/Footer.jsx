import React from 'react'

const Footer = () => {
   const year=new Date().getFullYear()
  return (
    <div className='footer'>
        Designed and developed by Angelo Aste
        <br/>
        <span>Copyright &#xA9; {year} Angelo Aste</span>
        <div className='links'>
            <a href="https://github.com/AngeloAste"><i class="bi bi-github"></i></a>

        </div>
    </div>
  )
}

export default Footer
