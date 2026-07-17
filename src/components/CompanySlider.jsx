
import {
    FaGoogle,
    FaMicrosoft,
    FaAmazon,
    FaApple,
    FaFacebook,
    FaLinkedin
} from "react-icons/fa";


const CompanySlider = () => {

   
const companies = [
    {
        name:"Google",
        icon:<FaGoogle/>,
        color:"#4285F4"
    },
    {
        name:"Microsoft",
        icon:<FaMicrosoft/>,
        color:"#00A4EF"
    },
    {
        name:"Amazon",
        icon:<FaAmazon/>,
        color:"#FF9900"
    },
    {
        name:"Apple",
        icon:<FaApple/>,
        color:"#000000"
    },
    {
        name:"LinkedIn",
        icon:<FaLinkedin/>,
        color:"#0A66C2"
    },
    {
        name:"Meta",
        icon:<FaFacebook/>,
        color:"#1877F2"
    }
];


return(
    
<div className="company-container">
    <h2 className="Trusted"><span className="Trustedword">Trusted</span>{" "} by Top Recruiters</h2>

<div className="company-track">
     

{
companies.concat(companies).map((company,index)=>(

<div 
className="company-logo"
key={index}
style={{color:company.color}}
>

{company.icon}

<span>
{company.name}
</span>

</div>

))
}

</div>

</div>
)

}

export default CompanySlider;