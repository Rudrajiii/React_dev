import { useState } from "react"

export const SignUP = () => {
    const [user , updateUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        contact:""
    });

    function handleSubmit(e){
        let {name , value} = e.target;
        updateUser((prevData) => ({...prevData , [name]:value}));
    } 
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            contact:user.contact
        }
        console.log(formData);
    }
    return (
        <div className="parent w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="formContainer w-full max-w-[450px] relative rounded-lg">
            <form onSubmit={handleFormSubmit} className="border relative w-full rounded-lg p-4 shadow-lg">
                <div className="px-2">
                <h1 className="text-3xl font-mono text-left">Sign Up Form</h1>
                <p className="text-gray-500">Please Enter your credentials</p>
                </div>
                <div className="inputs flex flex-col p-3 gap-2">
                    <label htmlFor="" className="text-lg font-medium">First Name*</label>
                    <input name="firstName" value={user.firstName} onChange={handleSubmit} type="text" className="p-2 rounded-md bg-slate-100" placeholder="Enter your first name"  />
                    <label htmlFor="" className="text-lg font-medium">Last Name*</label>
                    <input name="lastName" value={user.lastName} onChange={handleSubmit}  type="text" className="p-2 rounded-md bg-slate-100" placeholder="Enter your last name"/>
                    <label htmlFor="" className="text-lg font-medium">Email*</label>
                    <input name="email" value={user.email} onChange={handleSubmit}  type="text" className="p-2 rounded-md bg-slate-100" placeholder="Enter your email"/>
                    <label htmlFor="" className="text-lg font-medium">Password*</label>
                    <input name="password" value={user.password} onChange={handleSubmit}  type="text" className="p-2 rounded-md bg-slate-100" placeholder="Enter your password"/>
                    <label htmlFor="" className="text-lg font-medium">Phone Number</label>
                    <input name="contact" value={user.contact} onChange={handleSubmit}  type="text" className="p-2 rounded-md bg-slate-100" placeholder="Enter your phone number"/>
                </div>
                <p className="text-gray-500 p-2">By creating your account you agree our <span className="text-cyan-500">Terms & Service</span></p>
                <button className="p-2 rounded-md w-[100%] bg-sky-300">Submit</button>
            </form>
        </div>
        </div>
    )
}
