
import Card from'./components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.oBVLUGJ3CmLu2qaEm_KfUwHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Meta Platforms Inc.",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hour",
    location: "Menlo Park, California, USA"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?w=225&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Seattle, Washington, USA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.xhm1ZvAyioctIr1hRGj6tAHaFj?w=200&h=150&c=6&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    companyName: "Apple Inc.",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Cupertino, California, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/022/100/813/non_2x/netflix-logo-transparent-free-png.png",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Los Gatos, California, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.arezqGrVeKUAmuKTaXGGEgHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Google LLC",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Mountain View, California, USA"
  },
  {
    brandLogo: "https://freepnglogo.com/images/all_img/1708533802microsoft-logo-transparent.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "AI Research Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$40/hour",
    location: "Redmond, Washington, USA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/R.557bb2ad9be47c90b06fa91e1c24026f?rik=H6svrHAkDTNDNA&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2014%2f07%2fTesla-Logo.jpg&ehk=SjHzaZwsOvXByWeDePkwC5PsUVmCkd7dM44tvilVqxc%3d&risl=&pid=ImgRaw&r=0",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Austin, Texas, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/190/499/original/nvidia-logo-nvidia-icon-free-free-vector.jpg",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Santa Clara, California, USA"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.rsybxQ4Wj6Vu4Ql1pXZYagHaEl?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "OpenAI",
    datePosted: "5 days ago",
    post: "Prompt Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "San Francisco, California, USA"
  },
  {
    brandLogo: "https://th.bing.com/th/id/R.31110f2554e4e025031291a9fa513b51?rik=XKyIJI%2bKiJM3YA&pid=ImgRaw&r=0",
    companyName: "Adobe Systems",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Kathmandu, Nepal"
  }
];

    

 
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){

console.log(idx);
      return <div key={idx}>
        <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2}  brandLogo={elem.brandLogo} pay={elem.pay} datePosted={elem.datePosted}/>
        </div>

      }
      
    
    )}
      

      </div>
 
  )
}

export default App
