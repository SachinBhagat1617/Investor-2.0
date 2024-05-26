import React, { useEffect } from "react";

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-tf-live="01HYPZCHWM4R92PE4CJ1FD3HZ6"></div>;
};

export default TypeformEmbed;
