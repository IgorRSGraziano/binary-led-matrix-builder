import React from 'react';
import Pixel from './pixel';

type RowProps = {
    rowIndex: number;
    columns: number;
    activePixels: Set<string>;
    onPixelToggle: (pixelId: string) => void;
};

function Row({ rowIndex, columns, activePixels, onPixelToggle }: RowProps) {
    return (
        <div className="flex gap-2">
            {Array.from({ length: columns }).map((_, colIndex) => {
                const pixelId = `${rowIndex}-${colIndex}`;
                return (
                    <Pixel
                        key={pixelId}
                        isActive={activePixels.has(pixelId)}
                        onClick={() => onPixelToggle(pixelId)}
                    />
                );
            })}
        </div>
    );
}

export default Row;
