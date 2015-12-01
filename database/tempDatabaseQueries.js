////Insert Query 1 : Insert User Info

app.post('/api/userinfo', function(req, res) {
  User.create(
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    headline: req.body.headline,
    industry: req.body.industry,
    country: req.body.country,
    city: req.body.city,
    zipCode: req.body.zipCode,
    phoneNumber: req.body.phoneNumber,
    facebookURL: req.body.facebookURL,
    linkedInURL: req.body.linkedInURL,
    homepageURL: req.body.homepageURL,
    blogURL: req.body.blogURL,
    githubURL: req.body.githubURL,
    behanceURL: req.body.behanceURL,
    web1Title: req.body.web1Title,
    web1URL: req.body.web1URL,
    web2Title: req.body.web2Title,
    web2URL: req.body.web2URL,
    pictureUrl: req.body.pictureUrl,
    positions: req.body.positions,
    summary: req.body.summary
  }).then(function(userinfo){
    res.status(201).send('successfully added userinfo');
  });

////Insert Query 2 : Insert resume theme into Resumes table
app.post('/api/resume', function(req, res){
  Resume.create({
    theme: req.body.theme
  }).then(function(resume){
      User.findOne({
        where: {
          userName: req.body.userName
        }
      }).then(function(user){
        user.addResume(resume);
        res.status(201).send('successfully added resume"';
        })
    })
});

//Insert Query 3 : Insert block

app.post('/api/block', function(req, res){
  Block.create({
    jobTitle: req.body.jobTitle,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  }).then(function(block){
    User.findOne({
      where: {
        userName: req.body.userName
      }
    }).then(function(user){
      Resume.findOne({
        where: {
          theme: req.body.theme
        }
      }).then(function(resume){
        resume.addBlock(block);
        res.status(201).send('successfully added block');
      });
    });
  });
});

//Insert Query 4 : Insert bullets into Bullets table

app.post('/api/bullets', function(req, res) {
  Bullet.create({
    bullet: req.body.bullet
  }).then(function(bullet) {
      User.findOne({
        where: {
          userName: req.body.userName
        }
    }).then(function(user) {
        Resume.findOne({
          where: {
            theme: req.body.theme
          }
      }).then(function(resume) {
          Block.findOne({
              where: {
                jobTitle: req.body.theme
              }
            }
          }).then(function(block) {
          block.addBullet(bullet);
          res.status(201).send('successfully added bullet');
        });
      });
    });
  });
});

//Retrieve Query 5 : Retrieve a Users bullets

app.post('/api/bullets/get', function(req, res){
  Bullets.findAll({
    include: [{
      model: Block,
      include: [{
        model: Resume,
        include: [{
          model: User,
          where: {
            userName: req.body.userName;
          }
        }]
      }]
    }]
  }).then(function(bullets) {
     bullets = _.map(bullets, function(item){ return item.bullets; });
     res.send(bullets);
  });
});

//Update Query 6 : Update a Users bullets

app.post('/api/bullets/archive', function(req, res) {
  User.findOne({
    where: {
      userName: req.body.userName
    }
  }).then(function(user) {
    Resume.findOne({
      where: {
        theme: req.body.theme
      }
    }).then(function(resume) {
      Block.findOne({
        where: {
          jobTitle: req.body.jobTitle
        }
      });
    }).then(function(block) {
      Bullet.update({
        where: {
          bulletPosition: req.body.bulletPosition
        }
      });
      res.status(201).('successfully updated bulletPosition');
    });
  });
});