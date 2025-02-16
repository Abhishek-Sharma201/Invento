import { AssetsStore, Blender, SketchFab, Unity } from "./SVG";

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
    work: "Component resource",
  },
  {
    name: "Shrikant Jadhav",
    role: "Member",
    work: "Animations",
  },
  {
    name: "Abhishek Sharma",
    role: "Member",
    work: "Coding stuff",
  },
  {
    name: "Rohan Saroj",
    role: "Member",
    work: "Controls",
  },
  {
    name: "Sourav Pant",
    role: "Member",
    work: "Support",
  },
];
export const apiURL = "https://invento-backend-bwjj.onrender.com";

export const AvatarData = {
  name: "Avatar",
  desc: "Venture into stunning realms, slay monsters, and conquer the unknown—Unleash your power in Unity's masterpiece!",
  isBeta: true,
  downloadLink: "#",
  buildUsing: ["Unity", "Blender", "Sketch-Fab", "Assest Store"],
  buildInvestement: 100,
  images: { main: "/assets/i1.jpg", list: [] },
};

export const GameData = [
  {
    image: "/assets/i1.jpg",
    title: "Avatar",
    desc: "desc of the game",
    link: "/avatar",
  },
];
