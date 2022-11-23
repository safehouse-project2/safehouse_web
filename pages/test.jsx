import FAQ from '../components/D3Components/Resources/FAQ/FAQ';
import Card from '../components/D3Components/Cards/Card';
import Button from '../components/D3Components/Button/Button';


export default function Test() {
  return (
    <>
      {/* <FAQ /> */}
      <Card
      src="backpack.jpg"
      title='Wildfire Preparedness'
      description='Here are a few additonal resources to help prepare yourself in an event of an evacuation'
      btnText1='FireSmartBC.ca'
      btnText2='PreparedBC'
      btnText3='Wildfire Preparedness Guide'
      //btnText4='Provinical Health Services Authority'
      />   

<Card
      src="assistance.jpg"
      title='Wildfire Assistance'
      description='Resources for more information to help keep yourself safe'
      btnText1='BC Wildfire Service'
      btnText2='Emergency Management BC'
      />   
    </>
  );
}