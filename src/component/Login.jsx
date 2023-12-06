import { useState } from "react";
import useAuth from "../context/authContext";
import useModal from "../context/useModal";
import Modal from "./Modal";

function Login() {

    const {login} = useAuth();
    const [email, setEmail] = useState('');

    const {isModalOpen, toggleModal, modalType,setModalType} = useModal();
   
    const handleLogin = (e)=>{
        e.preventDefault();
        login(email);
       toggleModal(false);
    //    setModalType('');
    }
   

 return (
       <>
        <Modal>
            <div className="bg-white px-50 relative">
                <span className="absolute top-5 right-5 md:top-0 md:right-0 bg-black md:translate-x-[100%] md:translate-y-[-100%] z-10 cursor-pointer rounded-full" onClick={toggleModal}>
                <img src="./src/assets/images/close.png" alt="close button" className="w-6 h-6" />
              </span>
            <div className="hidden md:block text-center text-[#008A45] py-4 text-md bg-[#EFFFF4]">
                <p>Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>
           <div className="flex gap-6 p-10 ">
             <div className=" w-full md:w-1/2 flex flex-col  justify-between space-y-4">
                <div className="w-full">
                    <h1 className="mb-8 text-2xl font-bold">Sign In</h1>
                <form action="#" className="flex flex-col mx-auto">
                    <input className="p-[5px] bg-[#F7F8FA] border border-[#D9D9DB]" type="text" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  
                    <input className="p-[5px] border border-[#D9D9DB] bg-[#F7F8FA] " type="password" id="password" placeholder="Password" />

                    <div className="flex justify-between items-center gap-20">
                    <button className="block mt-6 rounded-full py-[5px] bg-blue-500 text-white flex-1" onClick={handleLogin}>Sign In</button>
                    <a onClick={()=> setModalType('signup')}  href="#" className=" sm:hidden text-md cursor-pointer underline">or, Create Account</a>

                    </div>
                </form></div>

              <div className="w-full">
              <button className="w-full mx-auto flex justify-center items-center gap-2 mb-4 border border-slate-300 py-[5px]">
                    <img className="w-4 h-4" src="./src/assets/images/facebook.png" alt="" />
                    <span>Sign in with Facebook</span></button>
                <button className="w-full mx-auto border border-slate-300 py-[5px] flex gap-2 items-center  justify-center"><img className="w-4 h-4" src="./src/assets/images/google.jpg" alt="" /><span>Sign in with Google</span></button>
              </div>
                <span className="cursor-pointer hover:underline text-center">Forgot Password?</span>
            </div>
            <div className="hidden md:block md:w-1/2">
                <p className="text-center">Don&apos;t have an account yet? <a href="#" onClick={()=> setModalType('signup')}  className="text-blue-500 cursor-pointer hover:underline">
                Create new for free!</a></p>
                <img className="w-full" src="./src/assets/images/atg_illustration.jpg" alt="illustration" />
            </div>
           </div>
           </div>
        </Modal>
        {/* <button onClick={toggleModal}>Login</button> */}
     </>);
}

export default Login