import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeView } from '../pages'

export const Router=()=>{
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeView />} />
    </Routes>
    </BrowserRouter>
    
)
}