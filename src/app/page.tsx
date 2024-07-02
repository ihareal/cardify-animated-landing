'use client';

import { useState } from 'react';
import Image from 'next/image';

import ScrewRU from '../../public/images/screw-ru.png';
import ScrewEN from '../../public/images/screw-en.png';
import Arrow from '../../public/images/Arrow.png';
import ShapesEllipses from '../../public/images/ShapesEllipses.png';
import Shadow from '../../public/images/shadow.png';
import BaseWheel from '../../public/images/base-wheel.png';
import GuitarImage from '../../public/images/Guitar.png';

import DocGif from '../../public/animations/gifs/doc.gif';
import FireworksGif from '../../public/animations/gifs/fireworks.gif';
import SpinGif from '../../public/animations/gifs/Mid.gif';
import ElectricityGif from '../../public/animations/gifs/Electricity.gif';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [spin, setSpin] = useState<boolean>(false);

  const handleSpin = () => {
    setSpin(true);

    const spinTimeoutID = setTimeout(() => {
      setSpin(false);
    }, 3000);

    clearInterval(spinTimeoutID);
  };

  return (
    <main className="bg-black relative m-auto overflow-hidden flex min-h-screen flex-col items-center justify-between bg-[url('/images/bg.png')] bg-no-repeat bg-cover">
      <div className='relative w-full min-h-screen flex flex-col items-center justify-center'>
        <Image
          width={100}
          height={100}
          src={Arrow}
          alt='Arrow'
          className='z-50 absolute top-[20%] cursor-pointer'
        />
        <Image
          width={500}
          height={500}
          src={ScrewRU}
          alt='Screw'
          className='cursor-pointer z-20'
        />
        <Image
          width={520}
          height={520}
          src={ShapesEllipses}
          alt='Shapes Ellipses'
          className='absolute top-[20.5%] cursor-pointer z-30'
        />
        <Image
          width={520}
          height={520}
          src={BaseWheel}
          alt='Base Wheel'
          className='absolute top-[20.5%] cursor-pointer'
        />
        <Image
          width={550}
          height={550}
          src={SpinGif}
          alt='Spin'
          onClick={() => handleSpin()}
          className='z-50 absolute top-50 cursor-pointer'
        />
        <Image
          width={1200}
          height={1200}
          src={ElectricityGif}
          alt='Electricity'
          className='absolute top-0'
        />
      </div>
      <Image
        width={400}
        src={GuitarImage}
        alt='Guitar'
        className='absolute bottom-[-2%] right-[-2%]'
      />
      <Image
        src={FireworksGif}
        alt='Fireworks'
        className='absolute bottom-0 right-[5%]'
      />
      <Image
        width={1500}
        src={DocGif}
        alt='Doc'
        className='absolute bottom-0 left-[-5%]'
      />
    </main>
  );
}
