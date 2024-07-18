'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Logo from '@/assets/images/logo.svg';
import ScrewRU from '@/assets/images/screw-ru.png';
import Arrow from '@/assets/images/Arrow.png';
import ShapesEllipses from '@/assets/images/ShapesEllipses.png';
import BaseWheel from '@/assets/images/base-wheel.png';
import Doc from '@/assets/images/doc.png';
import Guitaer from '@/assets/images/Guitar.png';
import Electricity from '@/assets/images/Electricity.png';

// Tokens if Footer
import BTCSvg from '@/assets/images/BTC.svg';
import ETHSvg from '@/assets/images/ETH.svg';
import LTCSvg from '@/assets/images/LTC.svg';
import TONSvg from '@/assets/images/TON.svg';
import TetherSVG from '@/assets/images/Tether.svg';

import Spin from '@/assets/animations/lottie/Spin.json';
import Fireworks from '@/assets/animations/lottie/Fireworks.json';
import FirstDragon from '@/assets/animations/lottie/FirstDragon.json';
import SecondDragon from '@/assets/animations/lottie/SecondDragon.json';

import clsx from 'clsx';
import Modal from './components/Modal';

const LottiePlayer = dynamic(async () => {
  return (await import('@/app/components/LottiePlayer')).LottiePlayer;
});

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [spin, setSpin] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const detectLang = () => {
    setLang('en');

    console.log(lang);
  };

  const handleSpin = () => {
    setSpin(true);

    setTimeout(() => {
      setSpin(false);
    }, 3000);

    setTimeout(() => {
      setModalOpen(true);
    }, 3500);
  };

  return (
    <div className="w-full relative m-auto flex min-h-screen max-h-screen overflow-hidden  flex-col items-center justify-between bg-[url('/images/bg.png')] bg-no-repeat bg-cover max-md:bg-center max-md:justify-between">
      {modalOpen && <Modal />}

      <header className='z-10 w-full flex flex-col items-center justify-center'>
        <Image src={Logo} alt='Logo' className='mt-5' />
        <div className='flex flex-col items-center justify-start text-center font-extrabold text-[#FAF9E0] text-[33px] leading-[37px] italic w-[40%] mt-5 max-md:text-[22px] max-md:leading-[25px] max-md:w-[85%]'>
          <p>ПРИВЕТСТВЕННЫЙ БОНУС</p>
          <p className='max-md:w-70'>ДО 2500$ ВСЕМ НОВЫМ ИГРОКАМ!</p>
        </div>
      </header>
      <main className='relative m-auto mt-5 flex flex-col items-center justify-between max-md:justify-center max-md:m-0'>
        <Image
          className='absolute max-w-none left-[-150px] top-[-100px] select-none pointer-events-none max-md:left-[-25%] max-md:w-[400px] max-md:h-[400px] max-md:top-[-15%] animate-spin-slow duration-[90000ms]'
          src={Electricity}
          alt='Electricity'
        />
        <div
          className='relative w-full flex flex-col items-center justify-start max-md:justify-center max-md:h-full'
          onClick={handleSpin}
        >
          <Image
            unoptimized
            width={100}
            height={100}
            src={Arrow}
            alt='Arrow'
            className='z-50 absolute top-[-2.5%] cursor-pointer max-md:top-[-5%]'
          />
          <Image
            unoptimized
            width={500}
            height={500}
            src={ScrewRU}
            alt='Screw'
            className={clsx(
              'cursor-pointer top-0 z-20 max-md:w-[272px] max-md:h-[272px]',
              spin && 'animate-spin transition-all',
            )}
          />
          <LottiePlayer
            className='z-30 absolute top-[125px] left-[125px] cursor-pointer max-md:w-[120px] max-md:top-[77.5px] max-md:left-[77.5px]'
            src={Spin}
            loop={true}
            autoplay={true}
          />
          <Image
            unoptimized
            width={520}
            height={520}
            src={ShapesEllipses}
            alt='Shapes Ellipses'
            className='absolute top-0 cursor-pointer z-30'
          />
          <Image
            unoptimized
            width={520}
            height={520}
            src={BaseWheel}
            alt='Base Wheel'
            className='absolute top-0 cursor-pointer max-md:w-[272px] max-md:h-[272px]'
          />
        </div>
      </main>
      <footer className='w-full flex-row flex items-center justify-center gap-5 pb-5 max-md:flex-wrap max-md:px-10 max-md:gap-2 max-md:fixed max-md:bottom-0'>
        <Image src={ETHSvg} alt='ETH' />
        <Image src={LTCSvg} alt='LTCSvg' />
        <Image src={BTCSvg} alt='BTC' />
        <Image src={TetherSVG} alt='TetherSVG' />
        <Image src={TONSvg} alt='TONSvg' />
      </footer>
      <Image
        width={400}
        src={Guitaer}
        alt='Guitar'
        className='absolute bottom-[-2%] right-[-2%] max-md:hidden'
      />
      {modalOpen && (
        <LottiePlayer
          className='z-[101] absolute bottom-[30%] right-[35%] max-md:right-[-40%]'
          src={Fireworks}
          loop={true}
          autoplay={true}
        />
      )}
      <LottiePlayer
        className='z-30 absolute top-0 left-0 cursor-pointer max-md:left-[0%] max-md:top-[20%]'
        src={FirstDragon}
        loop={true}
        autoplay={true}
      />
      <LottiePlayer
        className='z-30 absolute top-0 right-0 cursor-pointer max-md:right-[0%] max-md:top-[17%]'
        src={SecondDragon}
        loop={true}
        autoplay={true}
      />
      <Image
        className='w-[650px] absolute bottom-0 left-[-5%] max-md:hidden'
        src={Doc}
        alt='Doc'
      />
    </div>
  );
}
