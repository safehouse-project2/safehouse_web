import Card from '../../Cards/Card';

const Data = [
    {
        id: 1,
        src: './backpack.jpg',
        title: 'Wildfire Preparedness',
        description: 'Here are a few additonal resources to help prepare yourself in an event of an evacuation.',
        btnText1: 'FireSmartBC.ca',
        btnText2: 'Prepared BC',
        btnText3: 'Evacuation Registration and Assistance',
        url1: "https://firesmartbc.ca/",
        url2: "https://www2.gov.bc.ca/gov/content/safety/emergency-management/preparedbc",
        url3: "https://ess.gov.bc.ca/",
    },
    {
        id: 2,
        src: './assistance.jpg',
        title: 'Wildfire Assistance',
        description: 'Resources for more information to help keep yourself safe.',
        btnText1: 'BC Wildfire Service',
        btnText2: 'Emergency Management BC',
        btnText3: 'Wildfire Preparedness Guide',
        url1: "https://www2.gov.bc.ca/gov/content/safety/wildfire-status",
        url2: "https://www2.gov.bc.ca/gov/content/safety/emergency-management",
        url3: "https://www2.gov.bc.ca/assets/gov/public-safety-and-emergency-services/emergency-preparedness-response-recovery/embc/preparedbc/preparedbc-guides/wildfire_preparedness_guide.pdf",
    },
]


export default function ResourceCards() {

    return (
        <>
            <div className='flex items-center justify-center gap-7 CardCont'>
                {
                    Data.map((o) => (
                        <Card
                            key={o.id}
                            src={o.src}
                            title={o.title}
                            description={o.description}
                            btnText1={o.btnText1}
                            btnText2={o.btnText2}
                            btnText3={o.btnText3}
                            btn1Click={() => window.open(o.url1, "_blank")}
                            btn2Click={() => window.open(o.url2, "_blank")}
                            btn3Click={() => window.open(o.url3, "_blank")}
                        />
                    ))
                }
            </div>
        </>
    );
}