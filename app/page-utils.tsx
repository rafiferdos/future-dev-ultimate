// Utility function to ensure consistent styling between server and client
export function getBackgroundStyles(theme: string) {
  return {
    // Grid background - use camelCase properties
    gridBackground: {
      backgroundImage:
        theme === "dark"
          ? "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)"
          : "linear-gradient(to right, rgba(79, 70, 229, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 70, 229, 0.15) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    },

    // Gradient accents - use camelCase properties
    topRightAccent: {
      top: "-5%",
      right: "-5%",
      background:
        theme === "dark"
          ? "radial-gradient(circle, rgba(79, 70, 229, 0.3), transparent 70%)"
          : "radial-gradient(circle, rgba(79, 70, 229, 0.2), transparent 70%)",
      opacity: 0.6,
    },

    bottomLeftAccent: {
      bottom: "-5%",
      left: "-5%",
      background:
        theme === "dark"
          ? "radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)"
          : "radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%)",
      opacity: 0.6,
    },

    middleAccent: {
      top: "25%",
      left: "25%",
      background:
        theme === "dark"
          ? "radial-gradient(circle, rgba(56, 189, 248, 0.2), transparent 70%)"
          : "radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent 70%)",
      opacity: 0.4,
    },
  };
}

// Get path colors for consistent server/client rendering
export function getPathColors(theme: string) {
  return {
    primary: theme === "dark" ? "#60a5fa" : "#3b82f6",
    secondary: theme === "dark" ? "#818cf8" : "#6366f1",
  };
}
