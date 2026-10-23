import ScaleButton from "../library/buttons/ScaleButton";
import ScaleButtonCode from "../library/buttons/ScaleButton.jsx?raw";
import JackalHowlButton from "../library/buttons/JackalHowlButton";
import JackalHowlButtonCode from "../library/buttons/JackalHowlButton.jsx?raw";
import Liftcard from "../library/cards/Liftcard";
import LiftcardCode from "../library/cards/Liftcard.jsx?raw";
import TiltCard from "../library/cards/TiltCard";
import TiltCardCode from "../library/cards/TiltCard.jsx?raw";
import JackalCard from "../library/cards/JackalCard";
import JackalCardCode from "../library/cards/JackalCard.jsx?raw";
import GettingStartedDoc from "../library/docs/GettingStartedDoc";
import JackalNav from "../library/navigation/JackalNav";
import JackalNavCode from "../library/navigation/JackalNav.jsx?raw";
import Navbar from "../library/navigation/Navbar";
import NavbarCode from "../library/navigation/Navbar.jsx?raw";
import Sidebar from "../library/navigation/Sidebar";
import SidebarCode from "../library/navigation/Sidebar.jsx?raw";

export const componentsList = [
  {
    id: "getting-started-doc",
    category: "Getting Started",
    isDoc: true,
    component: <GettingStartedDoc />,
  },
  {
    id: "jackal-card",
    category: "Cards",
    featured: true,
    title: "Jackal Card",
    description:
      "The signature Jackal UI card. Features a glowing flashlight effect and animated eyes tracking your cursor.",
    code: JackalCardCode,
    component: <JackalCard />,
  },
  {
    id: "scale-button",
    category: "Buttons",
    title: "Scale Button",
    description: "Animated hover and tap button, perfect for Call to Actions.",
    code: ScaleButtonCode,
    component: <ScaleButton />,
  },
  {
    id: "jackal-howl-button",
    category: "Buttons",
    featured: true,
    title: "Jackal Howl Button",
    description:
      "Emits amber sound waves on click, with magnetic tracking and glossy reflection.",
    code: JackalHowlButtonCode,
    component: <JackalHowlButton />,
  },
  {
    id: "lift-card",
    category: "Cards",
    title: "Lift Card",
    description:
      "Elegant card with glowing borders and a smooth lift effect on hover.",
    code: LiftcardCode,
    component: <Liftcard />,
  },
  {
    id: "tilt-card",
    category: "Cards",
    title: "Tilt 3D Card",
    description:
      "Interactive 3D card that rotates tracking your mouse coordinates.",
    code: TiltCardCode,
    component: <TiltCard />,
  },
  {
    id: "jackal-nav",
    category: "Navigation",
    featured: true,
    title: "Jackal Nav",
    description:
      "A sleek horizontal navigation. A glowing pill follows your interactions tracking your scent.",
    code: JackalNavCode,
    component: <JackalNav />,
  },
  {
    id: "navbar",
    category: "Navigation",
    title: "Classic Navbar",
    description: "A responsive, traditional navbar with a mobile hamburger menu.",
    code: NavbarCode,
    component: <Navbar />,
  },
  {
    id: "sidebar",
    category: "Navigation",
    title: "Collapsible Sidebar",
    description: "A vertical sidebar that can be collapsed to save space.",
    code: SidebarCode,
    component: <Sidebar />,
  },
];

// Spazio pronto per le tue future idee (es. Dashboard, Landing Pages).
export const templatesList = [];
