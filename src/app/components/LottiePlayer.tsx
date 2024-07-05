'use client';
import React, { useRef } from 'react';
import { Player, type PlayerEvent } from '@lottiefiles/react-lottie-player';

export interface PlayerProps {
  src: string | object;
  playerRef?: React.RefObject<Player> | undefined;
  onEvent?: ((event: PlayerEvent) => any) | undefined;
  loop?: number | boolean | undefined;
  autoplay?: boolean | undefined;
  direction?: -1 | 1 | undefined;
  keepLastFrame?: boolean | undefined;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
}

const LottiePlayer: React.FC<PlayerProps> = ({
  src,
  playerRef,
  onEvent,
  loop = true,
  autoplay = true,
  direction = 1,
  keepLastFrame = false,
  className,
  style,
}) => {
  const localRef = useRef<Player>(null);
  const player = playerRef !== undefined ? playerRef : localRef;

  return (
    <Player
      ref={player}
      autoplay={autoplay}
      loop={loop}
      src={src}
      onEvent={e => {
        onEvent && onEvent(e);
      }}
      keepLastFrame={keepLastFrame}
      className={className}
      rendererSettings={{ direction }}
      style={style}
    />
  );
};

export { LottiePlayer };
