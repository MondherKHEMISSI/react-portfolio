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
            Master II ISTR | University of Toulouse III - Paul Sabatier
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Toulouse, France
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Feb 2021 – Aug 2021 "
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={ < MdWork  color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
            Internship | SIDER (El Hadjar Steel Complex)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Automation engineer
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
              Master II Electrical Control |  Badji Mokthar-Annaba University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Master’s degree
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2019 – July 2019"
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={< MdWork color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
              Internship | SEAAL
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Electrotechnician
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
              Bachelor’s in Electrical Engineering | Badji Mokthar-Annaba University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's degree
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
              Baccalaureate | High school colonel Amara el Askri
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Baccalaureate diploma
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )  
}

export default About