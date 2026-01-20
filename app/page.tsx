"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://agent.d-id.com/v2/index.js";
    script.setAttribute("data-client-key", "c3RhbmR3aXRodXNpc3JhZWxAZ21haWwuY29t:llldq-gXzqRpkoTlixn7_");
    script.setAttribute("data-agent-id", "v2_agt_bRJbyftV");
    script.setAttribute("data-name", "did-agent");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main style={{ height: "100vh", background: "#fff" }}>
      <h1>D-ID Agent</h1>
    </main>
  );
}
