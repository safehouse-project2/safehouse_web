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
                txt2="SafeHouse is a solution to help evacuees connect with hosts who provide accommodations during an evacuation order. 
                Those willing to offer a space can register their space as a “Safe House”. Listings appear on a map with information 
                such as amount of space, whereabouts, and contact to create an efficient process to get others to a secure place in disaster situations"
            />
            <FAQCard 
                txt1="What is SafeHouse's Mission?"
                txt2="SafeHouse's mission is to streamline the evacuation process for evacuees to find safe places to stay during an evacuation order."
            />
            <FAQCard 
                txt1="What problem does SafeHouse help solve?"
                txt2="Last year 21,000 properties were under an evacuation alert last year with 181 evacuation orders implemented. 
                When evacuation orders are in place, many need to find a place to stay and others in surrounding communities want 
                to reach out and help. Currently there is no process to connect evacuees to those who can offer help.
                SafeHouse bridges this gap between host and evacuee."
            />
            <FAQCard
                txt1="How can I help evacuees?"
                txt2="Offering space to evacuees doesn't have to be much. This can range from anyting to a couch or even backyard space."
            />
            <FAQCard
                txt1="What are the safty measures for SafeHouse?"
                txt2="Hosts must verify their identity using a driver's license or equivalent ID and be a British Columbia citizen. 
                Evacuees must be registered as an evacuee using their BC services card before accessing SafeHouse."
            />
            <FAQCard
                txt1="What do I Need to Become a Host?"
                txt2="Your Full Name, Contact Information, Address, Home Details and Images, and you BC Services Card and ID."
            />
          </div>
    </div>
    
  );
}
