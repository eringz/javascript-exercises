// Custom Middleware function
exports.mid =  (req, res, next) => {
    // Perform any logic here
    console.log('Middleware is executing...');
    
    // You can also modify the request/response objects if needed
    req.customProperty = 'Custom value';
  
    // Call next() to proceed to the next middleware or route handler
    next();
}

exports.time = async (req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
}