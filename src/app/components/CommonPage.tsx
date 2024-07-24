'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Logo from '@/assets/images/logo.png';
import ScrewEN from '@/assets/images/screw-en.png';
import ScrewRU from '@/assets/images/screw-ru.png';
import Arrow from '@/assets/images/Arrow.png';
import ShapesEllipses from '@/assets/images/ShapesEllipses.png';
import BaseWheel from '@/assets/images/base-wheel.png';
import Doc from '@/assets/images/doc.png';
import Guitar from '@/assets/images/Guitar.png';
import Electricity from '@/assets/images/Electricity.png';

// Tokens if Footer
import BTCSvg from '@/assets/images/BTC.svg';
import LTCSvg from '@/assets/images/LTC.png';
import TONSvg from '@/assets/images/TON.svg';
import TetherSVG from '@/assets/images/Tether.png';
import Visa from '@/assets/images/VISA.svg';
import MasterCard from '@/assets/images/MasterCard.svg';
import Peace from '@/assets/images/Peace.svg';

import Spin from '@/assets/animations/lottie/Spin.json';
import Fireworks from '@/assets/animations/lottie/Fireworks.json';
import FirstDragon from '@/assets/animations/lottie/FirstDragon.json';
import FirstCircle from '@/assets/animations/lottie/FirstCircle.json';
import SecondCircle from '@/assets/animations/lottie/SecondCircle.json';
import FirstCircleEN from '@/assets/animations/lottie/FirstCircleEn.json';
import SecondCircleEN from '@/assets/animations/lottie/SecondCircleEn.json';
import SecondDragon from '@/assets/animations/lottie/SecondDragon.json';

import clsx from 'clsx';
import Modal from '../components/Modal';
import OrientationAlert from './OrrientationAlert';

const LottiePlayer = dynamic(async () => {
  return (await import('@/app/components/LottiePlayer')).LottiePlayer;
});

