import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceAssistant = ({ onCommand }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let recognition = null;

    if ('webkitSpeechRecognition' in window) {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        setTranscript(transcript);
        
        // Process command when speech ends
        if (event.results[0].isFinal) {
          onCommand(transcript);
        }
      };

      recognition.onerror = (event) => {
        setError(event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    } else {
      setError('Speech recognition is not supported in your browser.');
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [onCommand]);

  const toggleListening = () => {
    if (isListening) {
      window.webkitSpeechRecognition.stop();
    } else {
      window.webkitSpeechRecognition.start();
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div className="bg-white rounded-full shadow-lg p-4">
        <button
          onClick={toggleListening}
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            isListening ? 'bg-red-500' : 'bg-blue-500'
          } text-white transition-colors duration-200`}
        >
          {isListening ? <MicOff size={24} /> : <Mic size={24} />}
        </button>
        
        {transcript && (
          <div className="mt-2 p-2 bg-gray-100 rounded-lg text-sm">
            {transcript}
          </div>
        )}
        
        {error && (
          <div className="mt-2 text-red-500 text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant; 