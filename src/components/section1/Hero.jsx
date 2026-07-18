import CompanySlider from "../CompanySlider";

import {
    BriefcaseBusiness,
    GraduationCap,
    Trophy,
    Bot,
    BookOpen,
    UsersRound
} from "lucide-react";


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
    <div className="icon-box">
        <BriefcaseBusiness/>
    </div>
    <h4>Jobs</h4>
</div>
<div className="explore-card internships">
    <div className="icon-box">
        <GraduationCap/>
    </div>
    <h4>Internships</h4>
</div>
<div className="explore-card competitions">
    <div className="icon-box">
        <Trophy/>
    </div>
    <h4>Competitions</h4>
</div>
<div className="explore-card interview">

    <div className="icon-box">
        <Bot/>
    </div>
    <h4>AI Interview</h4>
</div>
<div className="explore-card courses">

    <div className="icon-box">
        <BookOpen/>
    </div>

    <h4>Courses</h4>

</div>
<div className="explore-card mentorship">

    <div className="icon-box">
        <UsersRound/>
    </div>
    <h4>Resume Analyser</h4>
</div>
</div>
</div>
<CompanySlider/>

</>
)

}

export default Hero;