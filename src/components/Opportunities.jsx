import OpportunityCard from "./OpportunityCard";
import {jobs,internships} from "./section1/OpportunitiesData";

const Opportunities=()=>{

return(

<>

<section className="opportunity-section">

    <div className="section-header">

        <h2>
            Trending <span className="highlight">Jobs</span>
        </h2>

        <button className="view-all-btn">
            View All →
        </button>

    </div>

    <div className="opportunity-grid">

        {jobs.map(job=>(

            <OpportunityCard
                key={job.id}
                {...job}
            />

        ))}

    </div>

</section>



<section className="opportunity-section">

    <div className="section-header">

        <h2>
            Trending <span className="highlight">Internships</span>
        </h2>

        <button className="view-all-btn">
            View All →
        </button>

    </div>

    <div className="opportunity-grid">

        {internships.map(internship=>(

            <OpportunityCard
                key={internship.id}
                {...internship}
            />

        ))}

    </div>

</section>

</>

)

}

export default Opportunities;