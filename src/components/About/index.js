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

const About = () => {
  return (
    <>
      <div className="experience">
        <VerticalTimeline lineColor="#ffd700">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            dateClassName="first"
            iconStyle={{ background: "#022c43", color: "#ffd700" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} color="#FFD700" />}
          >
            <h3 className="vertical-timeline-element-title">
              My Random High School, Random Place, Random State
            </h3>
            <p> High School Diploma</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faSchool} color="#FFD43B" />}
          >
            <h3 className="vertical-timeline-element-title">
              My Cool University, Vancouver, British Columbia
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree
            </h4>

            <p> Computer Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faSchool} color="#FFD43B" />}
          >
            <h3 className="vertical-timeline-element-title">
              Back End Engineer - Google
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>Developed the backend infrastructure for 3 projects.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faSchool} color="#FFD43B" />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer - Twitch
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Helped the team launch 2 major features by working both in the front
              end and back end.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Loader type="pacman" />
    </>
  )  
}

export default About