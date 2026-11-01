
//Front Images
import stwFront from "../assets/stw/front.png";
import erpFront from "../assets/erp/loginFull.png";
import folioFront from "../assets/folio/home.png";
import mediaFront from "../assets/media/front.png";

// Project Data ERP
import createuser from "../assets/erp/createuser.png";
import servicebill from "../assets/erp/servicebill.png";
import inventory_d from "../assets/erp/inventory_d.png";
import report from "../assets/erp/report.png";
import Dboard from '../assets/erp/Dboard.png'
import Roomavailable from '../assets/erp/Roomavailable.png'

// Project Data Portfolio
import projectskills from "../assets/folio/projectskills.png";
import projectdetails from "../assets/folio/projectdetails.png";
import contact from "../assets/folio/contact.png";

// Project Data Media
import home from "../assets/media/home.png";
import gallery_counts from "../assets/media/gallery_counts.png";
import about from "../assets/media/about.png";
import blog_footer from "../assets/media/blog_footer.png";

//Project Support Desk
import agentactivity from "../assets/supportdesk/agentactivity.png";
import aiworkspace from "../assets/supportdesk/aiworkspace.png";
import Customers from "../assets/supportdesk/Customers.png";
import Knowledge from "../assets/supportdesk/Knowledge.png";
import Reports from "../assets/supportdesk/Reports.png";
import Ticket from "../assets/supportdesk/Ticket.png";
import Overview from "../assets/supportdesk/Overview.png";


export const projects = [
  {
    title: "ERP Application",
    // desc: "erpDesc",
    img: erpFront,
    link: "/project-details",
    details: {
      sections: [
        {
          image: Dboard,
          points: ["erppoint1", "erppoint2", "erppoint3"],
        },
        {
          image: servicebill,
          points: ["erppoint4", "erppoint5", "erppoint6", "erppoint7"],
        },
        {
          image: inventory_d,
          points: ["erppoint8", "erppoint9", "erppoint10", "erppoint11"],
        },
        {
          image: Roomavailable,
          points: [
            "erppoint12",
            "erppoint13",
            "erppoint14",
            "erppoint15",
            "erppoint16",
            "erppoint17",
          ],
        },
        {
          image: createuser,
          points: ["erppoint18", "erppoint19", "erppoint20"],
        },
        {
          image: report,
          points: ["erppoint21", "erppoint22", "erppoint23"],
        },
      ],
    },
  },
  {
    title: "Media Website",
    // desc: "mediaDesc",
    img: mediaFront,
    link: "/project-details",
    details: {
      sections: [
        {
          image: home,
          points: ["mediapoint1", "mediapoint2", "mediapoint3", "mediapoint4"],
        },
        {
          image: gallery_counts,
          points: ["mediapoint5", "mediapoint6", "mediapoint7", "mediapoint8"],
        },
        {
          image: about,
          points: [
            "mediapoint9",
            "mediapoint10",
            "mediapoint11",
            "mediapoint12",
          ],
        },
        {
          image: blog_footer,
          points: ["mediapoint13", "mediapoint14", "mediapoint15"],
        },
      ],
    },
  },
    {
    title: "Support Desk AI",
    // desc: "mediaDesc",
    img: Overview,
    link: "/project-details",
    details: {
      sections: [
       {
  image: Overview,
  points: [
    "supportdeskpoint1",
    "supportdeskpoint2",
    "supportdeskpoint3",
    "supportdeskpoint4",
  ],
},
        {
          image: Ticket,
          points: ["supportdeskpoint5", "supportdeskpoint6", "supportdeskpoint7", "supportdeskpoint8"],
        },
        {
          image: Customers,
          points: [
            "supportdeskpoint9",
            "supportdeskpoint10",
            "supportdeskpoint11",
            "supportdeskpoint12",
          ],
        },
        {
          image: Knowledge,
          points: ["supportdeskpoint13", "supportdeskpoint14", "supportdeskpoint15","supportdeskpoint16"],
        },
         {
          image: Reports,
          points: ["supportdeskpoint17", "supportdeskpoint18", "supportdeskpoint19","supportdeskpoint20"],
        },
         {
          image: aiworkspace,
          points: ["supportdeskpoint21", "supportdeskpoint22", "supportdeskpoint23","supportdeskpoint24"],
        },
         {
          image: agentactivity,
          points: ["supportdeskpoint25", "supportdeskpoint26", "supportdeskpoint27","supportdeskpoint28"],
        },
      ],
    },
  },
];
