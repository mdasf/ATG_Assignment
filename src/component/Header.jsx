import useAuth from "../context/authContext";
import useModal from "../context/useModal";
import Login from "./Login";
import Signup from "./Signup";

function Header() {
  const { user,logout } = useAuth();
  const {modalType, setModalType} = useModal();
  // const [, set] = useState(second)



  return (
    <div className="flex flex-row justify-between px-10 py-4 md:justify-around items-center md:p-2">
      <img src="./src/assets/images/logo.png" alt="logo" />
    <div className="hidden max-w-md w-full bg-slate-200 md:flex gap-4 items-center p-2  rounded-full">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clipPath="url(#clip0_1_817)">
              <path
                d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z"
                fill="#7A7A7A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_817">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="w-full ">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for your favorite groups in ATG"
            className="border-none bg-transparent w-full p-2 focus:outline-none"
          />
        </div>
      </div>
      {user ? (
       <>
      <div className="flex gap-2 items-center"> 
      <div className='rounded-full w-12 h-12 overflow-hidden'>
         <img src="./src/assets/images/author1.jpeg" alt="author image"  className="w-full h-full object-cover" />
       </div>
       <h3 className="font-semibold">{user}</h3>
       </div>
       <button onClick={()=>logout(null)} className="bg-blue-500 text-white p-2 rounded-lg">Logout</button>
     </>
      ) : ( <>
      <p className="block">
        Create Account.{" "}
        <a className="text-blue-500 cursor-pointer" href="#" onClick={()=> setModalType('signup')}>
          It&apos;s free!
        </a>
        
      </p>
        {/* <a onClick={()=> setModalType('signin')}  href="#" className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer">SignIn</a>
        <a onClick={()=> setModalType('signup')}  href="#" className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer">Signup</a> */}
      </>

       
      )}
      {modalType ==='signin' &&  <Login />}
      {modalType ==='signup' &&  <Signup />}
    </div>
  );
}

export default Header;
