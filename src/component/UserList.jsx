
function UserList({ users,handleCurrentUser,currentUserId }) {

  return (
   <div className="max-w-2xl w-full md:w-1/2 h-96 md:h-full mb-20 md:mb-0 ">
    <h1 className="bg-[#C5DFFF] uppercase text-center text-lg py-2 mb-2 ">Users List</h1>
     <ul className="space-y-2  h-full overflow-y-auto">
      {users?.map((user, index) => (
        <div onClick={(e)=>handleCurrentUser(e)} key={index} data-id={user.id} data-username={user.profile.username} className="flex gap-4 items-center justify-center cursor-pointer">
            <img src={user?.avatar ? `${user?.avatar}` : '/vite.svg'} alt="user profile pic" className="w-10 h-10 rounded-full object-cover bg-[#D4D4D4] pointer-events-none " />
            <li className={`py-2  w-full ${currentUserId === user?.id ? 'bg-[#D4D4D4]' : 'bg-[#ECECEC]'} pointer-events-none` } >{user.profile.username}</li>
        </div>
      ))}
    </ul>
   </div>
  );
}

export default UserList;
