const saveData = require('../utils/saveData');
const recipes = require("../data/recipe");

// 1ª forma que voces podem encontrar de exportar metodos do controller
module.exports = {
  index(req, res, next){
    res.render('recipes', { recipes: recipes });
  },

  save(req, res, next){
    /* criando um id sequencial, obtendo a
    quantidade de elementos no array recipes e somando + 1 */
    let id = recipes.length + 1;

    /* montando objeto para seguir padrao dentro do arquivo data/recipe.js */
    let recipe = { id, ...req.body };
    
    /* adcionando objeto criado dentro do array recipes */
    recipes.push(recipe);

    saveData(recipes, 'recipe.js');
    
    res.redirect('/recipes');
  },

  async edit(req, res, next){
    let id = req.params.id;

    let recipe = recipes.find(recipe => recipe.id == id);
    //console.log(recipe);

    res.render('edit-recipe.ejs', { recipe });
  },

  async update(req, res, next){
    let id = req.params.id;
    let { nome, email, mensagem} = req.body;

    // obter a receita para alterá-la
    let recipe = recipes.find(recipe => recipe.id == id);
    
    recipe.nome = nome;
    recipe.email = email;
    recipe.mensagem = mensagem;

    //console.log(recipe);
    saveData(recipes, 'recipe.js');

    res.render('edit-recipe', { recipe, update: true });
  },

  async delete(req, res, next){
    let id = req.params.id;
    
    let recipeIndex = recipes.findIndex(recipe => recipe.id == id);
    recipes.splice(recipeIndex, 1);

    //let recipeFilter = recipes.filter(recipe => recipe.id != id);
    //let dataString = JSON.stringify(recipeFilter);

    saveData(recipeIndex, 'recipe.js');

    res.render('recipes', { recipes, deleted: true });
  }
}

// 2ª forma que voces podem encontrar de exportar metodos do controller
// const RecipeController = {
//   index: (req, res, next) => {
//     res.render('recipes');
//   }
// }

// module.exports = RecipeController