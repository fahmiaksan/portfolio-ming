export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Quiz App",
    des: " I developed Quiz App, an interactive platform offering an engaging learning experience. Key features include:- Diverse Topics: Choose from various quiz topics.- Adjustable Levels: Customize your difficulty levels.- Responsive UI: Optimized for all devices.- Analysis and Feedback: Instant feedback and progress tracking.- This project highlights my skills in creating user-friendly and functional web applications. Explore how I can help you build creative web solutions! Visit: https://quiz-app-roan-tau-43.vercel.app",
    img: "/quiz.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://quiz-app-roan-tau-43.vercel.app",
  },
  {
    id: 2,
    title: "Travel - Tour To Tuscany",
    des: "I have meticulously crafted a comprehensive UI/UX design in Figma, featuring an intuitive and visually appealing design. This design has been expertly converted into a functional website using Next.js and Tailwind CSS, ensuring a responsive, fast-loading, and aesthetically pleasing user interface. In addition to the frontend development, we have also integrated various APIs to enhance the website's functionality and provide a dynamic user experience.",
    img: "/travel.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "Shopping Hub",
    des: "I have build and deploy Shopping-hub web app. a web app with e-commerce features such as cart pages, product categories, etc. The technology stack that I use is React JS, Tailwind CSS, Redux Toolkit.",
    img: "/shopping.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/shopping-hub-tau.vercel.app",
  },
  {
    id: 5,
    title: "Bukadigital Website",
    des: "During my internship as an IT Team member at Bukadigital Indonesia, I was responsible for managing and optimizing their website, which is built using WordPress. My tasks included customizing themes, optimizing website performance, and ensuring a smooth user experience. Additionally, I implemented new features, improved SEO, and collaborated with the team to troubleshoot technical issues. This experience helped me gain deeper insights into WordPress development and website management in a real business environment.",
    img: "/bukadigital.png",
    iconLists: ["/wordpress.svg", "/php.svg", "/mysql.svg"],
    link: "https://bukadigital.id/"
},{
    id: 6,
    title: "Botaniseed Website",
    des: "I contributed to the development of the Botaniseed IPB website, a platform dedicated to promoting and selling high-quality agricultural seeds. Built using WordPress, the website features a well-structured product catalog, seamless user navigation, and an optimized checkout experience. My role involved customizing the theme, enhancing website performance, and ensuring mobile responsiveness. Additionally, I worked on improving SEO to increase online visibility and reach a wider audience.",
    img: "/botani-seed.png",
    iconLists: ["/wordpress.svg", "/php.svg", "/mysql.svg"],
    link: "https://botaniseedipb.com/"
}


];

export const testimonials = [
  {
    quote:
      "Collaborating with Fahmi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Fahmi enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Fahmi is the ideal partner.",
    name: "Arslan M",
    title: "Client Freelance",
  },
  {
    quote:
      "The best freelancer I’ve worked with! Fahmi delivered on time and with exceptional quality. Our website now runs smoother and looks better than ever.",
    name: "Aaliyahb4",
    title: "Client Freelance",
  },
  {
    quote:
      "Fahmi did an outstanding job creating our company's profile website. His attention to detail and commitment to delivering a user-friendly, responsive, and functional site was impressive. We couldn't be happier with the results.",
    name: "Fadhil",
    title: "Founder Cipta Kencana",
  },
];


export const workExperience = [
  {
    id: 2,
    title: "Wordpress Developer",
    desc: "Developed and maintained the company profile website using WordPress, ensuring it was user-friendly, responsive, and functional.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Builded a web app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/fahmiaksan"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/fhmiaksn?t=pyIBaLq3iOTT8X-ua8KBiw&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/fahmi-aksan-nugroho-090b452a2"
  },
];
