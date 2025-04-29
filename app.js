import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';    
import cors from 'cors';
    

applescript.get('/', (req, res) => {
    res.send('Hello World!');
})