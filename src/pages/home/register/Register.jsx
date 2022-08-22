import './register.css'

const Register = () => {
  return (
    <div className="registerContainer">
        <div className="registerWrapper">
            <h1 className="registerTitle">SIGN UP</h1>
            <form className="registerForm">
              <input type="text" className="registerFormInput" placeholder='First Name'/>
              <input type="text" className="registerFormInput" placeholder='Last Name'/>
              <input type="text" className="registerFormInput" placeholder='Username'/>
              <input type="email" className="registerFormInput" placeholder='Email'/>
              <input type="text" className="registerFormInput" placeholder='Password'/>
              <input type="text" className="registerFormInput" placeholder='Confirm Password'/>
              <span className="registerAgreement">
                By creating an account with Tonie, I consent to the processing of my personal information in 
                accordance with the <b> PRIVACY POLICY</b>
              </span>
              <button className="registerButton">CREATE ACCOUNT</button>
            </form>
        </div>
    </div>
  )
}

export default Register