import AppText from "../AppText/AppText";

export default function Description({
  }){

  return ( <div>
    <div className='flex mt-5 flex-col gap-4'>
        <AppText
            txt='Description'
            color='black'
            fontSize='16px'
            fontWeight='500'
        />
        <AppText
            txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla nec hendrerit vehicula in. Turpis nam nisl nunc, accumsan ut sit ac. 
            Pretium, venenatis volutpat, semper quis amet, nibh tincidunt integer.'
            color='#272727'
            fontSize='12px'
            fontWeight='400'
        />
    </div>
        </div>
    )
}