import "./css/variables.css";
import "./css/font.css";
import "./css/normalise.css";
import "./css/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <title>Santiago Miranda</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
