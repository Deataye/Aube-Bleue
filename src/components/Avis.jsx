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
          name: "ICAN Training",
          rating: 5,
          content:
            "A very deep, intense & interesting experience. I am very familiar with manual therapies and massage but this was an extraordinary journey.A must try",
        },
        {
          name: "Laura Garcia Sanchez",
          rating: 4,
          content:
            "Top experience in a warm atmosphere. From the first moment I felt safe and very attentive. Servane has magical and very intuitive hands capable of finding all tensions, both physical and emotional, a total letting go. I highly recommend it, it does a lot of good. Now I found the place 🤩. Thank you very much",
        },
        {
          name: "Linn de Rham",
          rating: 5,
          content:
            "A fantastic massage experience, very different to what I was used to. I came out feeling light and liberated and full of energy. I can only highly recommend Servane’s amazing technique.",
        },
        {
          name: "Robert walker",
          rating: 4,
          content:
            "Exceeded my expectations greatly and have already made a second appointment which should sum up Madame Sevane skill set not to mention her calm warming environment- I highly recommend ***** 👌",
        },
        {
          name: "martine bandelier",
          rating: 4,
          content:
            "A magical moment, out of time. Servane has an open heart and quite exceptional technical skills.Listening to the body with finesse and efficiency.She is a therapist in whom we have complete confidence from the first moments of treatmentA great discovery",
        },
        {
          name: "christelle lagarde",
          rating: 4,
          content:
            "Servane is a fairy! I was touched and moved by his kindness and generosity.She is a very gifted masseuse who soothes the body, heart and soul.I warmly recommendThank you 🙏",
        },
        {
          name: "Joëlle Berney",
          rating: 4,
          content:
            "Servane a des mains de fée … magnifique moment de détente, avec écoute, empathie et respect. L’atmosphère est chaleureuse, bienveillante, propice au laisser-aller. Je recommande à 1000%!!",
        },
        {
          name: "cyrielle gianesello",
          rating: 4,
          content:
            "An incredibly relaxing and liberating massage that provides total relief. I recommend from the bottom of my heart the massages carried out by Servane who is totally attentive and who manages to identify our needs thanks to an astonishing sensitivity. Thank you again for this wonderful moment suspended outside of time.",
        },
        {
          name: "Perrochon Sophie",
          rating: 4,
          content:
            "If you are looking for a massage experience with a lot of professionalism and which is off the beaten track then you must go see Servane in Prangins who will meet all your expectations. Servane’s personality adds a memorable memory to this delicious moment.Sophie 😀",
        },
        {
          name: "Mariana Z",
          rating: 4,
          content:
            "Total recommended. I have done many massages and by so far Servane’s massage was the best. Not only due to her technique, is about the energy flows that creates the magic. After her sessions I felt myself with new energy and renovated. Appreciated her words so much💫✨Thank you 🙏",
        },
        {
          name: "ICAN Training",
          rating: 4,
          content:
            "A very deep, intense & interesting experience. I am very familiar with manual therapies and massage but this was an extraordinary journey.A must try",
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
    <section className="h-[900px] py-12 px-4">
      <div className="container mx-auto px-4 md:px-8 max-w-[1170px] text-[#081356]">
        {/* Title */}
        <h2 className="text-[35px] lg:text-[70px] font-normal font-sans leading-[55px] lg:leading-[80.49px] text-center ">Avis</h2>

        {/* Star Rating */}
        <div className="text-center mb-4">
          <div className="flex justify-center  space-x-1 mb-2">
            {/* Render stars dynamically based on rating */}
            {currentReview &&
              Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`text-5xl ${
                    index < currentReview.rating
                      ? "text-[#081356]"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
          </div>
          <p className="text-lg font-sans font-normal lg:text-[25px] lg:leading-[25px] mb-20">
            Note de {currentReview?.rating} sur {reviews.length} avis
          </p>
        </div>

        {/* Review Button */}
        <div className="text-center mb-32">
          <button className="bg-[#B5B5F2] hover:bg-blue-200 text-[#081356] text-[15px] leading-[16px] lg:text-[25px] lg:leading-[25px] font-normal px-6 py-2 rounded-3xl border border-[rgba(8,19,86,1)] transition">
            Écrire un avis ici
          </button>
        </div>

        {/* Review Content */}
        {currentReview && (
          <div className="text-center px-8  lg:w-[1074px] ">
            <p className="  lg:text-[25px] lg:leading-[30px] font-normal font-sans mb-12  leading-relaxed">{currentReview.content}</p>
            <p className="font-normal font-sans lg:text-[25px] lg:leading-[30px] mb-12 underline">{currentReview.name}</p>
          </div>
        )}

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                index === currentReviewIndex ? "bg-[#081356]" : "bg-[#45509F]"
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
