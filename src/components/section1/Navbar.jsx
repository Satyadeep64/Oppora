import { useState, useEffect } from "react";
import { FaSearch, FaUserCircle, FaBell, FaFilter } from "react-icons/fa";

const Navbar = () => {

  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const placeholders = [
    "Search Jobs...",
    "Search Internships...",
    "Search Companies...",
    "Search Hackathons...",
    "Search Courses..."
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {

    const currentText = placeholders[index];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {

      if (!deleting) {

        setPlaceholder(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), 1000);
        }

      } else {

        setPlaceholder(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % placeholders.length);
        }
      }

    }, speed);

    return () => clearTimeout(timer);

  }, [charIndex, deleting, index]);


  const handleSearch = () => {
    if (search.trim() === "") return;
    console.log("Searching for:", search);
  };


  return (
    <nav className="navbar">

      <h1>
        <span className="logo7">O</span>PPORA
      </h1>

      <div className="search-bar">

        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>
          <FaSearch />
        </button>

      </div>

      <div className="filter">

        <button
          className="filter-btn"
          onClick={() => setShowFilter(!showFilter)}
        >
          <FaFilter />
          Filters
        </button>

        {showFilter && (
          <div className="filter-box">
            <h4>Filter Jobs</h4>

            <label>
              <input type="checkbox" />
              Full Time
            </label>

            <label>
              <input type="checkbox" />
              Internship
            </label>

            <label>
              <input type="checkbox" />
              Remote
            </label>

            <label>
              <input type="checkbox" />
              Work From Home
            </label>

          </div>
        )}

      </div>

      <div className="nav-right">

        <div className="notification">

          <button
            className="notification-btn"
            onClick={() => setShowNotification(!showNotification)}
          >
            <FaBell />
          </button>

          {showNotification && (
            <div className="notification-box">
              <h4>Notifications</h4>
              <p>New internship available</p>
              <p>Your application was viewed</p>
              <p>Interview scheduled</p>
            </div>
          )}

        </div>

        <div className="profile">

          <div
            className="profile-icon"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaUserCircle />
          </div>

          {showMenu && (
            <div className="profile-menu">
              <div>My Profile</div>
              <div>My Courses</div>
              <div>Saved Jobs</div>
              <div>Settings</div>
              <div>Logout</div>
            </div>
          )}

        </div>

        <div className="logout">
          <button className="logoutbtn">
            Logout
          </button>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;