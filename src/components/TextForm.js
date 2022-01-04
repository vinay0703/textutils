import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCopy = () => {
    //Use .select() method to highlight the selected text
    navigator.clipboard.writeText(document.getElementById("myBox").value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleDelete = () => {
    let flag = window.confirm("Are you sure to delete all text?");
    if (flag) {
      setText("");
      props.showAlert("Deleted all text", "success");
    }
  };

  const handleBeautify = () => {
    if (text.length > 0) {
      //Removing extra spaces
      let newText = text.split(/[ ]+/);
      newText = newText.join(" ");

      //Adding space after . and changing into titleCase
      newText = newText.split(".");
      for (let i = 0; i < newText.length; i++) {
        if (newText[i] === "") {
          continue;
        }
        newText[i] = newText[i][0].toUpperCase() + newText[i].substr(1);
      }
      newText = newText.join(". ");

      //Adding space after ,
      newText = newText.split(",");
      newText = newText.join(", ");

      //Adding space after !
      newText = newText.split("!");
      newText = newText.join("! ");

      //Adding space after ?
      newText = newText.split("?");
      newText = newText.join("? ");

      //Formatting the actual text
      setText(newText);
      props.showAlert("Beautified text", "success");
    } else {
      props.showAlert("Textarea is empty", "danger");
    }
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const timeRead = ()=>{
    //Average time to read one word is 0.0033 minutes.
    let tR = 0.0033 * 60 * (text.length ? text.trim().split(/\s+/).length : 0);
    //Setting precision to 4 numbers after decimal point.
    if(tR >= 3600){
      tR = tR / 3600;
      tR = tR.toFixed(4);
      return (String(tR) + " Hours read.");
    }
    else if(tR >= 60){
      tR = tR / 60;
      tR = tR.toFixed(4);
      return (String(tR) + " Minutes read.");
    }
    else{
      tR = tR.toFixed(4);
      return (String(tR) + " Seconds read.");
    }
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleBeautify}
        >
          Beautify Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleDelete}
        >
          Delete Text
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <hr />
        <p>
          {text.length ? text.trim().split(/\s+/).length : 0} words and{" "}
          {text.length} characters
        </p>
        <p>
          {timeRead()}
        </p>
        <br />
        <h2>Preview</h2>
        <hr />
        <pre>{text.length === 0 ? "Nothing to preview :(" : text}</pre>
      </div>
    </>
  );
}
