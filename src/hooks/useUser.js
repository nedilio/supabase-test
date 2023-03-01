import { useEffect, useState } from "react";
import supabase from "../services/supabase";

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (!user) {
        console.log(error);
        return setUser(null);
      } else {
        console.log(user);
        setUser(user);
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    getUser();

    return () => subscription?.unsubscribe();
  }, []);

  return { user };
};
