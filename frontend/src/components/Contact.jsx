import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-14">
      <section className="max-w-5xl mx-auto py-10 px-6">
        <div className="text-center mb-14">
          <p className="dark:bg-gray-800 dark:text-purple-400 inline-block px-5 py-1 rounded-full bg-slate-100 text-purple-700 uppercase">
            . Contact .
          </p>

          <h1 className="mt-5 text-6xl cinzel bg-linear-to-r dark:from-white from-black to-purple-700 bg-clip-text text-transparent">
            Let's Work Together
          </h1>

          <p className="text-gray-500 mt-3 dark:text-gray-300">
            I'm always open to new opportunities, collaborations, and meaningful conversations. Let's connect.
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-sm font-medium dark:text-white">Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                className="dark:border-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 bg-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-medium dark:text-white">Email</label>

              <input
                type="email"
                placeholder="john@gmail.com"
                className="dark:border-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 bg-transparent"
              />
            </div>
          </div>


          <div>
            <label className="text-sm font-medium dark:text-white">Message</label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="dark:border-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none resize-none py-3 bg-transparent"
            />
          </div>

          <button className="dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 border-2 cursor-pointer border-purple-600 text-purple-600 px-10 py-3 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
