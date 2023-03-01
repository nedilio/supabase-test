import React from "react";
import { useUser } from "../hooks/useUser";
import supabase from "../services/supabase";

const EditUser = () => {
  const { user: supabaseUser } = useUser();
  const username = document.getElementById("username");
  if (supabaseUser) {
    username.value = supabaseUser.user_metadata.username;
  }

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;

    const { data, error } = await supabase.auth.updateUser({
      data: { username },
    });
    if (data) {
      alert(`Username updated: ${username}`);
    }
    if (error) {
      alert(`Username updated: ${error}`);
    }
  };
  return (
    <form onSubmit={handleCreateUser}>
      <h2>Update user</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      {/* <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div> */}
      <button type="submit">Guardar Usuario</button>
    </form>
  );
};

export default EditUser;
