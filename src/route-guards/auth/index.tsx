import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/auth/use-auth-context";

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to={"dashboard"} />;
  }

  return children || <Outlet />;
};
