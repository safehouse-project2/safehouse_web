import FAQCard from "./FAQCard.jsx";
import AppText from "../AppText/AppText";
import Image from "../Image/ImageComp.jsx";

export default function FAQS() {
  return (
    <div className="flex flex-col">
        <div className="pb-9">
            <AppText
                txt = "FAQs"
                fontWeight = "600"
                fontSize = "28px"
            />
        </div>
        <div className="flex justify-center pb-9">
            <Image src="/faq.png" width="417" height="303" altText="No Images uploaded by the host" />
        </div>
        <div className="flex flex-col pb-20 px-4 gap-3">
            <FAQCard
                txt1="What is SafeHouse?"
                txt2="SafeHouse is an idea that originated from the increase of  Wildfires across interior BC. With this problem causing more damage each year, 
                we wanted to find a digital solution to help those in need.The application will provide a map in which icons will appear in locations where 
                accommodations are available. Those willing to offer a space can register their home as a “Safe House”.  Information such as space, whereabouts, 
                and contact will be provided to create an efficient process to get others to a secure place in disaster situations."
            />
            <FAQCard 
                txt1="What is SafeHouse's Mission?"
                txt2="SafeHouse’s mission is to streamline the evacuation process for evacuees to find safe places to stay during an evacuation order."
            />
            <FAQCard 
                txt1="The Problem"
                txt2="Over the last few years, the heat in Canada has increased to intense temperatures over the summer months. Districts like the Thompson-Nicola 
                Valley have very dry environments which are at the highest risk. In 2018, the worst year for wildfires, more than 1.3 million hectares of BC Forests 
                were lost. Last year the number hit 870,000 go hectares burned. Wildfires not only affect our forestry and environment but have caused disasters across 
                many communities and homes. 21,000 properties were under an evacuation alert last year with 181 evacuation orders implemented."
            />
            <FAQCard
                txt1="What do I Need to Become a Host?"
                txt2="Your Full Name, Contact Information, Address, Home Details and Images, and you BC Services Card and ID."
            />
            <FAQCard
                txt1="What are SafeHouse's Main Features"
                txt2="Interactive map with wildfires and SafeHouse data. Home listings made by host. Help section with resources, info, and FAQs"
            />
          </div>
    </div>
    
  );
}
