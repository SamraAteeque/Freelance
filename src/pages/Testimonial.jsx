import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img4 from "../assets/images/image4.png";


const Testimonial = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      text: "Samra created a fantastic Website for my business. Smooth animations and very professional design.",
      rating: 5,
      projectImage: img4,
      projectLink: "https://duo-plum.vercel.app/",
    },
    {
      id: 2,
      name: "Priya Verma",
      text: "Loved the landing page design! Exactly what I imagined for my TravelHub Agency.",
      rating: 4,
      projectImage: img2,
      projectLink: "https://travelling-website-navy.vercel.app/",
    },
     {
      id: 2,
      name: "Ajit Singh",
      text: "Trusted, efficient, and professional — exactly what you want in a real estate partner.",
      rating: 4,
      projectImage: img1,
      projectLink: "https://magma-ruddy.vercel.app/",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    text: "",
    rating: 0,
    projectImage: "",
    projectLink: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text && newReview.rating && newReview.projectImage && newReview.projectLink) {
      setReviews([
        ...reviews,
        { ...newReview, id: Date.now() },
      ]);
      setNewReview({
        name: "",
        text: "",
        rating: 0,
        projectImage: "",
        projectLink: "",
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className="bg-black text-white py-16 px-6 lg:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Client Reviews
      </h2>

      {/* Reviews Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            {/* Project Image */}
            <a href={review.projectLink} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={review.projectImage}
                alt="Project"
                className="w-full h-40 object-cover rounded-xl mb-4 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </a>

            {/* Review text */}
            <p className="italic mb-4">"{review.text}"</p>

            {/* Name + Rating */}
            <div className="flex justify-between items-center">
              <span className="font-semibold">{review.name}</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Review Form */}
      <div className="mt-16 max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Leave a Review
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 text-white"
          />
          <textarea
            placeholder="Your Review"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 text-white"
          ></textarea>
          <input
            type="text"
            placeholder="Project Image"
            value={newReview.projectImage}
            onChange={(e) =>
              setNewReview({ ...newReview, projectImage: e.target.value })
            }
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Project Link"
            value={newReview.projectLink}
            onChange={(e) =>
              setNewReview({ ...newReview, projectLink: e.target.value })
            }
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 text-white"
          />

          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="mr-4">Rating:</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={24}
                className={`cursor-pointer ${
                  i < newReview.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                }`}
                onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-black font-semibold"
          >
            Submit Review
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-400 flex items-center gap-2 mt-4"
            >
              <CheckCircle2 /> Review Submitted!
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Testimonial;
