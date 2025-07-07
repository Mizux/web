import GUI from "lil-gui";
import Stats from "stats.js";
import { toggleFullScreen } from "./helpers/fullscreen";
import "./style.css";

const CANVAS_ID = "scene";

let canvas: HTMLElement;
let stats: Stats;
let gui: GUI;

init();
animate();

function init() {
  // ===== 🖼️ CANVAS =====
  {
    canvas = document.querySelector(`canvas#${CANVAS_ID}`)!;
  }


  // ===== 📈 STATS & CLOCK =====
  {
    stats = new Stats();
    document.body.appendChild(stats.dom);
  }

  // ==== 🐞 DEBUG GUI ====
  {
    gui = new GUI({ title: "🐞 Debug GUI", width: 300 });

    const canvasFolder = gui.addFolder("Canvas");
    // canvasFolder
    //   .add(cube.position, "x")
    //   .min(-5)
    //   .max(5)
    //   .step(0.5)
    //   .name("pos x");

    // canvasFolder
    //   .add(cube.rotation, "x", -Math.PI * 2, Math.PI * 2, Math.PI / 4)
    //   .name("rotate x");

    // persist GUI state in local storage on changes
    gui.onFinishChange(() => {
      const guiState = gui.save();
      localStorage.setItem("guiState", JSON.stringify(guiState));
    });

    // load GUI state if available in local storage
    const guiState = localStorage.getItem("guiState");
    if (guiState) gui.load(JSON.parse(guiState));

    // reset GUI state button
    const resetGui = () => {
      localStorage.removeItem("guiState");
      gui.reset();
    };
    gui.add({ resetGui }, "resetGui").name("RESET");

    gui.close();
  }
}

function animate() {
  requestAnimationFrame(animate);

  stats.begin();

  stats.end();
}
