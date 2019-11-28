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
        images: [
            {url: 'https://imgix.bustle.com/uploads/image/2019/9/30/6241f90e-74ac-4158-bd94-5cf2873b081e-stocksy_txp0af17dc4fdu200_small_1088443.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70', id: "001"},
            {url: 'https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg', id: "002"},
            {url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg', id: "003"},
            {url: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all', id: "004"}
        ],
        options: ['cat', 'dog'], //labeling options user can choose
        img_id: "blah-blah" //identifier of image used internally
    });
});

// router for handling sended labeling result 
router.post('/', (req, res)=>{
    // check the id of image and store the result to db
    img_id = req.body.img_id
    
    // if successfully updated, then send success message
    res.json({"a":334});
    // Ohterwise, send failure message
    //res.status(404).json({error: "not found"});
});

module.exports = router;