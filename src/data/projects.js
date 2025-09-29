//Front Images
import stwFront from "../assets/stw/front.png";
import erpFront from "../assets/erp/loginFull.png";
import folioFront from "../assets/folio/home.png";
import mediaFront from "../assets/media/front.png";

// Project Data STW

import homecards from "../assets/stw/homecards.png";
import categoryProduct from "../assets/stw/categoryProduct.png";
import cart from "../assets/stw/cart.png";
// import singleproduct from "../assets/stw/singleproduct.png";

// Project Data ERP
import createuser from "../assets/erp/createuser.png";
import servicebill from "../assets/erp/servicebill.png";
import inventory_d from "../assets/erp/inventory_d.png";
import report from "../assets/erp/report.png";

// Project Data Portfolio
import projectskills from "../assets/folio/projectskills.png";
import projectdetails from "../assets/folio/projectdetails.png";
import contact from "../assets/folio/contact.png";

// Project Data Media
import home from "../assets/media/home.png";
import gallery_counts from "../assets/media/gallery_counts.png";
import about from "../assets/media/about.png";
import blog_footer from "../assets/media/blog_footer.png";


export const projects = [
  {
    title: "E-Commerce",
    desc: "Scalable e-commerce platform with seamless shopping experience.",
    // desc: "A modern shopping platform.",
    // hyperlink: "https://shoptheworld.in/",
    // img: "../../src/assets/stw/front.png",
    img: stwFront,
    link: "/project-details",
    // details: {
    //   images: [
    //     "../../src/assets/project1.jpeg",
    //     "../../src/assets/project1.jpeg",
    //     "../../src/assets/project1.jpeg",
    //   ],
    //   points: [
    //     "Built with React & Tailwind",
    //     "Integrated payment gateway",
    //     "Responsive design for all devices",
    //   ],
    // },
    details: {
      sections: [
        {
          image: homecards,
          points: [
            "Designed and developed a clean landing page that highlights featured products with a user-friendly and engaging layout.",
            "Implemented pure CSS for modern styling, responsive layouts, and smooth hover animations without external frameworks.",
            "Migrated the site UI to a more minimal and intuitive design, improving readability and user navigation.",
          ],
        },
        {
          image: categoryProduct,
          points: [
            "Optimized page performance by refining CSS selectors and reducing unnecessary styling overhead.",
            "Designed interactive category cards with responsive scaling and improved load performance with optimized CSS selectors and structure.",
          ],
        },
        {
          image: "../../src/assets/stw/singleproduct.png",
          // image: singleproduct,
          points: [
            "Designed a detailed product page with an emphasis on images, pricing, and descriptive content to guide purchase decisions.",
            "Migrated the product detail UI into a mobile-first design, ensuring usability across all screen sizes.",
            "Developed an “Add to Cart” system with instant feedback, giving users a seamless interaction flow.",
          ],
        },
        {
          image: cart,
          points: [
            "Built an interactive shopping cart that updates product quantities and totals dynamically for user convenience.",
            "Designed a responsive cart structure that adapts smoothly to small and large screen devices.",
            "Implemented a detailed order summary section that displays itemized costs and total pricing.",
          ],
        },
      ],
    }
  },
  {
    title: "ERP Application",
    desc: "Modern ERP system for billing, inventory tracking, and analytics insights.",
    // img: "../../src/assets/erp/loginFull.png",
    img: erpFront,
    link: "/project-details",
    details: {
      sections: [
        {
          image: createuser,
          points: [
            "Designed and developed a secure user creation form with full validation support.",
            "Implemented backend APIs for handling user registration and role-based access control.",
            "Enhanced onboarding process with optimized UI and smooth database-driven workflows.",
          ],
        },
        {
          image: servicebill,
          points: [
            "Added autofill functionality to fetch and populate customer details based on mobile number input.",
            "Developed backend services to generate invoices and calculate taxes automatically.",
            "Connected billing system with inventory to update stock levels in real-time.",
            "Implemented discounts, multiple payment methods, and invoice tracking for businesses.",
          ],
        },
        {
          image: inventory_d,
          points: [
            "Designed an intuitive dashboard to manage stock, add items, and track availability.",
            "Implemented backend logic for single and bulk stock uploads and database synchronization.",
            "Integrated inventory system with billing to ensure accurate real-time product updates.",
            "Added low-stock alerts and reporting features for proactive inventory management.",
          ],
        },
        {
          image: report,
          points: [
            "Built a reporting module allowing users to filter data by custom date range.",
            "Developed backend logic to generate reports with analytics and sales insights.",
            "Implemented export functionality for reports in Excel format.",
          ],
        },
        
        
      ],
    }
  },
  {
    title: "Portfolio",
    desc: "Personal portfolio highlighting skills, projects, and expertise.",
    // desc: "Personal showcase website.",
    // img: "../../src/assets/folio/home.png",
    img: folioFront,
    link: "/project-details",
        details: {
      sections: [
        {
        images: [
          projectskills,
          projectdetails,
          contact,
        ],
        points: [
          "Developed a fully responsive personal portfolio using React.js and Tailwind CSS.",
          // "Implemented a responsive navbar with sidebar menu for seamless mobile and tablet navigation.",
          "Created a dynamic projects section fetching data from a structured JavaScript object.",
          "Showcased skills, technologies, and detailed project highlights with interactive UI components.",
          "Designed clean layouts with reusable components ensuring consistency, scalability, and modern design.",
          "Integrated EmailJS API in contact form to securely receive messages without backend server."
        ],
      }
        
      ],
    }
  },
  {
    title: "Media / Photography Website",
    desc: "Professional showcase website for media and photography projects.",
    // desc: "Personal showcase website.",
    // img: "../../src/assets/media/front.png",
    img: mediaFront,
    link: "/project-details",
        details: {
      sections: [
        {
          image: home,
          points: [
            "Designed and developed a responsive landing page showcasing featured photography work effectively.",
            "Implemented modern UI layout with clean HTML structure and CSS styling techniques.",
            "Integrated navigation menu to allow smooth access to different sections of website.",
            "Built with a focus on simplicity, usability, and modern photography website aesthetics.",
          ],
        },
        {
          image: gallery_counts,
          points: [
            "Created a gallery page displaying photography images with grid-based HTML and CSS.",
            "Added animated counters to showcase statistics like total photos, clients, and projects.",
            "Implemented hover effects for interactive and visually appealing user experience.",
            "Focused on responsive design for mobile, tablet, and desktop screen sizes.",
          ],
        },
        {
          image: about,
          points: [
            "Built a professional about page introducing photographer's background, skills, and services.",
            "Structured content with semantic HTML tags for accessibility and SEO-friendly design.",
            "Styled using CSS to maintain consistent branding, typography, and color palette.",
            "Highlighted personal story, vision, and passion for photography through clean layout.",
          ],
        },
        {
          image: blog_footer,
          points: [
            "Developed blog section with posts layout to share photography insights and experiences.",
            "Added footer with essential links, copyright information, and contact details.",
            "Styled blog and footer using CSS for a cohesive professional appearance.",
            
          ],
        },
        
      ],
    }
  },
];

