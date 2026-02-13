import React, { use } from 'react';
import Pixel from './pixel';
import { useMatrixContext } from '@/contexts/matrix-context';

type ColumnProps = {
    colIndex: number;
    rows: number;
    bits: number;
};

function Column({ colIndex, rows, bits }: ColumnProps) {
    const { setColBits } = useMatrixContext();
    const isBitActive = (bitPosition: number) => {
        return (bits & (1 << bitPosition)) !== 0;
    };

    return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: rows }).map((_, rowIndex) => {
                const bitPosition = rows - 1 - rowIndex;
                const pixelId = `${rowIndex}-${colIndex}`;
                return (
                    <Pixel
                        key={pixelId}
                        isActive={isBitActive(bitPosition)}
                        onClick={() => {
                            const newBits = bits ^ (1 << bitPosition);
                            setColBits(prev => {
                                const newColBits = [...prev];
                                newColBits[colIndex] = newBits;
                                return newColBits;
                            });
                        }}
                    />
                );
            })}
        </div>
    );
}

export default Column;
