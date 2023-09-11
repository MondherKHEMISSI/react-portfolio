import React from 'react';
import { motion } from 'framer-motion';
import {
  faCss3,
  faGitAlt,
  faJava,
  faLinux,
  faPython,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const Logo = () => {
  return (
      <div className="logo-container">
        <div className="stage-cube-cont">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="red" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faLinux} color="black" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Logo; 

