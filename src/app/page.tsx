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
import Guitar from '@/assets/images/Guitar.png';
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
import FirstCircle from '@/assets/animations/lottie/FirstCircle.json';
import SecondCircle from '@/assets/animations/lottie/SecondCircle.json';
import SecondDragon from '@/assets/animations/lottie/SecondDragon.json';

import clsx from 'clsx';
import Modal from './components/Modal';

const LottiePlayer = dynamic(async () => {
  return (await import('@/app/components/LottiePlayer')).LottiePlayer;
});

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [spin, setSpin] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const detectLang = () => {
    setLang('en');

    console.log(lang);
  };

  const handleSpin = () => {
    if (spin === 0) {
      setSpin(1);

      setTimeout(() => {
        setSpin(2);
      }, 4900);
      return;
    }

    if (spin === 2) {
      setSpin(3);

      setTimeout(() => {
        setSpin(4);
      }, 4900);

      setTimeout(() => {
        setModalOpen(true);
      }, 5400);

      return;
    }
  };

  return (
    <div className="w-full relative m-auto flex min-h-screen max-h-screen overflow-hidden  flex-col items-center justify-between bg-[url('/images/bg.png')] select-none bg-no-repeat bg-cover max-md:bg-center max-md:justify-between">
      {modalOpen && (
        <Modal spin={spin} closeModal={() => setModalOpen(false)} />
      )}

      <header className='z-10 w-full flex flex-col items-center justify-center'>
        <Image src={Logo} alt='Logo' className='mt-5 pointer-events-none' />
        <div className='flex flex-col items-center justify-start text-center font-extrabold text-[#FAF9E0] text-[33px] leading-[37px] italic w-[50%] mt-5 max-md:text-[22px] max-md:leading-[25px] max-md:w-[85%]'>
          <p>ПРИВЕТСТВЕННЫЙ БОНУС</p>
          <p className='max-md:w-70'>ДО 2500$ ВСЕМ НОВЫМ ИГРОКАМ!</p>
        </div>
      </header>
      <main className='relative m-auto mt-16 flex flex-col items-center justify-between max-md:justify-center max-md:m-0'>
        <Image
          className='absolute max-w-none animate-pulse left-[-200px] top-[-125px] select-none pointer-events-none max-md:left-[-35%] max-md:w-[450px] max-md:h-[450px] max-md:top-[-23%]'
          src={Electricity}
          alt='Electricity'
        />
        <div
          className='relative w-full flex flex-col items-center justify-start max-md:justify-center max-md:h-full'
          onClick={handleSpin}
        >
          <Image
            width={100}
            height={100}
            src={Arrow}
            alt='Arrow'
            className='z-50 absolute top-[-8%] pointer-events-none cursor-pointer max-md:top-[-5%]'
          />
          {/* {(spin === 0 || spin === 4 || spin === 2) && ( */}
          <Image
            width={390}
            height={390}
            src={ScrewRU}
            alt='Screw'
            className={clsx(
              'pointer-events-none z-[20] max-md:w-[272px] max-md:h-[272px]',
              spin === 1 && 'hidden',
              spin === 2 && '-rotate-90',
              spin === 3 && 'hidden',
              spin === 4 && 'rotate-[-270deg]',
            )}
          />
          {/* )} */}
          {spin === 1 && (
            <LottiePlayer
              className={clsx(
                'z-20 relative w-[390px] h-[390px] max-md:w-[272px] max-md:h-[272px]',
              )}
              src={FirstCircle}
              loop={false}
              onEvent={e => {
                if (e === 'complete') {
                  // setSpin(2);
                }
              }}
            />
          )}
          {spin === 3 && (
            <LottiePlayer
              className={clsx(
                'z-20 relative w-[390px] h-[390px] max-md:w-[272px] max-md:h-[272px]',
              )}
              src={SecondCircle}
              loop={false}
              onEvent={e => {
                if (e === 'complete') {
                  // setSpin(4);
                }
              }}
            />
          )}
          <LottiePlayer
            className='z-50 w-[150px] h-[150px] absolute top-[120px] left-[120px] cursor-pointer max-md:w-[120px] max-md:top-[60px] max-md:left-[77.5px]'
            src={Spin}
            loop={true}
            autoplay={true}
          />
          <Image
            width={200}
            height={200}
            src={ShapesEllipses}
            alt='Shapes Ellipses'
            className='absolute top-[100px] pointer-events-none z-30 max-md:w-[150px] max-md:h-[150px] max-md:top-[60px]'
          />
          <Image
            src={BaseWheel}
            alt='Base Wheel'
            className='absolute min-w-[475px] min-h-[475px] top-[-43px] pointer-events-none max-md:top-[-35px] max-md:min-w-[342px] max-md:min-h-[342px]'
          />
        </div>
      </main>
      <footer className='w-full flex-row pointer-events-none flex items-center justify-center gap-[11.72px] pb-5 max-md:flex-wrap max-md:px-10 max-md:gap-2 max-md:fixed max-md:bottom-0'>
        <Image src={ETHSvg} className='pointer-events-none' alt='ETH' />
        <Image src={LTCSvg} className='pointer-events-none' alt='LTCSvg' />
        <Image src={BTCSvg} className='pointer-events-none' alt='BTC' />
        <Image
          src={TetherSVG}
          className='pointer-events-none'
          alt='TetherSVG'
        />
        <Image src={TONSvg} className='pointer-events-none' alt='TONSvg' />
      </footer>
      <Image
        width={478}
        height={597}
        src={Guitar}
        alt='Guitar'
        className='absolute bottom-[-18%] right-[-6%] pointer-events-none max-md:hidden'
      />
      {modalOpen && (
        <LottiePlayer
          className='z-[101] absolute bottom-[25%] right-[32%] max-md:right-[-40%]'
          src={Fireworks}
          loop={true}
          autoplay={true}
        />
      )}
      <LottiePlayer
        className='z-30 w-[193px] h-[193px] absolute top-[207px] left-[91px] max-md:w-[120px] max-md:h-[120px] max-md:left-[0%] max-md:top-[25%]'
        src={FirstDragon}
        loop={true}
        autoplay={true}
      />
      <LottiePlayer
        className='z-30 w-[206.19px] h-[206.19px] absolute top-[80px] right-[130px] max-md:w-[106px] max-md:h-[106px] max-md:right-[0%] max-md:top-[26%]'
        src={SecondDragon}
        loop={true}
        autoplay={true}
      />
      <Image
        className='w-[510px] absolute bottom-0 left-[-5%] pointer-events-none max-md:hidden'
        src={Doc}
        alt='Doc'
      />
    </div>
  );
}
