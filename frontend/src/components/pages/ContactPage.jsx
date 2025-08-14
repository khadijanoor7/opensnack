import Card from "../ui/Card";
import Badge from "../ui/Badge";

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-usersnack-dark mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          Get in touch with us for any questions, orders, or feedback
        </p>
      </div>
      {/* Quick Contact Banner */}
      <Card className="bg-gradient-to-r from-usersnack-primary to-usersnack-secondary text-white mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">🍕 Ready to Order?</h2>
          <p className="text-lg opacity-90 mb-4">
            Call us now for the fastest service!
          </p>
          <div className="text-3xl font-bold">(555) 123-PIZZA</div>
          <Badge variant="success" className="mt-4 bg-white/20 text-white">
            Open Now - Delivering Until 11:00 PM
          </Badge>
        </div>
      </Card>
      <Card className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-usersnack-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-usersnack-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-PIZZA</p>
                  <p className="text-sm text-gray-500">
                    Available during business hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-usersnack-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-usersnack-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@usersnack.com</p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-usersnack-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-usersnack-primary"
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
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Pizza Street
                    <br />
                    Foodie City, FC 12345
                  </p>
                  <p className="text-sm text-gray-500">
                    Free delivery within 5 miles
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
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
              <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">
                  Monday - Thursday
                </span>
                <span className="text-gray-600">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">
                  Friday - Saturday
                </span>
                <span className="text-gray-600">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">Sunday</span>
                <span className="text-gray-600">12:00 PM - 9:00 PM</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-usersnack-primary/5 border border-usersnack-primary/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  className="w-5 h-5 text-usersnack-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="font-semibold text-usersnack-dark">Quick Tip</h4>
              </div>
              <p className="text-sm text-gray-600">
                Order online for faster service and exclusive deals! Delivery
                typically takes 25-35 minutes.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quality Guarantee
            </h3>
            <p className="text-gray-600 text-sm">
              Not satisfied with your order? We'll make it right or your money
              back.
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Special Offers
            </h3>
            <p className="text-gray-600 text-sm">
              Follow us on social media for exclusive deals and new pizza
              announcements.
            </p>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default ContactPage;
