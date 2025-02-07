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
