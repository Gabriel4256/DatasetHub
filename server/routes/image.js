/**
 * @file router for handling image requests
 * @author SSH
 */

var express = require('express');
var path = require('path');

const router = express.Router();

// router for getting images and labeling options
router.get('/', (req, res)=>{
    // choose suitable image

    //send url of the image and labeling options
    
    res.json({
        url: 'https://www.gstatic.com/webp/gallery3/1_webp_ll.sm.png?dcb_=0.05563218215670307',
        options: ['cat', 'dog'], //labeling options user can choose
        img_id: "blah-blah" //identifier of image used internally
    });
});

// router for handling sended labeling result 
router.post('/', (req, res)=>{
    // check the id of image and store the result to db
    img_id = req.body.img_id
    
    // if successfully updated, then send success message
    res.json({});
    // Ohterwise, send failure message
    res.status(404).json({error: "not found"});
});

module.exports = router;