import React from 'react';


let Skills = () => (
<div className='body'>
    <div className="h3-div">
        <h3 className="h3-head">Skills</h3>
        <div className="baseline"></div>
        <div className="baseline"></div>
    </div>
    <div className="skills">
        <div className="skills-div">
            <h3 className="skills-h3">Languages</h3>
            <p className="skills-p">HTML</p>
            <p className="skills-p">CSS</p>
            <p className="skills-p">JavaScript</p>
        </div>
        <div className="skills-div">
            <h3 className="skills-h3">Frontend</h3>
            <p className="skills-p">React</p>
            <p className="skills-p">Redux</p>
            <p className="skills-p">Flux</p>

        </div>
        <div className="skills-div">
            <h3 className="skills-h3">Backend</h3>
            <p className="skills-p">Express</p>
            <p className="skills-p">Mongoose</p>
            <p className="skills-p">Mocha/Chai</p>
        </div>
        <div className="skills-div">
            <h3 className="skills-h3">Databases</h3>
            <p className="skills-p">MongoDB</p>
        </div>
    </div>
</div>
);

export default Skills;