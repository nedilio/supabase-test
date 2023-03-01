import "./App.css";
import supabase from "./services/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { useUser } from "./hooks/useUser";
import EditUser from "./components/EditUser";

function App() {
  const { user } = useUser();
  console.log("👨‍🚀 user: ", user);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello supabase!</h1>
      {!user && <Auth supabaseClient={supabase} />}
      {user && (
        <div>
          <p>Hola {user.email}</p>
          <EditUser />
        </div>
      )}

      {/*  */}
    </div>
  );
}

export default App;
