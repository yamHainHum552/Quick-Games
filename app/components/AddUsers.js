"use client";
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
  };
  return (
    <div className="h-1/2 w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl">Add users</h1>
      <input
        type="text"
        placeholder="Add new user"
        className="w-1/2 border-none "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={userDispatch}>
        Add User
      </button>
    </div>
  );
};

export default AddUsers;
