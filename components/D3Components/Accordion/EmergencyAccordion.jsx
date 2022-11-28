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


export default function AccordionComp({
    // ques = "default question",
    // ans = "default answer"
}) {

    const EmergencyData = [
        {
            id: 1,
            title: "Fire Department, RCMP, or Ambulance",
            description: "Call 911",
        },
        {
            id: 2,
            title: "Emergency Operations Centre (EOC)",
            description: "Call 250-490-4225"
        },
        {
            id: 3,
            title: "Emergency Support Services(ESS) for Evacuees",
            description: "Call 250-486-1890"
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
                                            <a href="tel:">
                                                {EmergencyData.description}
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