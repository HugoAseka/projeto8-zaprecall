import React from "react";
import Footer from "./Footer";
export default function Test({
  front,
  index,
  question,
  Frontface,
  Backface,
  Answers,
  answer,
  correct,
  ShowCorrect,
  setwrong,
  ShowWrong,
  setalmost,
  ShowAlmost,
}) {
  if (front === "initial") {
    return (
      <>
        <Frontface cardstate={front} index={index} />
      </>
    );
  } else if (front === "question") {
    return (
      <>
        <Backface question={question} index={index} />
      </>
    );
  } else if (front === "answer") {
    return (
      <Answers
        index={index}
        answer={answer}
        correct={correct}
        setwrong={setwrong}
        setalmost={setalmost}
      />
    );
  } else if (front === "correct") {
    return <ShowCorrect cardstate={front} index={index} />;
  } else if (front === "wrong") {
    return <ShowWrong cardstate={front} index={index} />;
  } else if (front === "almost") {
    return <ShowAlmost cardstate={front} index={index} />;
  }
}
