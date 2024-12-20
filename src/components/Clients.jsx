import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Card from "./Cards";

const Clients = () => {
  const API_URL = 'https://api.rounak.co';
  const FAST_DURATION = 25; // Fast animation duration
  const SLOW_DURATION = 75; // Slow animation duration

  const placeholderClients = Array(9)
    .fill(null)
    .map((_, index) => ({
      name: "Loading...",
      image: `/`, // Generate unique image names
    }));

  const [clients, setClients] = useState(placeholderClients);
  const [loaded, setLoaded] = useState(false); // Track if the API data has loaded
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []); // Initialize smooth scrolling

  // Fetch client data
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/portfolio/getclients`);
        setClients(response.data);
        setLoaded(true); // Set loaded to true once data is fetched
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    fetchClients();
  }, []);

  // Scrolling animation
  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 19;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  if (clients.length === 0) {
    return <div>Loading clients...</div>;
  }

  return (
    <div className="relative py-8  h-[50vh]  mt-5 md:mt-10 overflow-x-hidden flex justify-center items-center ">
      {/* Title */}
      <div className="absolute top-0 flex justify-center items-center ">
        <h1 className="text-white font-bold text-4xl">Clients</h1>
      </div>

      {/* Carousel */}
      <motion.div
        className="absolute left-0 flex  gap-10"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...clients, ...clients].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: loaded ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Adjust duration for fade-in
          >
            <Card image={`${item.image}`} name={item.name} />
          </motion.div>
        ))}
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 h-[50vh] w-screen pointer-events-none bg-gradient-to-r from-[#000021] via-transparent to-[#000021]" />
    </div>
  );
};

export default Clients;
