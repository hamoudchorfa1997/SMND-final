import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "La qualité est notre slogan",
          "votre satisfaction est notre objectif. ",
          "Professionnalisme. Excellence. Ponctualité."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
