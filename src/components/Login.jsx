import { useState } from "react";

const Login = () => {

  const [activeTab, setActiveTab] = useState("login");

  const role = localStorage.getItem("userRole");

  return (
    <div className="parent">
      <div className="box">
 
        <div className="loginpic">
            <div className="brand">

       <h1>
    <span className="logo7">O</span>PPORA
</h1>

    </div>

        </div>
        
        <div className="parentinput">
          <div className="input1">
           <h2 id="id1">
{ role === "Recruiter"?"Build Your Team With Oppora":"Your Next Opportunity Starts Here"}

</h2>
          </div>
      <h5 id="id2">
{
role === "Recruiter"
?
"Login to post jobs and find talented candidates."
:
"Login to discover jobs, internships and opportunities."
}
</h5>

          <div className="userinput">
             
            {/* Login Signup Buttons */}
            <div className="loginSignup">

              <button
                className={`bt1 ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`bt2 ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>
            
            {/* Login Form */}
            {
              activeTab === "login" && (

                <>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Mail"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>
                  <div className="form-group">

                    <label htmlFor="password">
                      Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="forgot-password">
                      <a href="#">
                      Forgot Password?
                    </a>
                 </div>
                  <div className="bt3">
                    <button >
                      Login
                    </button>
                  </div>
                </>
              )
            }
            {/* Signup Form */}

            {
              activeTab === "signup" && (
                <>
                  <div className="form-group">

                    <label htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Your Name"
                      required
                    />

                  </div>
                  
                  <div className="form-group">

                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Mail"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Create Password"
                      required
                    />
                  </div>
                  <div className="forgot-password">
                      <a href="#">
                      Forgot Password?
                    </a>
                 </div>
                  <div className="bt3">
                    <button >
                      Sign Up
                    </button>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
</div>
  )
}


export default Login;