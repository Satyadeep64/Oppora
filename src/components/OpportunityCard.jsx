const OpportunityCard = ({
    logo,
    title,
    company,
    location,
    packageText,
    type
}) => {
    return (
        <div className="opportunity-card">
            {/* Company Section */}

            <div className="company-header">
                <img 
                    src={logo} 
                    alt={company}
                />
                <div>
                    <div className="company-name">
                        {company || "Google"}
                    </div>
                    <div className="company-location">
                        📍 {location}
                    </div>
                </div>
            </div>
            {/* Main Details */}
            <div className="card-body">
                <span className={`tag ${type === "Internship" ? "internship" : "job"}`}>
                    {type || "Job"}
                </span>
                <h3>
                    {title}
                </h3>
                <p className="description">
                    Build scalable products and work with modern technologies.
                </p>
                <div className="details">
                    <span>
                        💰 {packageText}
                    </span>
                    <span>
                        📍 {location}
                    </span>
                    <span>
                        ⚡ Full Time
                    </span>
                </div>
                <button>
                    Apply Now
                </button>
            </div>
        </div>
    )}

export default OpportunityCard;