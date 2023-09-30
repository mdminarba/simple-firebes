import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";

const Register = () => {


    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;

        const password = e.target.password.value;
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then( result=>{
                console.log( result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="text-center mx-w-full lg:mx-20 mx-5 ">
            <h2 className="text-3xl mb-5">Please Register</h2>

            <form onSubmit={handleRegister} className="border py-10">
                <input className="w-80 bg-amber-100 mb-5 border font-bold text-black font-bol p-2 rounded-md" type="email" name="email" id="" placeholder=" Email Address" />
                <br />
                <input className="w-80 bg-amber-100 mb-5 border text-black p-2 rounded-md font-bold" type="password" name="password" id="" placeholder=" Password" />
                <br />
                <input className=" btn btn-secondary mb-5 border py-2 px-5 rounded-lg" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register
