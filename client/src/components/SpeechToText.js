import React, { useEffect, useState } from "react";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true; // Keep listening continuously
    recognitionInstance.interimResults = false; // Only get final results

    recognitionInstance.onresult = (event) => {
      const result = event.results[event.resultIndex];
      if (result.isFinal) {
        setTranscript((prev) => prev + " " + result[0].transcript); // Update transcript
      }
    };

    recognitionInstance.onend = () => {
      if (isListening) {
        recognitionInstance.start(); // Restart listening if it's active
      }
    };

    setRecognition(recognitionInstance);
  }, [isListening]);

  const toggleListening = () => {
    if (isListening) {
      recognition.stop(); // Stop recognition
      setIsListening(false);
    } else {
      recognition.start(); // Start recognition
      setIsListening(true);
    }
  };

  return (
    <div className="speech-to-text">
      <h2>Speech to Text Transcription</h2>
      <button onClick={toggleListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <p>{transcript}</p> {/* Display the transcript */}
    </div>
  );
};

export default SpeechToText;
