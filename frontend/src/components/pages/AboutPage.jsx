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

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
