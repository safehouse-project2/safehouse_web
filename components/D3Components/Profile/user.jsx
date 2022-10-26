import AppText from "../AppText/AppText";
import Image from '../Image/ImageComp.jsx'


export default function User({
}) {

  return (
    <div className="flex flex-col items-center gap-4 pt-7 pb-7">
      <Image
        src="/person.jpg"
        width="150"
        height="150"
        borderRadius="50%"
      />
      <AppText
        txt='John Doe'
        color='#F5F5F5'
        fontSize='30px'
        fontWeight='500' />
    </div>
  )
}