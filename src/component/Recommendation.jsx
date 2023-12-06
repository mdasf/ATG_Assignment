import { recommendedGroups } from "../assets/constants";
import Login from "./Login";
import Signup from "./Signup";
function Recommendation() {
  return (
    <div className="max-w-xl mx-auto w-full lg:w-1/5 pt-20">
      <h1 className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clipPath="url(#clip0_1_1263)">
            <path
              opacity="0.3"
              d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z"
              fill="black"
            />
            <path
              d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1263">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="uppercase tracking-wider ">Recommended Groups</span>
      </h1>
      <div className="flex flex-col justify-between gap-4 pt-6 w-full">
        {recommendedGroups.map((group, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-10 lg:gap-2">
              <div className="w-9 h-9 overflow-hidden rounded-full">
                <img
                  src={group.img}
                  alt="group img"
                  className="w-full h-full"
                />
              </div>
              <span>Leisure</span>
            </div>
            <button className="bg-slate-200 rounded-full px-4 py-2">
              Follow
            </button>
          </div>
        ))}
      </div>
      {/* <Login /> */}
    </div>
  );
}

export default Recommendation;
