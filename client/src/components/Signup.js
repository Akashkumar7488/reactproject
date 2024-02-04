import React, {useState} from 'react'
import signup from "../Images/sign-up.webp";
import { NavLink,useNavigate} from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  const handleInputs = (e)=>{
        console.log(e);
       const name = e.target.name;
       const value = e.target.value;

        setUser({...user, [name]:value})

  }
  const PostData = async (e) =>{
      e.preventDefault();

      const {name,email,phone,work,password,cpassword} = user;
      const res = await fetch("/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({

            name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword
          })
      })

      const data = await res.json();

      if(data.status === 422 || !data){
        window.alert("Invalid registration");
        console.log("Invalid registration");
      }else{
        window.alert(" registration successful");
        console.log(" registration successful");

        navigate("/login");
      }
  }
  return (
    <>
    <div className="full">
      <section className="signup">
        <div className="container">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign up</h2>
                    <form method="POST"className="register-form" id="register-form">

                      <div className="form-group">
                        <label htmlFor="name">Name
                        <i class="zmdi zmdi-assignment-account material-icons-name"></i>
                        </label>
                        <input type="text" name="name" id="name" autoComplete="off"
                        value={user.name}
                        onChange={handleInputs}

                        placeholder="Enter your name"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email
                        <i class="zmdi zmdi-email"></i>
                        </label>
                        <input type="email" name="email" id="email" autoComplete="off"
                        value={user.email}
                        onChange={handleInputs}

                        placeholder="Enter your Email"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone
                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                        </label>
                        <input type="number" name="phone" id="phone" autoComplete="off"
                        value={user.phone}
                        onChange={handleInputs}

                        placeholder="Enter your Number"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="work">Work
                        <i class="zmdi zmdi-slideshow material-icons-name"></i>
                        </label>
                        <input type="text" name="work" id="work" autoComplete="off"
                        value={user.work}
                        onChange={handleInputs}

                        placeholder="Enter your Profession"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>
                        <input type="password" name="password" id="password" autoComplete="off"
                        value={user.password}
                        onChange={handleInputs}

                        placeholder="Enter your Password"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="cpassword">Confpassword
                        <i class="zmdi zmdi-lock material-icons-name"></i>
                        </label>
                        <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                        value={user.cpassword}
                        onChange={handleInputs}

                        placeholder="Enter your Cpassword"/>
                      </div>

                      <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit"
                            value="register" onClick={PostData}/>
                      </div>

                    </form>
                    </div>
                    <div className="signup-image">
                      <figure>
                          <img src={signup} alt="registration pic" width="200px" height="200px" className="image" />
                        </figure> 
                        <div className="signup-image-link">
                          <NavLink to="/login">I m already registered</NavLink>
                          </div>
                    </div>
                
            </div>
        </div>
      </section>
      </div>

    </>
    // <div>
    //   <h1>We are in <span className="demo">Registration</span> page</h1>
    //   <img src={signup} alt=""/>
    // </div>
  )
}

export default Signup
