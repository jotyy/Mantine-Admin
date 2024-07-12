import React from "react";

export const OGImage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "-.02em",
        fontWeight: 700,
        background: "white",
      }}
    >
      <div
        style={{
          left: 42,
          top: 42,
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            background: "black",
            borderRadius: 24,
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: 20,
          }}
        >
          @jotyy
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "60px 100px",
          margin: "0 42px",
          fontSize: 50,
          width: "auto",
          maxWidth: 800,
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          lineHeight: 1.4,
        }}
      >
        Mantine Admin
      </div>
    </div>
  );
};
