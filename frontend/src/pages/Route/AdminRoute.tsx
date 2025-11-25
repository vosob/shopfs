import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { me } from "../../services/users";

interface AdminRouteProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
}

export const AdminRoute = ({ children }: AdminRouteProps) => {
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["currentUser"],
    queryFn: me,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Завантаження...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (user.role !== "ADMIN") {
    console.warn("Access denied: user is not admin");
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
