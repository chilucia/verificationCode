const AddBag = require('../models/addBags')

exports.NewBags = async (req, res) => {
    try{
        // const data = {fullname, dec, price}
        const created = await AddBag.create(req.body);
        res.status(201).json({
            message: "New Bag Added",
            data: created
        });

    }catch(e){
        res.status(400).json({
            message: e.message
        });
    }
}

exports.GetallBags = async (req, res) => {
    try{
        const allBags = await AddBag.find();
        res.status(201).json({
            message: "AllBags",
            length: allBags.length,
            data: allBags
        });

    }catch(e){
        res.status(400).json({
            message: e.message
        });
    }
}

exports.DeleteBags = async (req, res) => {
    try{
        const productid = req.params.productid
         await AddBag.findByIdAndDelete(productid);
        res.status(204).json({
            message: "Deleted",
        });

    }catch(e){
        res.status(400).json({
            message: e.message
        });
    }
}
