import React from 'react';
import { Card } from '@/components/ui/card';

type PixelProps = {
    isActive: boolean;
    onClick: () => void;
};

function Pixel({ isActive, onClick }: PixelProps) {
    return (
        <Card
            onClick={onClick}
            className={`
                w-12 h-12 flex items-center justify-center cursor-pointer 
                transition-all duration-300 ease-in-out transform hover:scale-110
                ${isActive 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 border-blue-400' 
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
                }
            `}
        >
            <div className={`
                w-8 h-8 rounded-full transition-all duration-300
                ${isActive 
                    ? 'bg-white/30 shadow-inner animate-pulse' 
                    : 'bg-gray-300/30 dark:bg-gray-600/30'
                }
            `} />
        </Card>
    );
}

export default Pixel;
