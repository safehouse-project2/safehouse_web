import AppText from "../AppText/AppText";

export default function Rules({
  }){

  return ( <div>
    <div className='flex mt-5 flex-col gap-4'>
        <AppText
            txt='House Rules'
            color='black'
            fontSize='16px'
            fontWeight='500'
        />
    </div>
    <div className='flex mt-5 flex-col gap-3'>
        <AppText
            txt='- Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            color='#272727'
            fontSize='12px'
            fontWeight='400'
        />
        <AppText
            txt='- Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            fontSize='12px'
            fontWeight='400'
        />
        <AppText
            txt='- Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            color='#272727'
            fontSize='12px'
            fontWeight='400'
        />
        </div>
    
        </div>
    )
}
