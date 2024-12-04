import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Card from "./Cards";

const Clients = () => {
  const API_URL = 'https://46.202.164.225:4000';
  const FAST_DURATION = 25; // Fast animation duration
  const SLOW_DURATION = 75; // Slow animation duration

  const [clients, setClients] = useState([]);
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  // Fetch client data
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/portfolio/getclients`);
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    fetchClients();
  }, []);

  // Scrolling animation
  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8;

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
    <div className="relative py-8 h-[50vh] mt-10 overflow-x-hidden flex justify-center items-center ">
      {/* Title */}
      <div className="absolute top-0 flex justify-center items-center ">
        <h1 className="text-white font-bold text-4xl">Clients</h1>
      </div>

      {/* Carousel */}
      <motion.div
        className="absolute left-0 flex gap-12"
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
          <Card image={`${item.image}`} name={item.name} key={idx} />
        ))}
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 h-[50vh] w-screen pointer-events-none bg-gradient-to-r from-[#000021] via-transparent to-[#000021]" />
    </div>
  );
};

export default Clients;
