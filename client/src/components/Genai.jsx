import axios from 'axios'
import React, { useState } from 'react'

const Genai = async(text) => {
    const ans = await axios.post('http://localhost:3000/generate',{text})
  return (
    <div>
       <div>
      <Nav />
      <p className="text-xl mx-9">
        Microphone: {listening ? <span className="text-green-500 font-bold">ON</span> : <span className="text-red-600 font-extrabold">OFF</span>}
      </p>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-4 mt-6 mx-10">
        {/* Grid-1 */}
        <div className="p-4 bg-white shadow-md">
          <h2 className="text-lg font-bold mb-2">Patient Name: John Doe</h2>
          <div className="flex items-center mb-4">
            <span className="mr-2">Mic:</span>
            <Button color="success" onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })}>On</Button>
          </div>
          <div className="flex justify-between mb-4">
            <Button color="success" onClick={() => {
              // resetTranscript();
              SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
            }}>Start</Button>
            <Button color="warning" onClick={SpeechRecognition.stopListening}>Pause</Button>
            <Button color="danger" onClick={SpeechRecognition.stopListening}>Stop</Button>
          </div>
          <Textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="10"
            placeholder="Edit text area which will transcribe from recorded audio and you can edit it"
            value={transcript || text}
            onChange={handleTranscriptChange}
          ></Textarea>
          <Button color="primary" onClick={() => {
          }}>Reset</Button>
          <Button className='mt-2' color="primary" onClick={() => {
          }}>Proceed</Button>
        </div>

        {/* Grid-2 */}
        <div className="p-4 bg-white shadow-md">
          <h2 className="text-lg font-bold mb-2">Patient Report</h2>
          <Textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="15"
            placeholder="Plain text patient report fetched from database will be displayed here"
            value={summary}
            readOnly
          ></Textarea>
          {/* <Button
            color="primary"
            onClick={async () => {
              await axios.post('http://localhost:3000/text', { transcript: transcript || text });
            }}
          >Save</Button> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Genai