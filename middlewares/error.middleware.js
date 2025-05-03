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

const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
        error: err.message,
    });

    // mongoos duplicate key error
    if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(400).json({
            status: 'error',
            message: 'Duplicate key error',
            error: err.message,
        });
    }   

    // mongoose validation error
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            status: 'error',
            message: 'Validation error',
            error: err.message,
        });
    }

    // mongoose cast error  
    if (err.name === 'CastError') {
        return res.status(400).json({
            status: 'error',
            message: 'Cast error',
            error: err.message,
        });
    }

    // mongoose document not found error
    if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({
            status: 'error',
            message: 'Document not found',
            error: err.message,
        });
    }

    
}

export default errorMiddleware;