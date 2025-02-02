const Contact = () => (
  <section className="py-12 h-screen flex items-center ">
    <div className="max-w-3xl mx-auto px-4 ">
      <h2 className="text-3xl  text-center text-gray-800 mb-8">
        Contact <span className="font-bold">Us!</span>
      </h2>
      <form className="space-y-6">
        {/* Full Name and Email as two columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {/* <label className="block text-gray-700">Full Name</label> */}
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            {/* <label className="block text-gray-700">Email</label> */}
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Message field */}
        <div>
          {/* <label className="block text-gray-700">Message</label> */}
          <textarea
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="8"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-16 py-1  font-semibold rounded-md transition duration-300 transform hover:bg-indigo-700 hover:scale-105 border-gray-300 border"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
