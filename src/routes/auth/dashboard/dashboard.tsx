import { Card, CardContent } from "@/components/ui/card";
import useTitle from "@/hooks/use-title";
import bgCard from "@/assets/images/bg-card.jpg";

export default function Dashboard() {
  useTitle("Dashboard");
  return (
    <div className="w-full">
      <Card className="relative p-3 h-36 w-full w bg-dashboard-primary text-white shadow-none overflow-hidden">
        <CardContent className="py-0 flex items-center h-full px-3">
          <div>
            <p className="text-sm">Total Tenant</p>
            <p className="text-3xl font-semibold">322</p>
          </div>
        </CardContent>
        <img
          src={bgCard}
          alt="Background"
          className="mix-blend-multiply absolute top-0 object-cover right-0 h-full "
        />
      </Card>
      <Card className="p-3 w-full mt-4 h-96 shadow-none">
        <CardContent className="p-0">
          <p>Card 2</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <Card className="p-3 w-full bg-white shadow-none">
          <CardContent className="p-0">
            <p>Card 3</p>
          </CardContent>
        </Card>
        <Card className="p-3 w-full bg-white shadow-none">
          <CardContent className="p-0">
            <p>Card 4</p>
          </CardContent>
        </Card>
        <Card className="p-3 w-full bg-white shadow-none">
          <CardContent className="p-0">
            <p>Card 5</p>
          </CardContent>
        </Card>
        <Card className="p-3 w-full bg-white shadow-none col-span-2">
          <CardContent className="p-0">
            <p>Card 6</p>
          </CardContent>
        </Card>
        <Card className="p-3 w-full bg-white shadow-none">
          <CardContent className="p-0">
            <p>Card 7</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
