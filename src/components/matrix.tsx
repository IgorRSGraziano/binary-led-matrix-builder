import { useMatrixContext } from '@/contexts/matrix-context'
import Column from './column'
import { Card } from '@/components/ui/card'

function Matrix() {
    const { rows, columns, colBits } = useMatrixContext();

    return (
        <div className='flex items-center justify-center max-h-screen'>
            <div className="flex max-w-screen items-center justify-center p-4 mx-8 max-h-full w-fit h-fit">
                <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-gray-200/50 dark:border-gray-700/50 shadow-2xl w-full h-full overflow-y-auto">
                    <div className="flex gap-2">
                        {Array.from({ length: columns }).map((_, colIndex) => {
                            const bits = colBits[colIndex] || 0;
                            return (
                                <Column
                                    key={colIndex}
                                    colIndex={colIndex}
                                    rows={rows}
                                    bits={bits}
                                />
                            );
                        })}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Matrix