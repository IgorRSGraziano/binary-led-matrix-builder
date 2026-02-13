import { useMatrixContext } from '@/contexts/matrix-context'
import React from 'react'
import Row from './row'
import { Card } from '@/components/ui/card'

function Matrix() {
    const { rows, columns } = useMatrixContext();
    const [activePixels, setActivePixels] = React.useState<Set<string>>(new Set());

    // Reseta os pixels ativos quando as dimensões mudam
    React.useEffect(() => {
        setActivePixels(new Set());
    }, [rows, columns]);

    const handlePixelToggle = (pixelId: string) => {
        setActivePixels(prev => {
            const newSet = new Set(prev);
            if (newSet.has(pixelId)) {
                newSet.delete(pixelId);
            } else {
                newSet.add(pixelId);
            }
            return newSet;
        });
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] p-8">
            <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <div className="flex flex-col gap-2">
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <Row
                            key={rowIndex}
                            rowIndex={rowIndex}
                            columns={columns}
                            activePixels={activePixels}
                            onPixelToggle={handlePixelToggle}
                        />
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default Matrix