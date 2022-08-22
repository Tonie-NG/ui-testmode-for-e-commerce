import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import  './slider.css'

const Slider = () => {
  return (
    <div className="sliderContainer">
        <div className="sliderArrow sliderLeft">
            <ArrowLeftOutlined />
        </div>
        <div className="sliderWrapper">
            <div className="sliderSlide slide1">
                <div className="sliderImgContainer">
                    <img src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=525&q=80" alt="" className="sliderImage" />
                </div>
                <div className="sliderInfoContainer">
                    <h1 className="sliderTitle">Summer Sale</h1>
                    <p className="sliderDesc">Come get those Killer wears for a cheap price from the best Shop in town</p>
                    <button className="sliderButton">Shop now</button>
                </div>
            </div>
        </div>
        <div className="sliderArrow sliderRight">
            <ArrowRightOutlined />
        </div>
        
    </div>
  )
}

export default Slider