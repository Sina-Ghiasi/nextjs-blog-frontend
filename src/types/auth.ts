import { ApiSigninRequestType, ApiSignupRequestType } from "@/types/global";
import { UserType } from "./user";
import { AUTH_ACTIONS } from "@/reducers/authReducer";

export type AuthStateType = {
  user: UserType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};
export type AuthContextType = AuthStateType & {
  signin: (values: ApiSigninRequestType) => Promise<void>;
  signup: (values: ApiSignupRequestType) => Promise<void>;
};

export type AuthActionType =
  | { type: typeof AUTH_ACTIONS.LOADING }
  | { type: typeof AUTH_ACTIONS.SIGNUP; payload: UserType }
  | { type: typeof AUTH_ACTIONS.SIGNIN; payload: UserType }
  | { type: typeof AUTH_ACTIONS.REJECTED; payload: string }
  | { type: typeof AUTH_ACTIONS.USER_LOADED; payload: UserType };
