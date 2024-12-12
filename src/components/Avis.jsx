import React, { useState, useEffect } from "react";

const Avis = () => {
  const [reviews, setReviews] = useState([]); // State for reviews
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // For pagination

  // Fetch reviews dynamically (this could be from an API or database)
  useEffect(() => {
    // Simulated API call
    const fetchReviews = async () => {
      const data = [
        {
          name: "Laura Garcia Sanchez",
          rating: 5,
          content:
            "Top experience in a warm atmosphere. From the first moment I felt safe and very attentive. Servane has magical and very intuitive hands capable of finding all tensions, both physical and emotional, a total letting go. I highly recommend it, it does a lot of good. Now I found the place. Thank you very much 😊",
        },
        {
          name: "John Doe",
          rating: 4,
          content:
            "Amazing service and attention to detail. The atmosphere was calming and the experience was refreshing!",
        },
        {
          name: "Jane Smith",
          rating: 5,
          content:
            "Highly recommend! Servane is incredibly skilled and ensures you leave feeling rejuvenated.",
        },
      ];
      setReviews(data);
    };

    fetchReviews();
  }, []);

  // Automatically cycle through reviews every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [reviews]);

  // Handle review navigation
  const handleReviewChange = (index) => {
    setCurrentReviewIndex(index);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-10 px-4">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-blue-900">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6">Avis</h2>

        {/* Star Rating */}
        <div className="text-center mb-4">
          <div className="flex justify-center space-x-1 mb-2">
            {/* Render stars dynamically based on rating */}
            {currentReview &&
              Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < currentReview.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
          </div>
          <p className="text-lg">
            Note de {currentReview?.rating} sur {reviews.length} avis
          </p>
        </div>

        {/* Review Button */}
        <div className="text-center mb-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded transition">
            Écrire un avis ici
          </button>
        </div>

        {/* Review Content */}
        {currentReview && (
          <div className="text-center">
            <p className="italic mb-6 leading-relaxed">{currentReview.content}</p>
            <p className="font-semibold">{currentReview.name}</p>
          </div>
        )}

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                index === currentReviewIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
              onClick={() => handleReviewChange(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avis;
