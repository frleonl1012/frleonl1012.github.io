import { Box, Typography } from "@mui/material";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Box
      sx={{
        mb: { xs: 6, md: 8 },
        textAlign: align,
        maxWidth: align === "center" ? 760 : 720,
        mx: align === "center" ? "auto" : 0,
      }}
    >
      {eyebrow ? (
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "0.82rem",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.4rem", md: "3.5rem" },
          lineHeight: 1,
          letterSpacing: "-0.04em",
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 86,
          height: 5,
          borderRadius: 999,
          bgcolor: "primary.main",
          mx: align === "center" ? "auto" : 0,
          mb: 3,
        }}
      />
      {description ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1rem", md: "1.12rem" },
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}

export default SectionHeading;
