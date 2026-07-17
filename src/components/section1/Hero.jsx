import CompanySlider from "../CompanySlider";

import {
FaBriefcase,
FaGraduationCap,
FaTrophy,
FaRobot,
FaBook,
FaUserTie
} from "react-icons/fa";
const Hero = () => {

return(
    <>
    <div className="hero">
        <h1>
            Your Next Opportunity Starts Here 🚀
        </h1>
        <p>
            Discover jobs, internships, competitions and courses.
        </p>
    </div>
    <div className="explore-section">

    <h2>
        Explore <span className="highlight">Opportunities</span>
    </h2>

    <div className="explore-grid">

        <div className="explore-card jobs">
            <FaBriefcase className="card-icon"/>
            <h4>Jobs</h4>
        </div>

        <div className="explore-card internships">
            <FaGraduationCap className="card-icon"/>
            <h4>Internships</h4>
        </div>

        <div className="explore-card competitions">
            <FaTrophy className="card-icon"/>
            <h4>Competitions</h4>
        </div>

        <div className="explore-card interview">
            <FaRobot className="card-icon"/>
            <h4>AI Interview</h4>
        </div>

        <div className="explore-card courses">
            <FaBook className="card-icon"/>
            <h4>Courses</h4>
        </div>

        <div className="explore-card mentorship">
            <FaUserTie className="card-icon"/>
            <h4>Mentorship</h4>
        </div>

    </div>

</div>
     <CompanySlider/>
     
     </>
)
}

export default Hero;