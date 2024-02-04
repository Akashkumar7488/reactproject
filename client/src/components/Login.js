import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import login from '../Images/B.png';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await res.json();

    if(res.status === 400 || !data){
       window.alert("Invalid Credentials");
       console.log("Invalid Credentials");
    }else{
      window.alert("login successfully");
      console.log("login successfully");

      navigate("/success");
    }
  }

  return (
   <> 
      <section className="sign-in">
        <div className="container-1">
            <div className="signin-content">

            <div className="signin-image">
                      <figure>
                          <img src={login} alt="registration pic" width="100px" height="100px" className="image" />
                        </figure> 
                        <div className="signin-image-link">
                          <NavLink to="/signup">Create an account</NavLink>
                          </div>
                    </div>
                <div className="signin-form">
                    <h2 className="form-title">Sign in</h2>
                    <form method="POST" className="register-form" id="register-form">

                      <div className="form-group">
                        <label htmlFor="email">
                        <i class="zmdi zmdi-email"></i>
                        </label>
                        <input type="email" name="email" id="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"/>
                      </div>

                      <div className="form-group form-button">
                        <input type="submit" name="signin" id="signin" className="form-submit"
                           value="Log In"
                           onClick={loginUser}/>
                      </div>

                    </form>
                    </div>
            </div>
        </div>
      </section>
   </>
  )
}

export default Login
