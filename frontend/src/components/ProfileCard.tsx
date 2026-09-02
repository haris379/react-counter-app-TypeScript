import { useEffect, useState } from "react";
import api from "../api/axios";

const ProfileCard = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await api.get("/user/all-users");
      console.log(response.data);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error Getting Users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 m-10">
        {users.map((user: any) => (
          <div
            className=" bg-gray-400 hover:bg-gray-500 h-auto w-auto rounded-xl border flex flex-col justify-between"
            key={user._id}
          >
            <h2 className="text-center m-2 font-bold">User Profile</h2>
            <div className="m-4 font-semibold">
              <p>
                <span className="font-bold">Name</span> : {user.name}
              </p>
              <p>
                <span className="font-bold">Email</span> : {user.email}
              </p>
            </div>
            <div className="text-center m-2">
              <button className="w-1/2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 cursor-pointer">
                Login
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
