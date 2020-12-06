const HomeController = {
    index: (req, res) => {
        let info = {
            title: 'Express',
            cursos: ['Full Stack', 'Mobile Android', 'Markting Digital']
        };
        res.render('index', info);
    }
};

module.exports = HomeController;