import { Send } from '@material-ui/icons'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletterContainer">
        <h1 className="newsletterTitle">Newsletter</h1>
        <div className="newsletterDescription">Lorem ipsum, dolor sit amet consectetur adipisicing</div>
        <div className="newsletterInputContainer">
            <input type="text" placeholder='Enter your Email Address' className="newsletterInput" />
            <button className="newsletterButton">
                <Send />
            </button>
        </div>
    </div>
  )
}

export default Newsletter