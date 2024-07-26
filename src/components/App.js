import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
    <h1 data-ns-test="project1">Project1</h1>
    <p data-ns-test="project-description1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      <h2 data-ns-test="project2">Project2</h2>
    <p data-ns-test="project-description2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <h3 data-ns-test="project3">Project3</h3>
    <p data-ns-test="project-description3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <h4 data-ns-test="project4">Project4</h4>
    <p data-ns-test="project-description4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <h5 data-ns-test="project5">Project5</h5>
    <p data-ns-test="project-description5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        <h6 data-ns-test="project6">Project6</h6>
    <p data-ns-test="project-description6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
    </div>
  )
}


export default App;
