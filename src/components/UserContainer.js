import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    console.log("USER", userData);
  }, []);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>List of Users</h2>
      <div>
        {userData.users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default UserContainer;
