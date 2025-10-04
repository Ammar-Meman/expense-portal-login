import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-8 flex justify-center gap-6">
            <BarChart3 className="h-12 w-12 text-primary" />
            <Users className="h-12 w-12 text-primary" />
            <Shield className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Expense Management System
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Streamline your company's expense tracking and management with our comprehensive solution
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="h-14 px-8 bg-primary hover:bg-secondary text-primary-foreground font-medium text-lg shadow-button transition-all duration-300"
            >
              Login to Your Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => navigate("/signup")}
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-lg transition-all duration-300"
            >
              Create New Account
            </Button>
          </div>

          <p className="mt-8 text-sm text-foreground/60">
            Trusted by companies worldwide for expense management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
