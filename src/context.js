// context.js
import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [selectCategory, setSelectCategory] = useState('');

    return (
        <CategoryContext.Provider value={{ selectCategory, setSelectCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
