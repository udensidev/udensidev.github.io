import './Footer.css'

const Footer = () => (
  <footer className='footer'>
      <p>© {new Date().getFullYear()} Mmesoma Udensi</p>

      <a
      href='https://github.com/rjshkhr/cleanfolio'
      className='link footer__link'
      >
      Created By Raj Shekhar
      </a>
    </footer>
)

export default Footer
