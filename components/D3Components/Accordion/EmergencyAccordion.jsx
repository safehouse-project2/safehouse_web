import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import HelpIcon from '@mui/icons-material/Help';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';


export default function AccordionComp() {

    // const NumberRef = useRef(null);

    // useEffect(() => {
    //     const Number = NumberRef.current;
    //     Number.addEventListener('click', () => {
    //         console.log("clicked");
    //     })
    // }, [])

    const EmergencyData = [
        {
            id: 1,
            title: "Fire Department, RCMP, or Ambulance",
            description: "911",
        },
        {
            id: 2,
            title: "Emergency Operations Centre (EOC)",
            description: "2504904225"
        },
        {
            id: 3,
            title: "Emergency Support Services(ESS) for Evacuees",
            description: "2504861890"
        }
    ]
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <ChakraProvider>
                    <Accordion allowToggle>
                        {
                            EmergencyData.map((EmergencyData) => {
                                return (
                                    <AccordionItem key={EmergencyData.id}>
                                        <h2>
                                            <AccordionButton>
                                                <div className='flex gap-3 items-center text-left'>
                                                    <HelpIcon
                                                        sx={{
                                                            color: '#B38A58',
                                                            fontSize: '30px'
                                                        }}
                                                    />
                                                    <p className='text-[#20514B] font-semibold'>
                                                        {EmergencyData.title}
                                                    </p>
                                                </div>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} key={EmergencyData}>
                                            <a href={`tel:${EmergencyData.description}`} className="text-2xl">
                                                Call {`${""}`}
                                                <span className='text-blue-500'>
                                                    {EmergencyData.description}
                                                </span>
                                            </a>
                                        </AccordionPanel>
                                    </AccordionItem>
                                )
                            }
                            )}
                    </Accordion>
                </ChakraProvider>
            </motion.div>
        </>
    );
}