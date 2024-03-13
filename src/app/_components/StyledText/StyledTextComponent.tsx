import React from "react";
import { useTheme } from "@mui/material";

interface StyledTextProps {
  text: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text }) => {
  const theme = useTheme(); // Using MUI theme for consistent styling

  // Function to split text and apply styles to tagged words
  const renderStyledText = (inputText: string) => {
    const wordsWithTags = inputText.split(/(\s+)/); // Split by whitespace while keeping it in the result

    return (
      <>
        {wordsWithTags.map((word, index) =>
          word.startsWith("@") || word.startsWith("#") ? (
            <span key={index} style={{ color: theme.palette.primary.main }}>
              {word}
            </span>
          ) : (
            word // Non-tagged words are rendered as-is
          )
        )}
      </>
    );
  };

  return (
    <>{renderStyledText(text)}</> // Render the processed text
  );
};

export { StyledText };
