// Copyright 2025 fortu
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import mongoose from 'mongoose'; 

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    currency: {
        type: String,
        required: true,
        enum: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'],
    },
    frequency: {
        type: String,
        required: true,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String,
        required: true,
        enum: ['sports', 'news', 'lifestyle', 'entertainment', 'education', 'health', 'technology'],
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['credit_card', 'paypal', 'bank_transfer'],
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending'],
        default: 'active',
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    renewalDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (v) {
                return v > this.startDate;
            },
            message: props => `${props.value} is not a valid renewal date!`,
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },

}, { timestamps: true });


// Auto Calculate the renewal date based on the start date i
if (!this.renewalDate){
        const renewalDate={
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
    };
    this.renewalDate = new Date(this.startDate.getTime() + renewalDate[this.frequency] * 24 * 60 * 60 * 1000);
    // Auto-update the status if renewal dat has passed
    if (this.renewalDate < Date.now()) {
            this.status = 'inactive';
    }

    next();
        
;}



    