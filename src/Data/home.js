import { FiHeart, FiMapPin, FiStar, FiUsers } from "react-icons/fi";

export const homeData = {
    intro: {
        title: "Welcome to Shri Sai Event",
        subtitle: "Crafting Elegant & Memorable Celebrations",
        description: `
  Shri Sai Event is a trusted event and tent decoration service in Meerut, 
  known for creating elegant and memorable celebrations. We specialize in 
  weddings, parties, and corporate events with creative designs and 
  attention to detail, turning every occasion into a beautiful experience.
`,
        image: "/images/home/home.jpg",
    },

    highlights: [
        {
            title: "Premium Decoration",
            description: "Elegant and luxurious setups designed to impress every guest.",
            icon: "✨",
        },
        {
            title: "Customized Themes",
            description: "Unique themes tailored to match your vision and occasion.",
            icon: "🎨",
        },
        {
            title: "Affordable Pricing",
            description: "High-quality services at competitive and budget-friendly rates.",
            icon: "💰",
        },
        {
            title: "Experienced Team",
            description: "Professional team ensuring smooth planning and execution.",
            icon: "👨‍💼",
        },
    ],

    aboutPreview: {
        title: "Who We Are",
        description: `
      With years of experience in the event industry, Shri Sai Event has built a 
      strong reputation for quality, creativity, and reliability. We focus on 
      every detail to make your event truly special and stress-free.
    `,
        buttonText: "Read More",
        buttonLink: "/about",
    },

   stats: [
   {
      number: "2000+",
      label: "Satisfied Clients",
      icon: FiHeart,
    },
    {
      number: "40+",
      label: "Years in Business",
      icon: FiStar,
    },
    {
      number: "3000+",
      label: "Wedding",
      icon: FiUsers,
    },
    {
      number: "140+",
      label: "Events Completed",
      icon: FiMapPin,
    },
],

   testimonials: [
  {
    name: "Rahul Sharma",
    feedback:
      "Amazing decoration and excellent service! They made our wedding look like a dream.",
    image: "/images/home/testimonial.webp",
  },
  {
    name: "Priya Verma",
    feedback:
      "Very professional team. Everything was perfectly managed and beautifully decorated.",
    image: "/images/home/testimonial.webp",
  },
  {
    name: "Amit Kumar Nimesh",
    feedback:
      "Shri Sai Event and team really work hard and are perfect in their work. They never give a single chance for complaints.",
    image: "/images/home/testimonial.webp",
  },
],

    callToAction: {
        title: "Let’s Make Your Event Unforgettable",
        description:
            "Get in touch with us today and let’s plan your dream event together.",
        buttonText: "Contact Us",
        buttonLink: "/contact",
    },
};