import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, ScrollShadow } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { useDisclosure } from '@nextui-org/react';
import Nav from './Navbar';

const Translate = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { id } = useParams();
    const [details, setDetails] = useState('');
    const [translate, setTranslate] = useState('');
    const [language, setLanguage] = useState('english');

    const languageMap = {
        english: 'en',
        hindi: 'hi',
        kannada: 'kn',
        telugu: 'te'
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/${id}`)
            .then(res => {
                console.log(res.data.transcript);
                setDetails(res.data.transcript);
            });
    }, [id]);

    const handlePrint = () => {
        const printContent = document.getElementById('printable-content').innerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Translation</title>');
        printWindow.document.write('<link rel="stylesheet" type="text/css" href="path_to_your_tailwind_css">'); // Replace with your actual Tailwind CSS path
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <>
            <Nav />
            <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
                <div className='border border-gray-300 shadow-lg rounded-lg p-6 bg-white w-4/5 md:w-3/5 lg:w-2/5 mx-auto mt-10'>
                    <h1 className='text-gray-800 text-4xl font-bold mt-2 mb-6 text-center'>Patient Report</h1>
                    <p className='text-lg mb-6 text-gray-600 text-left whitespace-pre-line'>{details}</p>
                    <div className='flex justify-center items-center mb-6'>
                        <select 
                            className='border border-gray-300 p-3 rounded-md mr-4 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200'
                            value={language} 
                            onChange={(e) => setLanguage(e.target.value)}>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="kannada">Kannada</option>
                            <option value="telugu">Telugu</option>
                        </select>
                        <Button 
                            className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200' 
                            onPress={onOpen} 
                            onClick={async () => {
                                const languageCode = languageMap[language];
                                await axios.post('http://localhost:3000/translate', { text: details, language: languageCode })
                                    .then(res => {
                                        console.log(res.data);
                                        setTranslate(res.data);
                                    });
                            }}
                        >
                            Translate
                        </Button>
                    </div>
                </div>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='animate-fadeIn'>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Translation</ModalHeader>
                                <ModalBody>
                                    <ScrollShadow className="w-[400px] h-[400px] p-4" id="printable-content">
                                        <p className='text-base mb-4 text-left whitespace-pre-line'>{translate}</p>
                                    </ScrollShadow>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button 
                                        color="primary" 
                                        variant="light" 
                                        className='ml-2'
                                        onClick={handlePrint}
                                    >
                                        Print
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}

export default Translate;
