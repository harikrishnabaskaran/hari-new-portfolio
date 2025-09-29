export const projects = [
  {
    title: "E-Commerce",
    desc: "Scalable e-commerce platform with seamless shopping experience.",
    // desc: "A modern shopping platform.",
    // hyperlink: "https://shoptheworld.in/",
    img: "../../src/assets/stw/front.png",
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
          image: "../../src/assets/stw/homecards.png",
          points: [
            "Designed and developed a clean landing page that highlights featured products with a user-friendly and engaging layout.",
            "Implemented pure CSS for modern styling, responsive layouts, and smooth hover animations without external frameworks.",
            "Migrated the site UI to a more minimal and intuitive design, improving readability and user navigation.",
          ],
        },
        {
          image: "../../src/assets/stw/categoryProduct.png",
          points: [
            "Optimized page performance by refining CSS selectors and reducing unnecessary styling overhead.",
            "Designed interactive category cards with responsive scaling and improved load performance with optimized CSS selectors and structure.",
          ],
        },
        {
          image: "../../src/assets/stw/singleproduct.png",
          points: [
            "Designed a detailed product page with an emphasis on images, pricing, and descriptive content to guide purchase decisions.",
            "Migrated the product detail UI into a mobile-first design, ensuring usability across all screen sizes.",
            "Developed an “Add to Cart” system with instant feedback, giving users a seamless interaction flow.",
          ],
        },
        {
          image: "../../src/assets/stw/cart.png",
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
    img: "../../src/assets/erp/loginFull.png",
    link: "/project-details",
    details: {
      sections: [
        {
          image: "../../src/assets/erp/createuser.png",
          points: [
            "Designed and developed a secure user creation form with full validation support.",
            "Implemented backend APIs for handling user registration and role-based access control.",
            "Enhanced onboarding process with optimized UI and smooth database-driven workflows.",
          ],
        },
        {
          image: "../../src/assets/erp/servicebill.png",
          points: [
            "Added autofill functionality to fetch and populate customer details based on mobile number input.",
            "Developed backend services to generate invoices and calculate taxes automatically.",
            "Connected billing system with inventory to update stock levels in real-time.",
            "Implemented discounts, multiple payment methods, and invoice tracking for businesses.",
          ],
        },
        {
          image: "../../src/assets/erp/inventory_d.png",
          points: [
            "Designed an intuitive dashboard to manage stock, add items, and track availability.",
            "Implemented backend logic for single and bulk stock uploads and database synchronization.",
            "Integrated inventory system with billing to ensure accurate real-time product updates.",
            "Added low-stock alerts and reporting features for proactive inventory management.",
          ],
        },
        {
          image: "../../src/assets/erp/report.png",
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
    img: "../../src/assets/folio/home.png",
    link: "/project-details",
        details: {
      sections: [
        {
        images: [
          "../../src/assets/folio/projectskills.png",
          "../../src/assets/folio/projectdetails.png",
          "../../src/assets/folio/contact.png",
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
    img: "../../src/assets/media/front.png",
    link: "/project-details",
        details: {
      sections: [
        {
          image: "../../src/assets/media/home.png",
          points: [
            "Designed and developed a responsive landing page showcasing featured photography work effectively.",
            "Implemented modern UI layout with clean HTML structure and CSS styling techniques.",
            "Integrated navigation menu to allow smooth access to different sections of website.",
            "Built with a focus on simplicity, usability, and modern photography website aesthetics.",
          ],
        },
        {
          image: "../../src/assets/media/gallery_counts.png",
          points: [
            "Created a gallery page displaying photography images with grid-based HTML and CSS.",
            "Added animated counters to showcase statistics like total photos, clients, and projects.",
            "Implemented hover effects for interactive and visually appealing user experience.",
            "Focused on responsive design for mobile, tablet, and desktop screen sizes.",
          ],
        },
        {
          image: "../../src/assets/media/about.png",
          points: [
            "Built a professional about page introducing photographer's background, skills, and services.",
            "Structured content with semantic HTML tags for accessibility and SEO-friendly design.",
            "Styled using CSS to maintain consistent branding, typography, and color palette.",
            "Highlighted personal story, vision, and passion for photography through clean layout.",
          ],
        },
        {
          image: "../../src/assets/media/blog_footer.png",
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

