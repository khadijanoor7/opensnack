import Card from "../ui/Card";

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-usersnack-dark mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">Get in touch with our team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <Card>
          <h2 className="text-2xl font-bold text-usersnack-dark mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-usersnack-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Visit Us
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                123 Pizza Street
                <br />
                Foodie City, FC 12345
              </p>
              <p className="text-sm text-gray-500">
                Free delivery within 5 miles
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-usersnack-primary font-medium">
                (555) 123-PIZZA
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-usersnack-primary font-medium">
                hello@usersnack.pizza
              </p>
            </div>
          </div>
        </Card>

        {/* Business Hours */}
        <Card>
          <h2 className="text-2xl font-bold text-usersnack-dark mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-usersnack-primary"
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
            Business Hours
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Thursday</span>
              <span className="font-medium">11:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Friday - Saturday</span>
              <span className="font-medium">11:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span className="font-medium">12:00 PM - 9:00 PM</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-usersnack-primary/10 rounded-lg">
            <p className="text-usersnack-primary font-medium text-sm">
              💡 Order online for faster service!
            </p>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default ContactPage;
