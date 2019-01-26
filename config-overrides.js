const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');



 module.exports = function override(config, env) {
   //config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
   
   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
   config = rewireLess.withLoaderOptions({
     modifyVars: { 
      "@primary-color": "#4c2d46",
      "@font-family": "Acrobat",
      "@font-size-base": 14,
      "@text-color": "rgba(76, 45, 70, 0.8)"
      
     },
   })(config, env);
    return config;
  };