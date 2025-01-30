import { Button, Card, CardContent, CardHeader } from "@/shared/ui";

export default async function Index() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl font-bold">
          Build Better Products with Frontend Skills
        </h1>
        <p className="mt-4 text-lg">
          Grow Beyond Frontend Development – Become a Product Engineer.
        </p>

        <div className="mt-6">
          <Button variant="secondary" className="text-black">
            Get Started Now
          </Button>
          <Button variant="outline" className="ml-4 text-primary">
            View Subscription Plans
          </Button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="px-8 py-16">
        <h2 className="text-center text-3xl font-bold">What We Offer</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>Weekly Premium Lectures</CardHeader>
            <CardContent>
              Learn cutting-edge frontend skills and best practices from
              experts.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Interactive Discussions</CardHeader>
            <CardContent>
              Share your journey and learn from others in our thriving
              community.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Real-World Applications</CardHeader>
            <CardContent>
              Turn knowledge into impactful projects with actionable insights.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lecture Preview Section */}
      <section className="bg-gray-200 px-8 py-16">
        <h2 className="text-center text-3xl font-bold">Explore Our Lectures</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>Building Scalable React Apps</CardHeader>
            <CardContent>
              Master Next.js for high-performance applications.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>TypeScript Best Practices</CardHeader>
            <CardContent>
              Level up your TypeScript skills for large-scale projects.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Advanced CSS Techniques</CardHeader>
            <CardContent>
              Create stunning UI with modern CSS tools and methodologies.
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline">Browse All Lectures</Button>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold">Join Our Community</h2>
        <p className="mt-4 text-center text-lg">
          Engage in discussions, get feedback, and grow with other engineers.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>Popular Discussions</CardHeader>
            <CardContent>
              <p>"How to optimize React performance?"</p>
              <p>"Best practices for state management in large projects."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>Project Highlights</CardHeader>
            <CardContent>
              <p>"User shared their React-based e-commerce case study."</p>
              <p>"Improving UX with animation: A practical guide."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="bg-blue-600 py-16 text-white">
        <h2 className="text-center text-3xl font-bold">Why Join Us?</h2>
        <p className="mt-4 text-center text-lg">
          Unlimited access to lectures, community discussions, and more for just
          $20/month.
        </p>
        <div className="mt-6 text-center">
          <Button>Start Your Subscription</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-white">
        <p>&copy; 2025 Product Engineer Club. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
