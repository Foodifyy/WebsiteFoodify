import React,{useContext} from 'react'
import '../style/aboutus.css'
import PartnerCard from './subcomponent/partnerCard';
import {useThemeContext} from '../context/UsethemecontextProvider'

const AboutUs = () => {
  const {state} = useContext(useThemeContext);

  const mottoArr = [
    {
      id : 1,
      subHead : "OUR STORY",
      subPara : "Bunch of kids from a tier 3 college had a vision to prove themself and have an impact on this world, we're on a mission to change the PERCEPTION of everyone towards health. We believe it is never about tech or platform or idea, It is about execution and that is our motive.",
      icon : require('../assets/ourStory.png')
    },
    {
      id : 2,
      subHead : "OUR VISION",
      subPara : "Our Vision is greater than any other purpose. Our motioves are greater than placements or job. We want to revamp how we percieve health & tech together. Health food can now be tracked with just one click. Let's build a community for people who believe in a healthy lifestyle.",
      icon : require('../assets/ourVision.png')
    },
    {
      id : 3,
      subHead : "OUR TECH",
      subPara : "We are leveraging the use of AI to calculate nutritional values of food items through mobile’s camera. Our algo calculates and tracks your daily nutritional values just by a click. Bringing you closer to the community of like minded people with the help of Recommender systems",
      icon : require('../assets/ourTechnology.png')
    },
  ]

  const partnersArr = [
    {
      id : 1,
      name : "Kuwar Kapur",
      designation : "Backend & ML Engineer",
      pic : require('../assets/partnersImg/kuwar.jpg'),
      alignSelf : "flex-start"
    },
    {
      id : 2,
      name : "Ankit Kumar",
      designation : "Data Scientist & ML Engineer",
      pic : require('../assets/partnersImg/ankit.jpg'),
      alignSelf : "flex-end"
    },
    {
      id : 3,
      name : "Ish Kapoor",
      designation : "Mentor",
      pic : require('../assets/partnersImg/ish.jpeg'),
      alignSelf : "flex-start"
    },
    {
      id : 4,
      name : "Sumit Kumar",
      designation : "Software Developer",
      pic : require('../assets/partnersImg/sumit_2.png'),
      alignSelf : "flex-end"
    },
    {
      id : 5,
      name : "Risheek Jain",
      designation : "Business Development",
      pic : require('../assets/partnersImg/risheek.jpeg'),
      alignSelf : "flex-start"
    },
    {
      id : 6,
      name : "Hemant",
      designation : "Data Scientist & ML Engineer",
      pic : require('../assets/partnersImg/hemant.jpeg'),
      alignSelf : "flex-end"
    }
  ]

  return (
    <div className={`aboutUsContainer  transition-all duration-500`}
      style={{backgroundColor:`${state.background}`}}
    id='about'>
      <div className={`Head maxWidth `} style={{color:state.flag ? "black" : "white"}}>
        WHO ARE WE
      </div>

      <div className='maxWidth cardContainer '>
        {partnersArr.map(card => {
          return <PartnerCard key={card.id} name={card.name} designation={card.designation} pic={card.pic} alignSelf={card.alignSelf}/>
        })}
      </div>  

      <div className='mottoContainer'>
          <div className='mottos '>
            {mottoArr.map(item => {
              return <div key={item.id} className="mottoBox">
                <div className='mottoIcon'>
                  <img src={item.icon} alt="motoIcon" className="iconImg"/>
                </div>
                <div className='mottoText'>
                    <h2>{item.subHead}</h2>
                    <p>{item.subPara}</p>
                </div>
              </div>
            })}
          </div>
      </div>

    </div>
  )
}

export default AboutUs
