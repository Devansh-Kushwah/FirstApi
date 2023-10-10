const Product = require('../models/product');

const getAllProducts = async(req, res) => {
  const {company, name, featured, price, sort, select} = req.query;
  const queryObject = {};

  if(company){
    queryObject.company = company;
  }
  if(name){
    queryObject.name = {$regex: name, $options: 'i'};
  }
  if(featured){
    queryObject.featured = featured;
  }
  if(price){
    queryObject.price = {$lte: price};
  }

  let apiData = Product.find(queryObject);

  if(sort){
    let sortfix = sort.replace(",", " ");
    apiData = apiData.sort(sortfix);
  }

  if(select){
    let selectfix = select.split(",").join(" ");
    apiData = apiData.select(selectfix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;  
  let skip =  (page-1)*limit;
  apiData = apiData.skip(skip).limit(limit);


  const myData = await apiData;
  console.log(queryObject);
  res.status(200).json({myData, nbHits: myData.length});
};

const getAllProductsTesting = async(req, res) => { 
    const myData = await apiData;
    console.log(req.query);
    res.status(200).json({myData});
}

module.exports = {getAllProducts, getAllProductsTesting};