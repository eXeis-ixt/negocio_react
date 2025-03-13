import React from 'react'

const Footer = () => {
    const today = new Date()
  return (
    <footer className=' shadow-2xl text-lg text-center py-4 '>
        All copyrights reserved to Communic © 2011 - {today.getFullYear()} | <span className=' text-muted-foreground'> <a href="https://facebook.com/adons.org" target='_blank'> Powered by Adons Tech</a></span>
    </footer>
  )
}

export default Footer
