import './Footer.css'

const Footer = () => (
  <footer className='footer'>
      <p>© {new Date().getFullYear()} Mmesoma Udensi</p>

      <div className='footer__social'>
        <a href='https://github.com/udensidev' aria-label='GitHub'>
          <GitHubIcon />
        </a>
        <a href='https://linkedin.com/in/mmesomaudensi' aria-label='LinkedIn'>
          <LinkedInIcon />
        </a>
      </div>

      <p className='footer__credit'>
        Template by Raj Shekhar
      </p>
    </footer>
)

export default Footer
