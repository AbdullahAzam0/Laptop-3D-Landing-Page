import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import LaptopContainer from "./LaptopContainer";

const App = () => {
  return (
    <div className="w-full h-screen relative bg-black">
      {/* Navbar with more options and centered items */}
      <div className="navbar flex justify-center gap-10 w-full top-0 left-1/2 -translate-x-1/2 absolute z-10 bg-black p-4 shadow-lg">
        {[
          "Iphone",
          "Ipad",
          "Services",
          "iOS",
          "Mac",
          "Watch",
          "TV",
          "Music",
          "Support",
        ].map((e, index) => (
          <a
            key={index}
            href="#"
            className="text-white font-[500] hover:text-gray-300 transition duration-300"
          >
            {e}
          </a>
        ))}
      </div>

      {/* Styled Header Section */}
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display'] text-center p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-black bg-opacity-70 rounded-lg shadow-xl">
        <h3 className="text-7xl tracking-tighter font-[700] text-gray-100 drop-shadow-lg">
          Laptop
        </h3>
        <h5 className="text-2xl font-[600] text-gray-300 drop-shadow-lg">
          Oh so pro
        </h5>
        <p className="text-center w-3/4 text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
          voluptates suscipit voluptatum quas blanditiis veniam debitis.
          Molestias iste dolore aperiam!
        </p>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <LaptopContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
