import "./styles.css";
import { useState } from "react";

export default function App() {
  const [quote, setQuote] = useState("Hello, Say Something!");
  const [imgUrl, setImgUrl] = useState(
    "https://source.unsplash.com/U-Kty6HxcQc/500x500"
  );
  const [author, setAuthor] = useState("Somebody");

  return (
    <div className="App">
      <h1>QUOTE IMAGE</h1>
      <h2>"create images with quotes"</h2>
      <input
        id="quote"
        type="text"
        placeholder="Enter the quote"
        onChange={(e) => {
          setQuote(e.target.value);
        }}
      />
      <input
        id="imgUrl"
        type="text"
        placeholder="Enter the Image URL"
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <input
        id="author"
        type="text"
        placeholder="Author"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />

      <img
        src={`https://img.bruzu.com/
?backgroundImage=${imgUrl}
&a.text=${quote}
&a.color=white
&a.fontFamily=Poppins
&a.fontWeight=800
&a.width=450
&b.text= @${author}
&b.width=450
&b.top=480
&b.originY=bottom
&b.color=white
&b.fontFamily=Playfair Display
&b.fontSize=20`}
        alt="Generated"
      />
    </div>
  );
}
