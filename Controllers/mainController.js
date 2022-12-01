module.exports = {
    home: (req, res)=>{
        res.render("home",{styles:'styles.css'});
    },
    manualDeUso: (req, res)=>{
        res.render("manualDeUso",{styles:'manual.css'});
    },
    fundamentos: (req, res)=>{
        res.render("fundamentos",{styles:'fundamentos.css'});
    }
    }
    