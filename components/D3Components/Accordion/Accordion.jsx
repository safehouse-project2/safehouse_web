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
            ans: "SafeHouse is an idea that originated from the increase of  Wildfires across interior BC. With this problem causing more damage each year, we wanted to find a digital solution to help those in need.The application will provide a map in which icons will appear in locations where accommodations are available. Those willing to offer a space can register their home as a “Safe House”.  Information such as space, whereabouts, and contact will be provided to create an efficient process to get others to a secure place in disaster situations."
        },
        {
            id: 2,
            ques: "What is SafeHouse's mission ?",
            ans: "SafeHouse’s mission is to streamline the evacuation process for evacuees to find safe places to stay during an evacuation order."

        },
        {
            id: 3,
            ques: "What problem does SafeHouse solve ?",
            ans: "Over the last few years, the heat in Canada has increased to intense temperatures over the summer months. Districts like the Thompson-Nicola Valley have very dry environments which are at the highest risk. In 2018, the worst year for wildfires, more than 1.3 million hectares of BC Forests were lost. Last year the number hit 870,000 go hectares burned. Wildfires not only affect our forestry and environment but have caused disasters across many communities and homes. 21,000 properties were under an evacuation alert last year with 181 evacuation orders implemented."
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