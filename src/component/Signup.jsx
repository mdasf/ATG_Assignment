import { useState } from "react";
import useModal from "../context/useModal";
import Modal from "./Modal";

function Signup() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
const { toggleModal,setModalType} = useModal();

  return (
    <>
      <Modal>
        <div className="bg-white px-50 ">
            <span className="absolute top-5 right-5 md:top-0 md:right-0 bg-black md:translate-x-[100%] md:translate-y-[-100%] z-10 cursor-pointer rounded-full " onClick={toggleModal}>
                <img src="/assets/images/close.png" alt="close button" className="w-6 h-6" />
              </span>
            <span className="absolute top-0 right-0 translate-x-[100%] translate-y-[-100%] z-10 cursor-pointer " onClick={toggleModal}>
                <img src="/assets/images/close.png" alt="close button" className="w-6 h-6" />
              </span>
          <div className="hidden md:block text-center text-[#008A45] py-4 text-md bg-[#EFFFF4]">
            <p className="">
              Let&apos;s learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>
          <div className="flex gap-6 px-4 py-10 md:px-10 ">
            <div className="w-full md:w-1/2 flex flex-col  justify-between space-y-4">
              <div className="w-full">
                <h1 className="mb-8 text-2xl font-bold">Create Account</h1>
                <form action="#" className="flex flex-col mx-auto">
                  <div className="form-group w-full flex flex-row">
                  <input
                    className="w-full pl-2 bg-[#F7F8FA] border border-[#D9D9DB] flex-1"
                    type="text"
                    id="email"
                    placeholder="First Name"

                  />
                   <input
                    className="py-[5px] w-full pl-2 bg-[#F7F8FA] border border-[#D9D9DB] flex-1"
                    type="text"
                    id="email"
                    placeholder="Last Name"
                  />
                  </div>
                  <input
                    className="p-[5px] bg-[#F7F8FA] border border-[#D9D9DB]"
                    type="text"
                    id="email"
                    placeholder="Email"
                  />
                  <input
                    className="p-[5px] border border-[#D9D9DB] bg-[#F7F8FA] "
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                   <input
                    className="p-[5px] border border-[#D9D9DB] bg-[#F7F8FA] "
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                   <div className="flex justify-between items-center gap-20">
                    <button className="block mt-6 rounded-full py-[5px] bg-blue-500 text-white flex-1" >Create Account</button>
                    <a onClick={()=> setModalType('signin')}  href="#" className=" sm:hidden text-md cursor-pointer underline">or, Sign In</a>

                    </div>
                </form>
              </div>

              <div className="w-full">
                <button className="w-full mx-auto flex justify-center items-center gap-2 mb-4 border border-slate-300 py-[5px]">
                  <img
                    className="w-4 h-4"
                    src="/assets/images/facebook.png"
                    alt=""
                  />
                  <span>Sign up with Facebook</span>
                </button>
                <button className="w-full mx-auto border border-slate-300 py-[5px] flex gap-2 items-center  justify-center">
                  <img
                    className="w-4 h-4"
                    src="/assets/images/google.jpg"
                    alt=""
                  />
                  <span>Sign up with Google</span>
                </button>
              </div>
             
            </div>
            <div className="hidden md:block md:w-1/2">
              <p className="text-center">
              Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={()=> setModalType('signin')} 
                >
                  Sign In
                </a>
              </p>
              <img
                className="w-full"
                src="/assets/images/signup_iIlustration.jpg"
                alt="illustration"
              />
              <p className="text-xs">By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
          </div>
        </div>
      </Modal>
      {/* <button onClick={toggleModal}>SignUp</button> */}
    </>
  );
}

export default Signup;
