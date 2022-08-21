import React, { createContext, useState } from "react";

export interface MealsContextProps {
    mealsDataState: {
        mealsList: any[],
        setMeals: React.Dispatch<React.SetStateAction<any[]>> 
    };
}

export const MealsContext = createContext<MealsContextProps>({
    mealsDataState: {
        mealsList: [],
        setMeals: () => { }
    }
});

interface MealsProviderPorps {
    children: React.ReactNode | React.ReactNode[];
}

const MealsProvider = ({children}: MealsProviderPorps) => {
    const [mealsList, setMeals] = useState<any[]>([]);

    return (
        <MealsContext.Provider value={{mealsDataState: {mealsList, setMeals} }}>
            {children}
        </MealsContext.Provider>
    );
}

export default MealsProvider;
