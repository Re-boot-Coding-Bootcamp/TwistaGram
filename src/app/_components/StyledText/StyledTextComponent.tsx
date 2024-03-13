import React from "react";
import { useTheme } from "@mui/material";

interface StyledTextProps {
  text: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text }) => {
  const theme = useTheme();

  const renderStyledText = (inputText: string) => {
    const wordsWithTags = inputText.split(/(\s+)/);

    return (
      <>
        {wordsWithTags.map((word, index) =>
          word.startsWith("@") || word.startsWith("#") ? (
            <span key={index} style={{ color: theme.palette.primary.main }}>
              {word}
            </span>
          ) : (
            word
          )
        )}
      </>
    );
  };

  return <>{renderStyledText(text)}</>;
};

export { StyledText };
