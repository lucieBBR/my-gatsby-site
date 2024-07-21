
import * as React from 'react';
import { ReactTyped } from "react-typed";
import "./myIntro.module.css";
import {
  introText,
  greeting,
  aboutText
} from "./myIntro.module.css";

console.log("here", ReactTyped); // Add this line to check if Typed is imported correctly


const MyIntro = () => {
  return (
      <div className={introText}>
        <ReactTyped
        strings={[
            "Hi. I'm Lucie.\nA fullstack developer."
        ]}
        typeSpeed={60}
        backSpeed={20}
        backDelay={5000}
        attr="placeholder"
        loop
        >
        <textarea readOnly className={greeting}/>
        </ReactTyped>

        <br />

        <ReactTyped
        strings={[
            "I'm passionate about sustainability and projects with a positive social impact."
        ]}
        typeSpeed={40}
        backSpeed={5}
        startDelay={3000}
        attr="placeholder"
        loop
        >
        <textarea readOnly className={aboutText}/>
        </ReactTyped>
      </div>
  )
}

export default MyIntro