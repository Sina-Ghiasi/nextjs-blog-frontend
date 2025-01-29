import { AuthActionType, AuthStateType } from "@/types/auth";

export const initialAuthState: AuthStateType = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const AUTH_ACTIONS = {
  LOADING: "loading",
  SIGNUP: "signup",
  SIGNIN: "signin",
  REJECTED: "rejected",
  USER_LOADED: "userLoaded",
} as const;

export function authReducer(
  state: AuthStateType,
  action: AuthActionType
): AuthStateType {
  switch (action.type) {
    case AUTH_ACTIONS.LOADING:
      return { ...state, isLoading: true };
    case AUTH_ACTIONS.SIGNUP:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ACTIONS.SIGNIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ACTIONS.USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ACTIONS.REJECTED:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
