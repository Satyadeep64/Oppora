import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaBriefcase,
    FaGraduationCap,
    FaTrophy,
    FaUserTie,
    FaClipboardCheck,
    FaCode,
    FaBook,
    FaUser,
    FaGift,
    FaAward,
    FaCog,
    FaPlus
} from "react-icons/fa";
const Sidebar = () => {
return(
    <div className="sidebar">
        <button className="post-btn">
            <FaPlus/>
            Post
        </button>
        <div className="menu">
            <NavLink to="/">
                <FaHome/>
                Home
            </NavLink>
            <NavLink to="/internships">
                <FaGraduationCap/>
                Internships
            </NavLink>
            <NavLink to="/jobs">
                <FaBriefcase/>
                Jobs
            </NavLink>
            <NavLink to="/competitions">
                <FaTrophy/>
                Competitions
            </NavLink>
            <NavLink to="/mentorship">
                <FaUserTie/>
                Mentorship
            </NavLink>
            <NavLink to="/mock-tests">
                <FaClipboardCheck/>
                Mock Tests
            </NavLink>
            <NavLink to="/mock-interview">
                <FaUserTie/>
                AI Mock Interview
            </NavLink>
            <NavLink to="/100-days-code">
                <FaCode/>
                100 Days to Code
            </NavLink>
            <NavLink to="/courses">
                <FaBook/>
                Courses
            </NavLink>
        </div>
        <hr/>
        <div className="menu">
            <h5>My Activity</h5>
            <NavLink to="/activity">
                <FaUser/>
                My Activity
            </NavLink>
        </div>


        <hr/>


        <div className="menu">

            <h5>Other</h5>

            <NavLink to="/referrals">
                <FaGift/>
                Referrals
            </NavLink>


            <NavLink to="/awards">
                <FaAward/>
                Oppora Awards
            </NavLink>


            <NavLink to="/settings">
                <FaCog/>
                Settings
            </NavLink>

        </div>

    </div>
)

}

export default Sidebar;