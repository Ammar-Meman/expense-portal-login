import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Expense Dashboard
            </h1>
            <p className="text-muted-foreground">Welcome back to your expense management portal</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-foreground/20 hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="bg-card rounded-[20px] p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Dashboard Content
          </h2>
          <p className="text-card-foreground">
            Your expense management system is ready! This is where your dashboard content will appear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
