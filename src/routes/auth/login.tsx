import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useTitle from "@/hooks/use-title";
import { Card, CardContent } from "@/components/ui/card";

export default function Login() {
  useTitle("Login");
  return (
    <div className="flex flex-shrink-0 flex-col gap-3 text-center w-full max-w-md">
      <Card className="h-24">
        <CardContent>
          <p>Login</p>
        </CardContent>
      </Card>
      <Link to={"/"}>
        <Button className="bg-primary">Go to Dashboard</Button>
      </Link>
    </div>
  );
}
