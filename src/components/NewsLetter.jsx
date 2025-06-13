import React from 'react';

const Newsletter = () => {
  return (
    <section
      className="text-white text-center py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1953&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Sign Up to Subscribe</h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Subscribe to our newsletter for exclusive content, author interviews, and special promotions.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 rounded-l-full text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-r-full font-semibold transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
