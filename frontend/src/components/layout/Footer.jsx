const Footer = () => (
  <footer className="bg-usersnack-dark text-white py-8">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-usersnack-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">🍕</span>
          </div>
          <span className="text-2xl font-bold">Usersnack</span>
        </div>
        <p className="text-gray-300 mb-4">
          Delicious pizzas delivered with passion
        </p>
        <p className="text-gray-400 text-sm">
          © 2025 Usersnack. A Usersnap venture. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
