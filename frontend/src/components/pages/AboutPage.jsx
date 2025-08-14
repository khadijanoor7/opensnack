import Card from "../ui/Card";
import Badge from "../ui/Badge";

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-usersnack-dark mb-4">
          About Usersnack
        </h1>
        <p className="text-gray-600 text-lg">
          Where passion meets pizza in every bite
        </p>
      </div>

      {/* Main Story Section */}
      <Card className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-usersnack-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🍕</span>
              </div>
              <h2 className="text-2xl font-bold text-usersnack-dark">
                Our Story
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to Usersnack, where passion meets pizza! As Usersnap
                expands into new markets, we're excited to bring you the finest
                pizza delivery experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is simple: to create delicious, high-quality pizzas
                using the freshest ingredients and deliver them right to your
                door with the same attention to detail that makes Usersnap
                great.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop&auto=format"
              alt="Fresh pizza being made"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-usersnack-primary rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </Card>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Quality Ingredients
          </h3>
          <p className="text-gray-600">
            We source only the finest, freshest ingredients from trusted local
            suppliers for every pizza.
          </p>
        </Card>

        <Card className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-600">
            Hot, fresh pizzas delivered to your door in 30 minutes or less,
            guaranteed.
          </p>
        </Card>

        <Card className="text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-usersnack-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Made with Love
          </h3>
          <p className="text-gray-600">
            Every pizza is handcrafted with care and attention to detail by our
            skilled chefs.
          </p>
        </Card>
      </div>

      {/* Experience Section */}
      <Card className="mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-usersnack-dark mb-4">
            The Usersnack Experience
          </h2>
          <p className="text-gray-600 text-lg">
            From order to delivery, we've perfected every step
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-usersnack-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-usersnack-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Browse Our Menu
                </h4>
                <p className="text-gray-600 text-sm">
                  Explore our wide variety of delicious pizzas, from classic
                  favorites to gourmet creations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-usersnack-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-usersnack-primary font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Customize to Your Heart's Content
                </h4>
                <p className="text-gray-600 text-sm">
                  Add extra toppings, choose your size, and make it exactly how
                  you like it.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-usersnack-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-usersnack-primary font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Fresh & Fast Delivery
                </h4>
                <p className="text-gray-600 text-sm">
                  Your pizza is prepared fresh and delivered hot to your door in
                  record time.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1648679708301-3e2865043526?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Delicious pizza varieties"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </Card>

      {/* Stats Section */}
      <Card className="bg-gradient-to-r from-usersnack-primary to-usersnack-secondary text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-sm opacity-90">Pizza Varieties</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">5★</div>
            <div className="text-sm opacity-90">Customer Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">30min</div>
            <div className="text-sm opacity-90">Delivery Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">10k+</div>
            <div className="text-sm opacity-90">Happy Customers</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default AboutPage;
