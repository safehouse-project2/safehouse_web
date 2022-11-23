import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'


export default function Test({
  ques = "default question",
  ans = "default answer"
}) {

  const Questions = [
    "What is SafeHouse ?",
    "What is SafeHouse's mission ?",
    "What problem does SafeHouse solve ?",
    "What do I need to become a Host ?",
    "What are SafeHouse's main features ?"
  ]
  const Answers = [
    {
      ans1: "SafeHouse is an idea that originated from the increase of  Wildfires across interior BC. With this problem causing more damage each year, we wanted to find a digital solution to help those in need.The application will provide a map in which icons will appear in locations where accommodations are available. Those willing to offer a space can register their home as a “Safe House”.  Information such as space, whereabouts, and contact will be provided to create an efficient process to get others to a secure place in disaster situations.",

      ans2: "SafeHouse’s mission is to streamline the evacuation process for evacuees to find safe places to stay during an evacuation order.",

      ans3: "Over the last few years, the heat in Canada has increased to intense temperatures over the summer months. Districts like the Thompson-Nicola Valley have very dry environments which are at the highest risk. In 2018, the worst year for wildfires, more than 1.3 million hectares of BC Forests were lost. Last year the number hit 870,000 go hectares burned. Wildfires not only affect our forestry and environment but have caused disasters across many communities and homes. 21,000 properties were under an evacuation alert last year with 181 evacuation orders implemented.",

      ans4: "Your Full Name, Contact Information, Address, Home Details and Images, and you BC Services Card and ID.",

      ans5: "Interactive map with wildfires and SafeHouse data. Home listings made by host. Help section with resources, info, and FAQs"
    }
  ]
  // const Answers = [
  //   "SafeHouse is an idea that originated from the increase of  Wildfires across interior BC. With this problem causing more damage each year, we wanted to find a digital solution to help those in need.The application will provide a map in which icons will appear in locations where accommodations are available. Those willing to offer a space can register their home as a “Safe House”.  Information such as space, whereabouts, and contact will be provided to create an efficient process to get others to a secure place in disaster situations.",

  //   "SafeHouse’s mission is to streamline the evacuation process for evacuees to find safe places to stay during an evacuation order.",

  //   "Over the last few years, the heat in Canada has increased to intense temperatures over the summer months. Districts like the Thompson-Nicola Valley have very dry environments which are at the highest risk. In 2018, the worst year for wildfires, more than 1.3 million hectares of BC Forests were lost. Last year the number hit 870,000 go hectares burned. Wildfires not only affect our forestry and environment but have caused disasters across many communities and homes. 21,000 properties were under an evacuation alert last year with 181 evacuation orders implemented.",

  //   "Your Full Name, Contact Information, Address, Home Details and Images, and you BC Services Card and ID.",

  //   "Interactive map with wildfires and SafeHouse data. Home listings made by host. Help section with resources, info, and FAQs",

  // ]
  return (
    <>
      <ChakraProvider>
        <Accordion allowToggle>
          {
            Questions.map((question, index) => {
              return (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {
                    Answers.map((ans, i) => {
                      return (
                        <AccordionPanel pb={4} key={i}>
                          {/* show the answers in their respective containers */}
                          <p>{ans.ans1}</p>
                        </AccordionPanel>
                      )
                    })
                  }
                </AccordionItem>
              )
            }
            )}
        </Accordion>
      </ChakraProvider>
    </>
  );
}