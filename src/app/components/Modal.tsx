import Link from 'next/link';
import React from 'react';

export default function Modal({
  spin,
}: // closeModal,
{
  spin: number;
  closeModal: () => void;
}) {
  const href = 'https://cardify.cloud/auth';
  return (
    <div
      className='absolute z-[100] flex flex-col h-full min-h-screen max-h-screen w-full justify-center items-center'
      style={{
        background: 'rgba(0, 0,0, .4)',
      }}
    >
      <div
        className='w-[360px] p-5 text-center text-white flex flex-col items-center justify-start rounded-2xl'
        style={{
          background: 'linear-gradient(180deg, #E50046 0%, #E37A59 100%)',
        }}
      >
        <h2 className='font-semibold text-[33px] leading-[37.29px]'>
          ПОЗДРАВЛЯЕМ!
        </h2>

        <h3 className='mt-10 font-bold text-[20px] leading-[22.6px] text-center'>
          ВАШ ВЫИГРЫШ:
        </h3>

        <button
          className='mt-5 rounded-2xl border font-bold text-[20px] leading-[22.6px] border-white w-[320px] p-[15px]'
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          +275% БОНУС К ДЕПОЗИТУ
        </button>
        {spin === 4 && (
          <button
            className='mt-5 rounded-2xl border font-bold text-[20px] leading-[22.6px] border-white w-[320px] p-[15px]'
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            300 ФРИСПИНОВ
          </button>
        )}

        <Link href={href}>
          <button
            className='w-[320px] mt-5 font-bold text-xl leading-[22.6px] text-center py-4 rounded-lg'
            disabled={spin !== 4}
            style={{
              border: '1px solid rgba(229, 0, 70, 1)',
              background:
                'linear-gradient(180deg, #E50046 50.94%, #7D0F2F 100%)',
            }}
          >
            ПОЛУЧИТЬ БОНУС
          </button>
        </Link>
      </div>
    </div>
  );
}
