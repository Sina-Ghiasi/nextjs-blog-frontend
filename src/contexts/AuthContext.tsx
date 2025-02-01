"use client";

import {
  AUTH_ACTIONS,
  authReducer,
  initialAuthState,
} from "@/reducers/authReducer";
import { getUserApi, signinApi, signupApi } from "@/services/authService";
import { AuthContextType } from "@/types/auth";
import { ApiSigninRequestType, ApiSignupRequestType } from "@/types/global";
import { handleAxiosErrorMessage } from "@/utils/handleErrorMessage";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialAuthState
  );
  const router = useRouter();

  async function signin(values: ApiSigninRequestType) {
    dispatch({ type: AUTH_ACTIONS.LOADING });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: AUTH_ACTIONS.SIGNIN, payload: user });
      toast.success(message);
      router.replace("/profile");
    } catch (error) {
      const errorMessage = handleAxiosErrorMessage(error);
      dispatch({ type: AUTH_ACTIONS.REJECTED, payload: errorMessage });
      toast.error(errorMessage);
    }
  }

  async function signup(values: ApiSignupRequestType) {
    dispatch({ type: AUTH_ACTIONS.LOADING });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: AUTH_ACTIONS.SIGNUP, payload: user });
      toast.success(message);
      router.replace("/profile");
    } catch (error) {
      const errorMessage = handleAxiosErrorMessage(error);
      dispatch({ type: AUTH_ACTIONS.REJECTED, payload: errorMessage });
      toast.error(errorMessage);
    }
  }

  async function getUser() {
    dispatch({ type: AUTH_ACTIONS.LOADING });
    try {
      const { user } = await getUserApi();
      dispatch({ type: AUTH_ACTIONS.USER_LOADED, payload: user });
    } catch (error) {
      const errorMessage = handleAxiosErrorMessage(error);
      dispatch({ type: AUTH_ACTIONS.REJECTED, payload: errorMessage });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        signin,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
