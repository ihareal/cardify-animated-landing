'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Logo from '@/assets/images/logo.svg';
import ScrewRU from '@/assets/images/screw-ru.png';
import Arrow from '@/assets/images/Arrow.png';
import ShapesEllipses from '@/assets/images/ShapesEllipses.png';
import BaseWheel from '@/assets/images/base-wheel.png';
import Guitaer from '@/assets/images/Guitar.png';

import BTCSvg from '@/assets/images/BTC.svg';
import ETHSvg from '@/assets/images/ETH.svg';
import LTCSvg from '@/assets/images/LTC.svg';
import TONSvg from '@/assets/images/TON.svg';
import TetherSVG from '@/assets/images/Tether.svg';

import LottieElectricity from '@/assets/Electricity.json';
import Spin from '@/assets/animations/lottie/Spin.json';
import FirstDragon from '@/assets/animations/lottie/FirstDragon.json';
import SecondDragon from '@/assets/animations/lottie/SecondDragon.json';
import Professor from '@/assets/animations/lottie/Proffesor.json';
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
    }, 4000);
  };

  return (
    <div className="w-full relative m-auto flex min-h-screen max-h-screen overflow-hidden  flex-col items-center justify-between bg-[url('/images/bg.png')] bg-no-repeat bg-cover">
      {modalOpen && <Modal />}

      <header className='z-10 w-full flex flex-col items-center justify-center'>
        <Image src={Logo} alt='Logo' className='mt-5' />
        <h1 className='flex flex-col items-center justify-start text-center font-extrabold text-[#FAF9E0] text-[33px] leading-[37px] italic w-[50%] mt-5'>
          <span>ПРИВЕТСТВЕННЫЙ БОНУС ДО </span>
          <span>2500$ ВСЕМ НОВЫМ ИГРОКАМ!</span>
        </h1>
      </header>

      <LottiePlayer
        className='absolute left-[20%] bottom-0 w-[1000px] h-[1000px] select-none pointer-events-none'
        src={LottieElectricity}
        loop={true}
        autoplay={true}
      />
      <main className='relative m-auto mt-5 overflow-hidden flex flex-col items-center justify-between'>
        <div className='relative w-full flex flex-col items-center justify-start'>
          <Image
            unoptimized
            width={100}
            height={100}
            src={Arrow}
            alt='Arrow'
            className='z-50 absolute top-[-2.5%] cursor-pointer'
          />
          <Image
            unoptimized
            width={500}
            height={500}
            src={ScrewRU}
            alt='Screw'
            className={clsx(
              'cursor-pointer top-0 z-20',
              spin && 'animate-spin transition-all',
            )}
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
            className='absolute top-0 cursor-pointer'
          />
          <LottiePlayer
            className='z-30 absolute top-0 cursor-pointer'
            src={Spin}
            loop={true}
            autoplay={true}
          />
        </div>
      </main>
      <footer className='w-full flex-row flex items-center justify-center gap-5  pb-5'>
        <Image src={BTCSvg} alt='BTC' />
        <Image src={ETHSvg} alt='ETH' />
        <Image src={LTCSvg} alt='LTCSvg' />
        <Image src={TONSvg} alt='TONSvg' />
        <Image src={TetherSVG} alt='TetherSVG' />
      </footer>
      <Image
        width={400}
        src={Guitaer}
        alt='Guitar'
        className='absolute bottom-[-2%] right-[-2%]'
      />
      {/* {modalOpen && (
        <Image
          src={FireworksGif}
          alt='Fireworks'
          className='z-[101] absolute bottom-0 right-[5%]'
          unoptimized
        />
      )} */}
      <LottiePlayer
        className='z-30 absolute top-0 cursor-pointer'
        src={FirstDragon}
        loop={true}
        autoplay={true}
      />
      <LottiePlayer
        className='z-30 absolute top-0 cursor-pointer'
        src={SecondDragon}
        loop={true}
        autoplay={true}
      />
      <LottiePlayer
        className='w-[650px] absolute bottom-0 left-[-5%]'
        src={Professor}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
