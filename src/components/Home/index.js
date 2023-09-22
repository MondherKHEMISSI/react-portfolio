import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/mLetter.png'
import Logo from './Logo'
import './index.scss'
import CV from '../../assets/CV-KHEMISSI.pdf'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'ondher'.split("")}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"software engineer.".split("")}
              idx={18}
            />
          </h1>
          <h2>Full-Satck Developer / Real-Time Embedded Software Engineer / RAMS Engineer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a
              className="flat-button"
              target="_blank"
              rel="noreferrer"
              href={CV}
              >DOWNLOAD CV
          </a>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
