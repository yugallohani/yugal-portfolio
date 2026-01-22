import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "talentiq",
    category: "AI Platform",
    title: "TalentIQ",
    src: "/assets/projects-screenshots/talentiq/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://talentiq-demo.vercel.app",
    github: "https://github.com/yugallohaniwww/talentiq",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TalentIQ = AI-Powered Recruitment Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            TalentIQ is a decentralized platform for enhancing student engagement in education through automated incentives. 
            Built with AI-powered solutions leveraging blockchain for token-based learning incentive and secure certificate 
            verification using AI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">AI-Powered Matching</TypographyH3>
          <p className="font-mono mb-2">
            Enhanced user interaction and engagement across student and professional communities by 40% 
            through intelligent matching algorithms and automated incentive systems.
          </p>
          <TypographyH3 className="my-4 mt-8">Blockchain Integration</TypographyH3>
          <p className="font-mono mb-2">
            Implemented secure certificate verification and token-based learning incentives using blockchain technology, 
            ensuring transparency and trust in the educational ecosystem.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with AI, Node.js, Express, MongoDB, and Python for robust backend processing and machine learning capabilities.
          </p>
        </div>
      );
    },
  },
  {
    id: "elite-smart-queue",
    category: "Queue Management",
    title: "Elite - Smart Queue Management System",
    src: "/assets/projects-screenshots/elite/landing.png",
    screenshots: ["landing.png"],
    live: "https://elite-queue-demo.vercel.app",
    github: "https://github.com/yugallohaniwww/elite-smart-queue",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.python,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Elite is a comprehensive smart queue management platform that revolutionizes how businesses handle customer flow. 
            Built with full-stack queue management system with real-time SMS alerts, and AI analytics, reducing 
            customer wait times by 60% and professional engagement by 40%.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Real-time Queue Management</TypographyH3>
          <p className="font-mono mb-2">
            Advanced queue algorithms with real-time updates and SMS notifications keep customers informed 
            about their position and estimated wait times.
          </p>
          <TypographyH3 className="my-4 mt-8">AI Analytics Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive analytics powered by AI to track queue performance, customer satisfaction, 
            and operational efficiency with actionable insights.
          </p>
          <TypographyH3 className="my-4 mt-8">Performance Impact</TypographyH3>
          <p className="font-mono mb-2">
            Successfully reduced customer wait times by 60% and increased professional engagement by 40% 
            through intelligent queue optimization and automated communication systems.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My 3D Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://yugallohani.vercel.app",
    github: "https://github.com/yugallohaniwww/3d-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital showcase, where innovation meets elegant design in a stunning 3D environment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Interactive 3D Elements
          </TypographyH3>
          <p className="font-mono mb-2">
            Featuring immersive 3D models and animations that showcase technical skills in an engaging, 
            interactive format. Built with Spline and Three.js for smooth performance.
          </p>
          <TypographyH3 className="my-4 ">Modern Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Powered by Next.js 14, TypeScript, and modern animation libraries including GSAP and Framer Motion 
            for buttery-smooth interactions and professional presentation.
          </p>
          <TypographyH3 className="my-4 mt-8">Professional Showcase</TypographyH3>
          <p className="font-mono mb-2">
            A comprehensive display of projects, skills, and experience designed to impress recruiters, 
            startup founders, and potential clients in the tech industry.
          </p>
        </div>
      );
    },
  },
];
export default projects;
