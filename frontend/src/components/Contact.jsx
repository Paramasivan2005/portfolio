import React from "react";

const Contact = () => {
  return (
    <div id="contact" >
      <section className="max-w-5xl mx-auto py-24 px-6">
        <div className="text-center mb-14">
          <p className="inline-block px-5 py-1 rounded-full bg-slate-100 text-purple-700 uppercase">
            . Contact .
          </p>

          <h1 className="mt-5 text-6xl cinzel bg-linear-to-r from-black to-purple-700 bg-clip-text text-transparent">
            Let's Work Together
          </h1>

          <p className="text-gray-500 mt-3">
            I'm always open to new opportunities, collaborations, and meaningful conversations. Let's connect.
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-sm font-medium">Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 bg-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>

              <input
                type="email"
                placeholder="john@gmail.com"
                className="w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 bg-transparent"
              />
            </div>
          </div>


          <div>
            <label className="text-sm font-medium">Message</label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none resize-none py-3 bg-transparent"
            />
          </div>

          <button className="border-2 cursor-pointer border-purple-600 text-purple-600 px-10 py-3 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
