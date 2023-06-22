import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@mui/material/Button";

const NewPage = () => {
  const router = useRouter();

  const handleClick = () => {
    // This will navigate back to the "/" route (home page)
    router.push("/");
  };

  return (
    <div style={{ background: "yellow", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1><center>ABOUT</center></h1>
      <p style={{ fontSize: "1.2em" }}>The Random Quote Generator is a delightful web application that brings inspiration and wisdom right at your fingertips. With a sleek and user-friendly interface, it offers a seamless experience for discovering and sharing meaningful quotes. Powered by a robust API, the generator serves up an endless array of thought-provoking quotes from renowned authors, philosophers, and influential figures. Whether you're seeking motivation, enlightenment, or simply a moment of reflection, this tool has you covered. With each click, a new quote materializes, accompanied by captivating designs and typography that enhance the overall visual appeal. Share these gems on social media or use them as daily affirmations—the Random Quote Generator is your go-to source for inspiration in a busy world.</p>
      <p style={{ fontSize: "1.2em" }}>Specification:<br /> 1.Built using Next.Js and Tailwind<br />2.Used MUI for making the Go back home button<br />3.Used useRouter from Next.Js Modules to programmatically navigate through the page</p>
      <Button variant="contained" onClick={handleClick} style={{ marginTop: "1rem" }}>
        Go back to Home
      </Button>
    </div>
  );
};

export default NewPage;






