import React from "react";

type MatrixContextType = {
    rows: number;
    columns: number;
    setRows: React.Dispatch<React.SetStateAction<number>>;
    setColumns: React.Dispatch<React.SetStateAction<number>>;
};

const MatrixContext = React.createContext<MatrixContextType | null>(null);

export function useMatrixContext() {
    const context = React.useContext(MatrixContext);
    if (!context) {
        throw new Error("useMatrixContext must be used within a MatrixProvider");
    }
    return context;
}

type MatrixProviderProps = {
    rows: number;
    columns: number;
}

export function MatrixProvider({
    children,
    columns: propColumns,
    rows: propRows,
}: React.PropsWithChildren<MatrixProviderProps>) {
    const [rows, setRows] = React.useState(propRows);
    const [columns, setColumns] = React.useState(propColumns);

    return (
        <MatrixContext.Provider value={{ rows, columns, setColumns, setRows }}>
            {children}
        </MatrixContext.Provider>
    );
}