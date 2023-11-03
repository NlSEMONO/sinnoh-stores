import Image from 'next/image';
import Map from './components/maps';
import Navbar from './components/Navbar';
import Label from './components/Label';
import Billboard from './components/Billboard';
import HOST from './components/HOST';

export default async function Home() {
  const host = HOST;
  const locations = await fetch(`${host}/sinnoh-stores/get-locations`).then(
      res => res.json()
  )

  return (
    <>
      <title>Sinnoh Souvenirs</title>
      <Navbar/>
      <Label label={'Sinnoh Souvenirs'} type={1}/>
      <div className='bg-pop1 max-w-[90%] mx-auto'> 
        <Label label={"New Products"} color={'main3'} type={2}></Label>
        <Billboard/>
      </div>
      <div className='bg-main1 my-8'>
        <Label label={'Our Locations'} type={2}/>
        <Map locations={locations}/>
      </div>
    </>
  )
}
