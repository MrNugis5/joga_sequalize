const  Sequelize  = require("sequelize")
const sequelize = new Sequelize("mysql://root:qwerty@localhost:3306/joga_sequelize" )


const models = require("../models")


const getAllArticles = (req, res) => {
    models.Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({ articles} );
    })
    .catch(err => {
        return res.status(500).send(err.message);
    });
}

const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: { slug: req.params.slug },
        include: [
            {
                model: models.Author,
                as: 'author'
            },
            {
                model: models.ArticleTags,
                as: 'articleTags',
                attributes: ['articleId', 'tagId']
            }
        ]
    })
    .then(article =>{
        console.log(article)
        return res.status(200).json({ article });
    })
    .catch(err => {
        return res.status(500).send(err.message);
    } )
}


module.exports = {
    getAllArticles,
    getArticleBySlug
}