"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUsers = () => {
  const userData = useSelector((data) => {
    return data.usersData.users;
  });
  const dispatch = useDispatch();

  return (
    <div className="p-10 items-center">
      <h1 className="font-bold text-3xl">Display Users</h1>
      {userData.map((item) => (
        <div key={item.id} className="flex items-center justify-around">
          <h2 className="font-bold text-3xl">{item.name}</h2>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(removeUser(item.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUsers;
