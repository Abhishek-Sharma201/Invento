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

export const apiURL = "https://invento-backend-bwjj.onrender.com";
