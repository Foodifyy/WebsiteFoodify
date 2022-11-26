import React,{useContext} from 'react'
import '../style/service.css';
import {useThemeContext} from '../context/UsethemecontextProvider'

const Service = () => {
  const {state} = useContext(useThemeContext);
  return (
    <div className={`serviceContainer  ${state.background}  transition-all duration-500`} id='service' > 
      <div className={`Head maxWidth ${state.font}`}>
        OUR TECHNOLOGY
      </div>

      <div className='offerBox maxWidth'>
        <div className='feature' >
          <div className='imageBox'>
            <img src={require('../assets/imageScanimg.PNG')} alt="featuring scan"/>
          </div>
          <div className='infoBox'>
            <h1 className={`infoBoxHead ${state.font}`}> <strong style={{color:"#77efc7"}}>&#8968;</strong> FOOD SCANNING <strong style={{color:"#77efc7"}}>&#8971;</strong> </h1>
            <p className={`infoBoxPara ${state.font}`}>Leveraging the use of AI to depict nutritional values of every day food items through your device camera.</p>
          </div>
        </div>
        
        <div className='feature' >
          <div className='infoBox'>
            <h1 className={`infoBoxHead ${state.font}`}> <strong style={{color:"#77efc7"}}>&#8968;</strong> CALORIE & NUTRIENT TRACKING <strong style={{color:"#77efc7"}}>&#8971;</strong> </h1>
            <p className={`infoBoxPara ${state.font}`}>Record your daily detailed calorie intake, better control over food diet.</p>
          </div>
          <div className='imageBox'>
            <img src={require('../assets/foodTrackimg.PNG')} alt="featuring scan"/>
          </div>
        </div>

        <div className='feature' >
          <div className='imageBox'>
            <img src={require('../assets/communityImg.PNG')} alt="featuring scan"/>
          </div>
          <div className='infoBox'>
            <h1 className={`infoBoxPara ${state.font}`}> <strong style={{color:"#77efc7"}}>&#8968;</strong> COMMUNITY BUILDING & BRAND PROMOTION <strong style={{color:"#77efc7"}}>&#8971;</strong> </h1>
            <p className={`infoBoxPara ${state.font}`}>Community of Like-minded & Health conscious individuals, targeting ads to a specific domain, cheaper 'Cost Per Click' for brands. </p>
          </div>
        </div>

        <div className='feature' >
          <div className='infoBox'>
            <h1 className='infoHeadButton curPointer absoluteCenter'>
              <a className='linkDecor' href='https://foodify-axios-image-api-test.ishkapoor.repl.co/' target='_blank' rel='noreferrer'>
                 TRY NOW 
              </a>
            </h1>
            <p className={`infoBoxPara ${state.font}`}>Our ML model is one of the best architecture that we've developed whose core is based on faster inference and accurate results.</p>
          </div>
          <div className='imageBox'>
            <img src={require('../assets/ourDemo.png')} alt="featuring scan"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Service
