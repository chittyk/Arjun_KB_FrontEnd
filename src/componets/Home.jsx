import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function AfterLogin() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-white shadow-md p-4 rounded-xl">
        <h1 className="text-2xl font-bold text-blue-600">Portfolio Creator</h1>
        <Button variant="outline">Logout</Button>
      </header>

      {/* Welcome Section */}
      <section className="mt-8 text-center">
        <h2 className="text-3xl font-semibold">Welcome Back 👋</h2>
        <p className="text-gray-600 mt-2">
          Start building or editing your portfolio with ease.
        </p>
      </section>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        <Card className="shadow-lg hover:shadow-2xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold">📂 My Portfolios</h3>
            <p className="text-gray-600 mt-2">
              View and manage all your existing portfolios.
            </p>
            <Button className="mt-4 w-full">View Portfolios</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-2xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold">➕ Create New</h3>
            <p className="text-gray-600 mt-2">
              Start a brand new portfolio project.
            </p>
            <Button className="mt-4 w-full">Create Portfolio</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-2xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold">⚙️ Settings</h3>
            <p className="text-gray-600 mt-2">
              Update your profile and preferences.
            </p>
            <Button className="mt-4 w-full">Edit Profile</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AfterLogin;
