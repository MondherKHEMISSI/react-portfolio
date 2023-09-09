import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faJava,
  faLinux,
  faPython,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import TagCloud from "TagCloud";
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Python",
        "Vite",
        "NodeJS",
        "Java",
        "Linux",
        "Firebase",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
  }, []);


  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
        </div>
              
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills

