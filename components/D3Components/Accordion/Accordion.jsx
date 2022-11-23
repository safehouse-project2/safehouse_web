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
    ques = "default question",
    ans = "default answer"
}) {

    const Questions = [
        {
            id: 1,
            ques: "What is SafeHouse ?",
            ans: "SafeHouse is a solution to help evacuees connect with hosts who provide accommodations during an evacuation order. Those willing to offer a space can register their space as a “Safe House”. Listings appear on a map with information such as amount of space, whereabouts, and contact to create an efficient process to get others to a secure place in disaster situations."
        },
        {
            id: 2,
            ques: "What is SafeHouse's mission ?",
            ans: "SafeHouse's mission is to streamline the evacuation process for evacuees to find safe places to stay during an evacuation order."

        },
        {
            id: 3,
            ques: "What problem does SafeHouse solve ?",
            ans: "Last year 21,000 properties were under an evacuation alert last year with 181 evacuation orders implemented. When evacuation orders are in place, many need to find a place to stay and others in surrounding communities want to reach out and help. Currently there is no process to connect evacuees to those who can offer help. SafeHouse bridges this gap between host and evacuee"
        },
        {
            id: 4,
            ques: "What do I need to become a Host ?",
            ans: "Your Full Name, Contact Information, Address, Home Details and Images, and you BC Services Card and ID."
        },
        {
            id: 5,
            ques: "What are SafeHouse's main features ?",
            ans: "Interactive map with wildfires and SafeHouse data. Home listings made by host. Help section with resources, info, and FAQs"
        },
        {
            id: 6,
            ques: "What kind of space should I offer?",
            ans: "Offering space to evacuees doesn't have to be much. This can range from anyting to a couch or even backyard space."
        },
        {
            id: 7,
            ques: "What are the safty measures for SafeHouse?",
            ans: "Hosts must verify their identity using a driver's license or equivalent ID and be a British Columbia citizen. Evacuees must be registered as an evacuee using their BC services card before accessing SafeHouse.",
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
                            Questions.map((question, index) => {
                                return (
                                    <AccordionItem key={question.id}>
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
                                                        {question.ques}
                                                    </p>
                                                </div>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} key={ans}>
                                            {question.ans}
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