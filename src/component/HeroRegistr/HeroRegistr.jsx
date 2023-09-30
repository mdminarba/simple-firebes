import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HeroRegistr = () => {
    const [registerError, setregisterError] = useState('')
    const [success, setsuccess] = useState('')
    const [showpassword, setshopassword] = useState(false)

    const hadleSubmit = e => {

        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        setregisterError(' ')
        setsuccess(' ')
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
        createUserWithEmailAndPassword(  auth, email, password)
            .then(result => {
                console.log(result.user)
                if (result.user.emailVerified) {
                    setsuccess('User Createt Successfully.')
                }
                else{
                    alert('please verify your email address')
                }
                updateProfile(result.user,{
                    displayName:name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(()=>console.log('profile updated'))
                .catch

                sendEmailVerification(result.user)
                .then(() => {
                    alert('please check your email and verify your account ')
                })
                
            })
           
            .catch(error => {
                console.error(error)
                setregisterError(error.message)

            })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className=" p-5">
                        <form onSubmit={hadleSubmit} action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Your Name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" required className="input input-bordered" />

                                <span className='relative -top-8  left-64 w-6' onClick={() => setshopassword(!showpassword)}>{
                                    showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                                <div className="">
                                    <br />
                                    <div className="">
                                        <input type="checkbox" name="checked" id="terms" />
                                        <label className='ml-2' htmlFor="terms" >Accept <a href="">Trems and Condition</a></label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registr</button>
                            </div>
                            {
                                registerError && <h2 className=" text-red-600">{registerError}</h2>
                            }
                            {
                                success && <h2 className="text-emerald-800 font-bold">{success}</h2>
                            }
                             <p className="my-3 w-full ">Alreadi have an account please<Link className=" btn-secondary  font-medium ml-2 py-1 px-3 rounded-lg" to="/loging">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroRegistr
