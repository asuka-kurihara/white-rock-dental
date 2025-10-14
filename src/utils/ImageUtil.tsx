import { memo } from 'react';

const ImageUtil = memo(
  ({
    srcPc,
    srcSp,
    alt,
    widthPc,
    widthSp,
    heightPc,
    heightSp,
    className,
  }: {
    srcPc?: string;
    srcSp: string;
    alt: string;
    widthPc?: number;
    widthSp: number;
    heightPc?: number;
    heightSp: number;
    className?: string;
  }) => {
    return (
      <picture className={className}>
        {srcPc && (
          <source
            srcSet={srcPc}
            width={widthPc}
            height={heightPc}
            media="(min-width: 768px)"
          />
        )}
        <img
          src={srcSp}
          alt={alt}
          width={widthSp}
          height={heightSp}
          loading="lazy"
        />
      </picture>
    );
  }
);

ImageUtil.displayName = 'ImageUtil';

export { ImageUtil };
