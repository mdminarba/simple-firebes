
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Loging = () => {
  const [success, setsuccess] = useState('');
  const [registerError, setregisterError] = useState('');
  const [showpassword, setshowpassword] = useState(false);
  const emailRef = useRef(null)
  const handleLogiin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password);
    setregisterError('');
    setsuccess("");
    if (password.legnth < 6) {
      setregisterError('password shuld vbe at least p characters or longer')
      return
    }
    else if (!/[A-Z]/.test(password)) {
      setregisterError('Your password shold have at least one upper case characters')
      return
    }
    else if (!accepted) {
      setregisterError('please accept our trems and condition!')
      return
    }
    signInWithEmailAndPassword(auth, email, password, accepted)
      .then(result => {
        console.log(result.user);
        setsuccess('User Createt Successfully.')
      })
      .catch(error => {
        console.log(error);
        setregisterError(error.message);

      })
  }
  const handleForgetPassword = () => {
    const email = emailRef.current.value
    if (!email) {
      console.log('please provaide an  email', emailRef.current.value);
      return;
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      console.log('please write a valid email')
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('please check you email')
      })
      .catch(error => {
        console.log(error);

      })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogiin} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email"
                    name="email"
                    ref={emailRef}
                    placeholder="email"
                    required className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" required className="input input-bordered" />

                  <span className='relative -top-8 left-64 w-6' onClick={() => setshowpassword(!showpassword)}>{
                    showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }</span>
                  <div className="">
                    <br />
                    <div className="">
                      <input type="checkbox" name="checked" id="terms" />
                      <label className='ml-2' htmlFor="terms" >Accept <a href="">Trems and Condition</a></label>
                    </div>
                  </div>
                  {
                    registerError && <h2 className=" text-red-600">{registerError}</h2>
                  }
                  {
                    success && <h2 className="text-emerald-800 font-bold">{success}</h2>
                  }
                  <p className="my-3">Now to this website please<Link className=" btn-secondary ml-5 font-medium  py-1 px-3 rounded-lg" to="/registerHero">Register</Link></p>
                  <label className="label">
                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loging