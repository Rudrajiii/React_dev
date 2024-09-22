import { useState } from "react"

export const LoginForm = () => {
    const [username , updateUser] = useState('');
    const [password , UpdatePassword] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            username,
            password
        }
        console.log(formData);
    }
    return (
        <div className="parent w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="formContainer w-full max-w-[450px] relative rounded-lg">
            <form onSubmit={handleFormSubmit} className="border relative w-full rounded-lg p-4 shadow-lg">
                <div className="px-2">
                <h1 className="text-3xl font-mono text-left">Login Form</h1>
                <p className="text-gray-500">Please Enter your credentials to verify</p>
                </div>
                <div className="inputs flex flex-col p-3 gap-2">
                    <label htmlFor="" className="text-lg font-medium">User Name*</label>
                    <input name="username" value={username} onChange={(e) => updateUser(e.target.value)} type="text" className="p-2 rounded-md bg-slate-100" placeholder="Enter your first name"  required/>
                    <label htmlFor="" className="text-lg font-medium">Password*</label>
                    <input name="password" value={password} onChange={(e) => UpdatePassword(e.target.value)}  type="text" className="p-2 rounded-md bg-slate-100" placeholder="Enter your password" required/>
                </div>
                <p className="text-gray-500 p-2">Don't have an account ? <span className="text-cyan-500"> Sign Up</span></p>
                <button className="p-2 rounded-md w-[100%] bg-sky-300">Submit</button>
            </form>
        </div>
        </div>
    )
}
