<!--
 Copyright 2025 fortu
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     https://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

# 📦 Subscription Management System

A production-ready **Subscription Management System** built with **Node.js**, **Express**, **MongoDB**, **Arcjet**, and **Upstash**. Supports **real users**, **real payments**, and **real business logic** with security, performance, and scalability in mind.

---

## 🚀 Features

- ✅ **JWT Authentication** (Login, Register, Protected Routes)
- 📦 **Subscription Plans** (Free, Monthly, Annual)
- 🔄 **Automated Workflows** with Upstash for renewals, reminders, etc.
- 🔐 **Security-first** using Arcjet (rate limiting, protection)
- 💾 **MongoDB Atlas** database integration
- 🧩 Modular architecture with MVC pattern
- 🌐 **RESTful API** with clear route separation
- ⚙️ **HTTPie**-friendly endpoints for easy testing

---

## 📁 Project Structure

subscription-management-system/
├── app.js
├── config/ # Config for MongoDB, Arcjet, Upstash
├── models/ # User, Plan, Subscription models
├── controllers/ # Business logic for each route
├── routes/ # API endpoint definitions
├── middleware/ # JWT, error handlers, rate limiting
├── workflows/ # Background jobs via Upstash
├── utils/ # Helpers like JWT handling
├── database/ # Seeders, initial setup
└── .env # Environment variables

## 🛡️ Security

- **Arcjet** for bot and hack prevention  
- **JWT-secured endpoints** to protect user data  
- **Secure password hashing** with `bcrypt`  

---

## ⛓️ Tech Stack

- **Backend**: Node.js, Express  
- **Database**: MongoDB Atlas  
- **Security**: Arcjet, bcrypt, JWT  
- **Automation**: Upstash  
- **Testing**: HTTPie  

---

## 🧠 Future Improvements

- 💳 Payment gateway integration (e.g., Stripe)  
- 🧑‍💼 Admin dashboard  
- 📊 Subscription analytics  
- 📧 Email notifications system  

Built with ❤️ by SeniorDevForch
