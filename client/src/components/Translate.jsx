import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter,Button, ScrollShadow} from "@nextui-org/react";
import { useParams } from 'react-router-dom'
import { useDisclosure } from '@nextui-org/react';
const Translate = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {id} = useParams();
    const[details,setdetails] = useState('')
    const[translate, setTranslate] = useState('')
    useEffect(()=>{
        axios.get(`http://localhost:3000/${id}`)
        .then(res => {
            console.log(res.data.transcript)
            setdetails(res.data.transcript)
        },[id])
    })
  return (
    <div className=' max-w-sm ml-10 mt-10'>
        <p>{details}</p>
        <Button color="primary" onPress={onOpen} onClick={async()=>{
            await axios.post('http://localhost:3000/translate',{text : details})
            .then(res => {
                console.log(res.data)
                setTranslate(res.data)
            })
        }}>Translate</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <ScrollShadow className="w-[400px] h-[400px]">
              <p>{translate}</p>
              </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Translate
                </Button> */}
              </ModalFooter>
            </>
          )}
            </ModalContent>
        </Modal>
    
    </div>
  )
}

export default Translate