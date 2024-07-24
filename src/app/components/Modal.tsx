import dynamic from 'next/dynamic';
import Link from 'next/link';
import Fireworks from '@/assets/animations/lottie/Fireworks.json';

const LottiePlayer = dynamic(async () => {
  return (await import('@/app/components/LottiePlayer')).LottiePlayer;
});
import React from 'react';

export default function Modal({
  lang,
  step,
  handleClose,
}: {
  lang: 'en' | 'ru';
  handleClose: () => void;
  step: number;
}) {
  const href = 'https://cardify.cloud/auth';
  return (
    <div
      className='overflow-hidden absolute z-[119] flex flex-col h-dvh w-full justify-center items-center'
      style={{
        background: 'rgba(0, 0,0, .4)',
      }}
    >
      <LottiePlayer
        className='z-50 fixed bottom-[25%] left-[5%] max-md:right-[-5%] max-md:top-[-30%]'
        src={Fireworks}
        loop={true}
        autoplay={true}
      />
      <LottiePlayer
        className='z-50 fixed bottom-[25%] right-[5%] max-md:left-[-5%] max-md:bottom-[5%]'
        src={Fireworks}
        loop={true}
        autoplay={true}
      />
      <div
        className='z-[60] relative w-[360px] p-5 text-center text-white flex flex-col items-center justify-start rounded-2xl'
        style={{
          background: 'linear-gradient(180deg, #E50046 0%, #E37A59 100%)',
        }}
      >
        <h2 className='font-semibold text-[33px] leading-[37.29px]'>
          ПОЗДРАВЛЯЕМ!
        </h2>

        <h3 className='mt-10 font-bold text-[20px] leading-[22.6px] text-center'>
          Ваш выигрыш:
        </h3>

        <button
          className='mt-3 rounded-2xl font-bold text-[20px] leading-[22.6px] w-[320px] p-[15px]'
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
          }}
        >
          +275% БОНУС К ДЕПОЗИТУ
        </button>
        {step !== 2 && (
          <button
            className='mt-3 rounded-2xl font-bold text-[20px] leading-[22.6px] w-[320px] p-[15px]'
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
            }}
          >
            300 ФРИСПИНОВ
          </button>
        )}
        {step === 2 ? (
          <button
            onClick={handleClose}
            className='z-[130] w-[320px] mt-5 font-bold text-xl leading-[22.6px] cursor-pointer text-center py-4 rounded-lg hover:opacity-90'
            style={{
              border: '1px solid rgba(229, 0, 70, 1)',
              background:
                'linear-gradient(180deg, #E50046 50.94%, #7D0F2F 100%)',
            }}
          >
            КРУТИТЬ ЕЩЕ
          </button>
        ) : (
          <Link href={href}>
            <button
              className='z-[130] bg-white w-[320px] text-[#E50046] mt-8 font-bold text-xl leading-[22.6px] cursor-pointer text-center py-4 rounded-lg hover:opacity-90'
              style={{
                border: '1px solid rgba(229, 0, 70, 1)',
              }}
            >
              ЗАБРАТЬ БОНУС
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