export default function CommonPage({ lang }: { lang: 'en' | 'ru' }) {
  const [spin, setSpin] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  if (typeof window === 'undefined') {
    return null;
  }

  const handleSpin = () => {
    if (spin === 0) {
      setSpin(1);

      setTimeout(() => {
        setSpin(2);
      }, 4900);

      // setTimeout(() => {
      //   setModalOpen(true);
      // }, 5400);

      return;
    }

    if (spin === 2) {
      setSpin(3);

      setTimeout(() => {
        setSpin(4);
      }, 4900);

      setTimeout(() => {
        setModalOpen(true);
      }, 7000);

      return;
    }
  };

  return (
    <div
      className={clsx(
        "w-full relative m-auto flex h-screen overflow-hidden overscroll-none flex-col items-center justify-between bg-[url('/images/bg.png')] select-none bg-no-repeat bg-cover max-md:bg-center max-md:justify-between max-md:h-dvh",
        window.matchMedia('(orientation: landscape)').matches &&
          'max-md:blur-3xl',
      )}
    >
      <OrientationAlert />

      {modalOpen && (
        <Modal
          lang={lang}
          step={spin}
          handleClose={() => setModalOpen(false)}
        />
      )}

      <header className='z-10 w-full flex flex-col items-center justify-center'>
        <Image
          src={Logo}
          alt='Logo'
          width={118}
          height={69}
          className='mt-5 pointer-events-none'
        />
        <div
          className='flex flex-col items-center justify-start uppercase text-center font-extrabold text-[#FAF9E0] text-[33px] leading-[37px] italic w-[50%] mt-5 max-md:text-[22px] max-md:leading-[25px] max-md:w-[85%] max-md:mb-10'
          style={{
            color: 'linear-gradient(90deg, #FAF9E0 20%, #FEF7A9 80%)',
          }}
        >
          <p>{lang === 'ru' ? 'ПРИВЕТСТВЕННЫЙ БОНУС' : 'Welcome bonus'}</p>
          <p className='max-md:w-70'>
            {lang === 'ru'
              ? 'ДО 2500$ ВСЕМ НОВЫМ ИГРОКАМ!'
              : 'up to $2500 for all new players!'}
          </p>
        </div>
      </header>
      <main className='w-full px-20 relative m-auto mt-16 flex flex-row items-start gap-20 justify-center max-md:gap-0 max-md:items-center max-md:px-0 max-md:flex-col max-md:m-0 max-md:justify-start'>
        <div
          className={clsx(
            'absolute animate-pulse-one delay-1000 left-[50px] z-30 text-white w-[360px] bg-[linear-gradient(180deg,#E50046_0%,#E37A59_100%)] flex flex-col justify-center items-center gap-5 p-5 rounded-xl max-md:mt-10 max-md:order-2 max-md:flex-row max-md:p-0 max-md:bg-none max-md:gap-2 max-md:w-full max-md:left-0 max-md:relative',
            spin < 2 && 'md:hidden max-md:invisible',
          )}
        >
          <h3 className='font-bold text-[20px] leading-[22.6px] text-center max-md:text-[15px] max-md:leading-[17px] max-md:text-wrap'>
            Первый приз:
          </h3>
          <button
            className='rounded-2xl font-bold text-[20px] leading-[22.6px] w-[320px] p-[15px] max-md:text-[15px] max-md:leading-[16.95px] max-md:p-3 max-md:w-[248px]'
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
            }}
          >
            +275% БОНУС К ДЕПОЗИТУ
          </button>
        </div>
        <div
          className='relative flex flex-col items-center justify-start max-md:justify-center max-md:h-full max-md:order-1'
          onClick={handleSpin}
        >
          <Image
            className='absolute max-w-none animate-pulse left-[-200px] top-[-125px] select-none pointer-events-none max-md:left-[-35%] max-md:w-[450px] max-md:h-[450px] max-md:top-[-23%]'
            src={Electricity}
            alt='Electricity'
          />
          <Image
            width={100}
            height={100}
            src={Arrow}
            alt='Arrow'
            className='z-50 absolute top-[-9%] pointer-events-none cursor-pointer max-md:top-[-11.5%]'
          />
          <Image
            width={379.4}
            height={379.4}
            src={lang === 'ru' ? ScrewRU : ScrewEN}
            alt='Screw'
            className={clsx(
              'pointer-events-none z-[20] max-md:w-[272px] max-md:h-[272px]',
              spin === 1 && 'hidden',
              spin === 2 && '-rotate-90',
              spin === 3 && 'hidden',
              spin === 4 && 'rotate-[-270deg]',
            )}
          />
          {spin === 1 && (
            <LottiePlayer
              className={clsx(
                'z-20 relative w-[380px] h-[380px] max-md:w-[272px] max-md:h-[272px]',
              )}
              src={lang === 'ru' ? FirstCircle : FirstCircleEN}
              loop={false}
            />
          )}
          {spin === 3 && (
            <LottiePlayer
              className={clsx(
                'z-20 relative w-[380px] h-[380px] max-md:w-[272px] max-md:h-[272px]',
              )}
              src={lang === 'ru' ? SecondCircle : SecondCircleEN}
              loop={false}
            />
          )}
          <LottiePlayer
            className='z-50 w-[150px] h-[150px] active:scale-90 active:ease-in-out active:duration-500 absolute top-[115px] left-[115px] cursor-pointer max-md:w-[120px] max-md:top-[60px] max-md:left-[77.5px]'
            src={Spin}
            loop={true}
            autoplay={true}
          />
          <Image
            width={200}
            height={200}
            src={ShapesEllipses}
            alt='Shapes Ellipses'
            className='absolute top-[91px] left-[91px] pointer-events-none z-30 max-md:w-[150px] max-md:h-[150px] max-md:top-[60px] max-md:left-[62px]'
          />
          <Image
            src={BaseWheel}
            alt='Base Wheel'
            className='absolute z-[11] min-w-[475px] min-h-[475px] top-[-47px] pointer-events-none max-md:top-[-35px] max-md:min-w-[342px] max-md:min-h-[342px]'
          />
        </div>

        <div
          className={clsx(
            'absolute animate-pulse-one delay-1000 right-[50px] z-30 text-white w-[360px] bg-[linear-gradient(180deg,#E50046_0%,#E37A59_100%)] flex flex-col justify-center items-center gap-5 p-5 rounded-xl max-md:mt-5 max-md:order-2 max-md:flex-row max-md:p-0 max-md:bg-none max-md:gap-2 max-md:w-full max-md:right-0 max-md:relative max-md:mb-2',
            spin < 4 && 'md:hidden max-md:invisible',
          )}
        >
          <h3 className='font-bold text-[20px] leading-[22.6px] text-center max-md:text-[15px] max-md:leading-[17px] max-md:text-wrap'>
            Второй приз:
          </h3>
          <button
            className='rounded-2xl font-bold text-[20px] leading-[22.6px] w-[320px] p-[15px] max-md:text-[15px] max-md:leading-[16.95px] max-md:p-3 max-md:w-[248px]'
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
            }}
          >
            300 ФРИСПИНОВ
          </button>
        </div>
      </main>
      <footer className='w-full flex-col gap-2 pointer-events-none flex items-center justify-center pb-5 max-md:flex-wrap max-md:px-10 max-md:gap-2 max-md:absolute max-md:bottom-0'>
        <div className='w-full flex-row pointer-events-none flex items-center justify-center gap-[11.72px] '>
          <Image
            src={LTCSvg}
            width={77.1}
            height={23.05}
            className='pointer-events-none'
            alt='LTCSvg'
          />
          <Image src={BTCSvg} className='pointer-events-none' alt='BTC' />
          <Image
            src={TetherSVG}
            className='pointer-events-none'
            alt='TetherSVG'
            width={79.49}
            height={25.44}
          />
          <Image src={TONSvg} className='pointer-events-none' alt='TONSvg' />
        </div>
        <div className='w-full flex-row pointer-events-none flex items-center justify-center gap-[11.72px]'>
          <Image src={Visa} className='pointer-events-none' alt='Visa' />
          <Image
            src={MasterCard}
            className='pointer-events-none'
            alt='MasterCard'
          />
          <Image src={Peace} className='pointer-events-none' alt='Peace' />
        </div>
      </footer>
      <Image
        width={540}
        src={Guitar}
        alt='Guitar'
        className='absolute bottom-[-18%] right-[-6%] pointer-events-none max-xl:hidden'
      />
      <LottiePlayer
        className='z-10 w-[193px] h-[193px] absolute top-[207px] left-[91px] max-md:w-[132px] max-md:h-[132px] max-md:left-[-11%] max-md:top-[25%]'
        src={FirstDragon}
        loop={true}
        autoplay={true}
      />
      <LottiePlayer
        className='z-10 w-[206.19px] h-[206.19px] absolute top-[80px] right-[130px] max-md:w-[105.69px] max-md:h-[105.69px] max-md:right-[-7%] max-md:top-[26%]'
        src={SecondDragon}
        loop={true}
        autoplay={true}
      />
      <Image
        className='w-[620px] absolute bottom-0 left-[-5%] pointer-events-none max-xl:hidden'
        src={Doc}
        alt='Doc'
      />
    </div>
  );
}
