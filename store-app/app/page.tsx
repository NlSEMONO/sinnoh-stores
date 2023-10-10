import Image from 'next/image';
import Map from './components/maps';
import Navbar from './components/Navbar';
import Label from './components/Label';

export default function Home() {
  return (
    <>
      <title>Sinnoh Souvenirs</title>
      <Navbar/>
      <Label label={'Sinnoh Souvenirs'} type={1}/>
      <div className='bg-main3'> 
        <Label label={"New Products"} type={2}></Label>
      </div>
      <div className='bg-main1 my-8'>
        <Label label={'Our Locations'} type={2}/>
        <Map/>
      </div>
    </>
  )
}
