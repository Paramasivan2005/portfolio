import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        form,
      );

      toast.success(res.data.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      if (err.response?.data?.errors) {
        const backendErrors = err.response.data.errors;

        const formatted = {};
        backendErrors.forEach((error) => {
          // formatted[error.path] = error.msg;
          toast.error(error.msg);
        });

        setErrors(formatted);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="scroll-mt-14">
      <section className="max-w-5xl mx-auto py-10 px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="dark:bg-gray-800 dark:text-purple-400 inline-block px-5 py-1 rounded-full bg-slate-100 text-purple-700 uppercase">
            . Contact .
          </p>

          <h1 className="mt-5 text-6xl cinzel bg-linear-to-r dark:from-white from-black to-purple-700 bg-clip-text text-transparent">
            Let's Work Together
          </h1>

          <p className="text-gray-500 mt-3 dark:text-gray-300">
            I'm always open to new opportunities, collaborations, and meaningful
            conversations. Let's connect.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="text-sm font-medium dark:text-white">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Paramasivan"
                value={form.name}
                onChange={handleChange}
                className="dark:border-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 bg-transparent"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="text-sm font-medium dark:text-white">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="paramasivan.codes@gmail.com"
                value={form.email}
                onChange={handleChange}
                className="dark:border-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none py-3 bg-transparent"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <label className="text-sm font-medium dark:text-white">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className="dark:border-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 w-full mt-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none resize-none py-3 bg-transparent"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="border-2 cursor-pointer border-purple-600 text-purple-600 px-10 py-3 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;
