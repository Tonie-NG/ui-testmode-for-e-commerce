import { EmailOutlined, Facebook, Instagram, PhoneAndroid, Room, Twitter } from '@material-ui/icons';
import './footer.css';

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="footerLeft">
            <h1 className="footerLogo">TONIE</h1>
            <p className="footerDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil sapiente distinctio ab iure iste aliquam libero aliquid. Molestias deserunt quasi sequi soluta placeat dolor earum, voluptatem aspernatur perferendis suscipit reprehenderit voluptas dolores dolorem sapiente assumenda, provident animi numquam veniam.</p>
            <div className="footerSocialContainer">
                <div className="footerSocialIcon">
                    <Facebook />
                </div>
                <div className="footerSocialIcon">
                    <Instagram/>
                </div>
                <div className="footerSocialIcon">
                    <Twitter/>
                </div> 
            </div>
        </div>
        <div className="footerCenter">
            <h3 className="footerTitle">Useful Links</h3>
            <ul className="footerList">
                <li className="footerListItem">Home</li>
                <li className="footerListItem">Cart</li>
                <li className="footerListItem">Men's Fashion</li>
                <li className="footerListItem">Women Fashion</li>
                <li className="footerListItem">Gadgets</li>
                <li className="footerListItem">My Account</li>
                <li className="footerListItem">Accessories</li>
                <li className="footerListItem">WishList</li>
                <li className="footerListItem">Terms and Conditions</li>
            </ul>
        </div>
        <div className="footerRight">
            <div className="footerTitle">CONTACT</div>
            <div className="footerContactItem"><Room style={{marginRight: '10px'}} />20th Braxton Street, Southern Carlifonia USA</div>
            <div className="footerContactItem"><PhoneAndroid style={{marginRight: '10px'}}/> +12 3456 789 10</div>
            <div className="footerContactItem"><EmailOutlined style={{marginRight: '10px'}}/> contact@tonie.shop</div>
            <img src="http://i.ibb.co/Qfvn4z6/payment.png" alt="" className="footerPayment" />
        </div>
    </div>
  )
}

export default Footer