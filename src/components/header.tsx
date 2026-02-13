import { useMatrixContext } from '@/contexts/matrix-context';
import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Header() {
    const { rows, columns, setRows, setColumns } = useMatrixContext();
    const [localRows, setLocalRows] = React.useState(rows);
    const [localColumns, setLocalColumns] = React.useState(columns);

    const handleUpdate = () => {
        setRows(localRows);
        setColumns(localColumns);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Binary LED Matrix Builder
                    </h1>
                    
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <label htmlFor="columns" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                X:
                            </label>
                            <Input
                                id="columns"
                                type="number"
                                min="1"
                                max="32"
                                value={localColumns}
                                onChange={(e) => setLocalColumns(Number(e.target.value))}
                                className="w-20 h-9"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <label htmlFor="rows" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Y:
                            </label>
                            <Input
                                id="rows"
                                type="number"
                                min="1"
                                max="32"
                                value={localRows}
                                onChange={(e) => setLocalRows(Number(e.target.value))}
                                className="w-20 h-9"
                            />
                        </div>

                        <Button 
                            onClick={handleUpdate}
                            className="h-9"
                        >
                            Atualizar
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header