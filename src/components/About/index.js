import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import './index.scss'
import { MdWork } from "react-icons/md";


const About = () => {
  return (
    <>
      <div className="experience">
        <VerticalTimeline lineColor="#ffd700">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2024"
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
              Master II ISTR | Université de Toulouse III - Paul Sabatier
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Toulouse, France
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Février 2021 – Août 2021 "
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={ < MdWork  color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
            Stage Pratique | SIDER (Complexe sidérurgique d’El Hadjar)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Automaticien
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2021"
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
              Master II Commande électrique |  Université Badji Mokthar-Annaba
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Diplome Master II
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai 2019 – Jul 2019"
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={< MdWork color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
            Stage découverte | SEAAL
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Electrotechnicien
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2019"
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
            Licence LMD spécialité électrotechnique | Université Badji Mokthar-Annaba
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Diplome Licence
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
              BAC Scientifique | Lycée colonel Amara el Askri
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
            Diplome Baccalauréat
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Loader type="pacman" />
    </>
  )  
}

export default About