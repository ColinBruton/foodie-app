import { useState, useEffect, useMemo } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", restaurant: "", review: "" });

  // Restaurant options
  const restaurantOptions = [
    "Yassin’s Falafel House",
    "Stock & Barrel",
    "Sweet P’s BBQ",
    "Tako Taco",
    "Balter Beerworks",
  ];

  // Fetch reviews from backend on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error("Failed to fetch reviews:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.restaurant || !form.review) return;

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setReviews([...reviews, form]); // update local state
        setForm({ name: "", restaurant: "", review: "" });
      }
    } catch (err) {
      console.error("Failed to submit review:", err);
    }
  };

  // Determine Restaurant of the Week (handle ties randomly)
  const restaurantOfTheWeek = useMemo(() => {
    if (reviews.length === 0) return null;

    const counts = {};
    reviews.forEach((r) => {
      counts[r.restaurant] = (counts[r.restaurant] || 0) + 1;
    });

    let maxCount = 0;
    for (const count of Object.values(counts)) {
      if (count > maxCount) maxCount = count;
    }

    const topRestaurants = Object.entries(counts)
      .filter(([_, count]) => count === maxCount)
      .map(([restaurant]) => restaurant);

    const randomIndex = Math.floor(Math.random() * topRestaurants.length);
    return topRestaurants[randomIndex];
  }, [reviews]);

  return (
    <div className="bg-[rgb(255,182,95)] min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Restaurant Reviews</h1>

      {/* Restaurant of the Week */}
      {restaurantOfTheWeek && (
        <div className="bg-[rgb(213,204,194)] rounded-2xl p-6 shadow-lg w-3/4 max-w-lg mb-10 text-center">
          <h2 className="text-2xl font-bold">🍴 Restaurant of the Week 🍴</h2>
          <p className="mt-3 text-xl">{restaurantOfTheWeek}</p>
        </div>
      )}

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[rgb(213,204,194)] rounded-2xl p-6 shadow-lg w-3/4 max-w-lg"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded-md border"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Restaurant</label>
          <select
            name="restaurant"
            value={form.restaurant}
            onChange={handleChange}
            className="w-full p-2 rounded-md border"
          >
            <option value="">-- Select a Restaurant --</option>
            {restaurantOptions.map((r, idx) => (
              <option key={idx} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Your Review</label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 rounded-md border"
          />
        </div>

        <button
          type="submit"
          className="bg-[rgb(201,93,44)] text-white px-4 py-2 rounded-xl hover:bg-[rgb(180,80,35)] transition"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="w-3/4 max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold mb-4">Submitted Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet — be the first to post!</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-md border"
              >
                <h3 className="font-bold">{r.restaurant}</h3>
                <p className="italic text-sm text-gray-600">by {r.name}</p>
                <p className="mt-2">{r.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
