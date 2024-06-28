import React from "react";
import "./ScreenStyle.css";
import hqnike from "./assets/hqnike.jpg";

export default function Joinusscreen() {
  return (
    <div className="maindivjoin">
      <div>
        <div className="infoofthis">
          <h1 className="hiringinfo">We are Hiring Employees</h1>
          <p className="newinfo">Open Positions Listed Below.</p>
        </div>

        <div style={{ display: "flex" }}>
          <div className="hiringcard">
            <h2 className="position">Senior Software Developer</h2>
            <h3 className="req">Requirements:</h3>
            <div className="detailreq">
              <ol>
                <li>
                  <strong>Extensive Experience in Software Development</strong>
                </li>
                <li>
                  <strong>Advanced Problem-Solving and Analytical Skills</strong>
                </li>
                <li>
                  <strong>Leadership and Mentorship Abilities</strong>
                </li>
                <li>
                  <strong>Commitment to Best Practices and Continuous Improvement</strong>
                </li>
              </ol>
              <a href="/apply"><button className="applybtn">Apply Now</button> </a>  
            </div>
          </div>

          <div className="hiringcard">
            <h2 className="position">Product Designer</h2>
            <h3 className="req">Requirements:</h3>
            <div className="detailreq">
              <ol>
                <li>
                  <strong>Proven Experience in Product Design</strong>
                </li>
                <li>
                  <strong>Proficiency in Design Tools (e.g., Sketch, Figma, Adobe XD)</strong>
                </li>
                <li>
                  <strong>Strong Understanding of User-Centered Design Principles</strong>
                </li>
                <li>
                  <strong>Excellent Communication and Collaboration Skills</strong>
                </li>
              </ol>
              <a href="/apply"><button className="applybtn">Apply Now</button> </a>  
            </div>
          </div>

          <div className="hiringcard">
            <h2 className="position">Database Manager</h2>
            <h3 className="req">Requirements:</h3>
            <div className="detailreq">
              <ol>
                <li>
                  <strong>Extensive Experience in Database Management</strong>
                </li>
                <li>
                  <strong>Proficiency in SQL and Database Management Systems</strong>
                </li>
                <li>
                  <strong>Strong Analytical and Problem-Solving Skills</strong>
                </li>
                <li>
                  <strong>Ability to Ensure Data Integrity and Security</strong>
                </li>
              </ol>
             <a href="/apply"><button className="applybtn">Apply Now</button> </a>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
