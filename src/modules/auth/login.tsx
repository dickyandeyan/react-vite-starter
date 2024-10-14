import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useTitle from "@/hooks/useTitle";

export default function Login() {
  useTitle("Login");
  return (
    <div className="flex flex-col gap-3 text-center">
      <p>Login</p>
      <Link to={"/"}>
        <Button className="bg-primary">Go to Dashboard</Button>
      </Link>
    </div>
  );
}
