import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particlesConfig";
import '../component/ParticlesBackground.css'

const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  return (
    <>
      <div className="particle-background">
        <Particles
          id="tsparticles"
          options={particlesConfig}
          init={particlesInit}
          className="particles"
        />
      </div>
    </>
  );
};

export default ParticlesBackground;
