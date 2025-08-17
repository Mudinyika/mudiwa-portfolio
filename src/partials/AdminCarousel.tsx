import { useState } from "react";

const adminScreens = [
  {
    src: '/assets/images/log-in.png',
    alt: 'Admin Log-in',
    description: 'This is the admin log-in page.'
  },
  {
    src: '/assets/images/admin-dashboard.png',
    alt: 'Admin Dashboard',
    description: 'This is the main dashboard where admins monitor shop activities.'
  },
  {
    src: '/assets/images/add-user.png',
    alt: 'Onboard User',
    description: 'This screen allows admins to onboard new users.'
  },
  {
    src: '/assets/images/ads-analytics.png',
    alt: 'Admin Ads&Campaigns',
    description: 'Here admins can view & add offers or campaigns.'
  }
  
];

export default function AdminCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % adminScreens.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + adminScreens.length) % adminScreens.length);

  const screen = adminScreens[currentSlide];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Left: Video */}
      <div className="flex justify-center items-center">
        <video
          src="/assets/videos/admin-login.mp4"
          autoPlay
          loop
          muted
          controls
          className="rounded shadow max-w-full h-auto"
        />
      </div>

      {/* Right: Carousel */}
      <div className="flex flex-col justify-center items-center text-center">
        {screen && (
          <>
            <img
              src={screen.src}
              alt={screen.alt}
              className="rounded shadow max-w-full mb-4"
            />
            <p className="mb-4">{screen.description}</p>
          </>
        )}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
