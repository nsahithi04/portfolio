import gsap from "gsap";
import "../style/index.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".blob-1", {
  x: -500,
  y: 300,
  scale: 1.2,
  rotation: 180,
  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});

gsap.to(".blob-2", {
  x: 400,
  y: -250,
  scale: 1.1,
  rotation: -180,
  borderRadius: "35% 65% 55% 45% / 55% 35% 65% 45%",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
});

gsap.fromTo(
  ".about",
  { y: "40vh" },
  {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
  },
);

const track = document.querySelector(".track");

gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".projects-wrap",
    start: "top+=40 top",
    end: () => "+=" + (track.scrollWidth - window.innerWidth - 80),
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});

document.querySelector('a[href="#projects"]').addEventListener("click", (e) => {
  e.preventDefault();
  const section = document.querySelector(".projects-wrap");
  const rect = section.getBoundingClientRect();
  const scrollTop =
    window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;
  window.scrollTo({ top: scrollTop, behavior: "smooth" });
});
