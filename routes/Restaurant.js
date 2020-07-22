module.exports = {
    Index : (req,res)=>{
        res.render('Restaurant/restaurant');
    },
    Liste:(req,res)=>{
        res.render('Restaurant/listeResto');
    },
    Debar:(req,res)=>{
        res.render('Restaurant/Details/debacadere');
    },
    Saak:(req,res)=>{
        res.render('Restaurant/Details/saakan');
    },
    Croi:(req,res)=>{
        res.render('Restaurant/Details/croisette');
    },
    Pasta:(req,res)=>{
        res.render('Restaurant/Details/pasta');
    }
}