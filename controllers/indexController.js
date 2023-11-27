const { leerJSON } = require("../data");

module.exports = {
    index :  function(req, res) {
        
        const productos = leerJSON('productos');
        const tutoriales = leerJSON('tutoriales');

        return res.render('index', { 
            productos,
            tutoriales
        });
      },
      detail : (req,res) => {
        return res.render('productDetail')
      }
}