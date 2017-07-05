 module.exports = function (app){ 
 
  var items =  [{
          name: "Ice Cream"
     },{
                    name: "Waffles"
                },{
                    name:"Candy",
                    purchased: true
                },{
                    name: "Snacks"
                }];


    app.route('/api/items')
        .get(function(req,res){
            res.send(items);
        })
        .post(function(req,res){})
 }