const OpportunityCard = ({logo,title,company,location,packageText,type})=>{

    return(

        <div className="opportunity-card">

            <img src={logo} alt={company}/>

            <span>{type}</span>

            <h3>{title}</h3>

            <h4>{company}</h4>

            <p>{location}</p>

            <p>{packageText}</p>

            <button>Apply Now</button>

        </div>

    )

}

export default OpportunityCard;