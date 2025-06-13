const Banner = () => (
  <div className="relative rounded-lg overflow-hidden mb-8">
    <img src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h7_bn-1.jpg" alt="Best seller Books" className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-6">
      <span className="text-sm">Best seller Books</span>
      <h3 className="text-3xl font-bold my-2">Sale 50%</h3>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium mt-2 hover:bg-gray-100 transition">
        Shop Now →
      </button>
    </div>
  </div>
);