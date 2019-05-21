var express = require('express')
var router = express.Router()
const axios = require('axios');

router.get('/:city/:state/:price', function (req, res) {

    axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search?location=/${req.params.city}/${req.params.state}&price=${req.params.price}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ddmnwhcDTYIEvOO_pP982V-zkjt_8O-fHMKG1ltCzpMdSF_vY5cd8lAydsM6ZyHiKcP1Q_j4VJdLF6NzUSieP1O6NeoAw48nYXxvOoIr8h7pOV1DJcdQNZ8JCS3kXHYx'

        }
    })
        .then(function (response) {
            res.send(response.data)
            console.log(response);
        })

        .catch(function (error) {
            console.log(error);
        });

})

module.exports = router;


//my api key: ddmnwhcDTYIEvOO_pP982V-zkjt_8O-fHMKG1ltCzpMdSF_vY5cd8lAydsM6ZyHiKcP1Q_j4VJdLF6NzUSieP1O6NeoAw48nYXxvOoIr8h7pOV1DJcdQNZ8JCS3kXHYx