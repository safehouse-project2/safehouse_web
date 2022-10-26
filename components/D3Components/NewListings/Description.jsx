import AppText from "../AppText/AppText";

export default function Description() {
    return (
        <div className='flex flex-col gap-2 pt-4'>
            <AppText
                txt='Description'
                fontSize='18px'
                fontWeight='500'
            />
            <AppText
                txt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec hendrerit vehicula in. Turpis nam nisl nunc, accumsan ut sit ac. Pretium, venenatis volutpat, semper quis amet, nibh tincidunt integer.'
                fontSize='14px'
            />
        </div>
    );
}

