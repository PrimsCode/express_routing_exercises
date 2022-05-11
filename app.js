const express = require('express');
const app = express();

const {stringToArray, findMean, findMode, findMedian} = require('./helpers');
const ExpressError = require('./expressError');

//route to run mean function with given nums
app.get('/mean', (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError('nums are required', 400);
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = stringToArray(numsAsStrings);

    if (nums instanceof Error){
        throw new ExpressError(nums.message, 400);
    } else {
        let result = {
            operation: "mean",
            value: findMean(nums)
        };
        return res.send(result);
    }    
});

//route to run median function with given nums
app.get('/median', (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError('nums are required', 400);
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = stringToArray(numsAsStrings);
    
    if (nums instanceof Error){
        throw new ExpressError(nums.message, 400);
    } else {
        let result = {
            operation: "median",
            value: findMedian(nums)
        };
        return res.send(result);
    }    
});

//route to run mode function with given nums
app.get('/mode', (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError('nums are required', 400);
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = stringToArray(numsAsStrings);
    
    if (nums instanceof Error){
        throw new ExpressError(nums.message, 400);
    } else {
        let result = {
            operation: "mode",
            value: findMode(nums)
        };
        return res.send(result);
    }
});

//route to run mean, median, mode functions with given nums
app.get('/all', (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError('nums are required', 400);
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = stringToArray(numsAsStrings);

    if (nums instanceof Error){
        throw new ExpressError(nums.message, 400);
    } else {
        let result = {
            operation: "all",
            mean: findMean(nums),
            median: findMedian(nums),
            mode: findMode(nums)
        };
        return res.send(result);
    }

});


app.use((req, res, next) => {
    const err = new ExpressError("Not Found",404);  
    // pass the error to the next piece of middleware
    return next(err);
});
  
//general error handling  
app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
});
  

app.listen(3000, () => {
    console.log('App on port 3000');
})