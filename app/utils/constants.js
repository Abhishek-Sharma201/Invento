import { AssetsStore, Blender, SketchFab, Unity } from "./SVG";
import dotenv from "dotenv";

dotenv.config();

export const GameResources = [
  {
    name: "Blender",
    use: "3D Component",
    svg: Blender,
  },
  {
    name: "Unity",
    use: "Application",
    svg: Unity,
  },
  {
    name: "SketchFab",
    use: "Maps",
    svg: SketchFab,
  },
  {
    name: "Assest Store",
    use: "Assets",
    svg: AssetsStore,
  },
];
export const TeamData = [
  {
    name: "Sujal Adak",
    role: "Leader",
    work: "Game Designer",
  },
  {
    name: "Shrikant Jadhav",
    role: "Member",
    work: "Level Designer",
  },
  {
    name: "Abhishek Sharma",
    role: "Member",
    work: "Web Maintainer/Programmer",
  },
  {
    name: "Jay Sawant",
    role: "Member",
    work: "Game Programmer",
  },
  {
    name: "Mohit Rathod",
    role: "Member",
    work: "Editor",
  },
  {
    name: "Swayam Dey",
    role: "Member",
    work: "3D Artist",
  },
];
// export const apiURL = "https://invento-backend-bwjj.onrender.com";
export const apiURL = process.env.NEXT_PUBLIC_API_URL || "https://invento-backend-bwjj.onrender.com";


export const AvatarData = {
  name: "Avatar",
  desc: `Players explore ancient mystical forests, guided by a narrator, overcoming
dangerous obstacles and completing story-driven tasks to unlock portals and progress
through the journey.`,
  isBeta: true,
  downloadLink: "https://999studio.itch.io/tripo-the-lost-path",
  buildUsing: ["Unity", "Blender", "Sketch-Fab", "Assest Store"],
  buildInvestement: 100,
  images: { main: "/assets/Avatar.jpeg", list: [] },
};

export const GameData = [
  {
    image: "/assets/i1.jpg",
    title: "Avatar",
    desc: "desc of the game",
    link: "/avatar",
  },
];
