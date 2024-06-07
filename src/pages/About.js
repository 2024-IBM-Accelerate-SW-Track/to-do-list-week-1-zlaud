import React, { Component } from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profile}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Zophia Laud</div>
              <div className="brief_description">
                My name is Zophia, and I'm an incoming third-year computer
                science. I have an interest in full-stack development and
                machine learning. In my free time, I like to read books, play
                video games, and going for drives.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
