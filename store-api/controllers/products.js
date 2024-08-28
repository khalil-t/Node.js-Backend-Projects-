const { Task } = require('../db/connect');

const getallproductsstatic = async (req, res) => {
  try {
    const products = await Task.find().sort('price').select('name price company');
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getallproducts = async (req, res) => {
  try {
    const { featured, company, name, sort, fields ,numericFilters} = req.query;
    const queryObject = {};

    if (featured) {
      queryObject.featured = featured === 'true';
    }
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
    }
if(numericFilters){
  const operatorMap = {
    '>': '$gt',
    '>=': '$gte',
    '=': '$eq',
    '<': '$lt',
    '<=': '$lte',
  };
  const regEx = /\b(<|>|>=|=|<|<=)\b/g;
  const options=['price', 'rating']
let  filter=numericFilters.replace(regEx,(map)=>`*${operatorMap[map]}*`)
filter=filter.split(',').forEach(element => {
  
  const [field, operator, value]=element.split('*')
if(options.includes(field)){

  queryObject[field]={[operator]:Number(value)}

}




});



}



    let query = Task.find(queryObject);

    if (sort) {
      const sortList = sort.split(',').join(' ');
      query = query.sort(sortList);
    }

    if (fields) {
      const fieldsList = fields.split(',').join(' ');
      query = query.select(fieldsList);
    }

    const products = await query;
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getallproductsstatic,
  getallproducts
};
//numirique filter f machi standard
//reg ex
//.replace w dwar
//splite fl filter
