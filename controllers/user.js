const user = [
  {
    mail: 'felix@mail.com',
    pass: '123456',
    name: 'felix',
    lastName: 'tineo',
    birthday: '05/16/1986',
  },
];
let index = 0;
exports.registro = (req, res, next) => {
  const userReg = req.body;
  let newUser = false;
  for (let i = 0; i < user.length; i = i + 1) {
    if (user[i].mail === userReg.mail) {
      newUser = false;
      break;
    } else {
      newUser = userReg;
    }
  }
  if (!newUser) {
    res.status(500).send(`Ya existe una cuenta agregada con ${userReg.mail}`)
  } else {
    user.push(newUser);
    res.status(200).send(`usuario ${newUser.mail} fue agregado exitosamente`)
  }
  console.log(user);
};

exports.login = (req, res, next) => {
  const data = req.body;
  console.log(data);
  let userLogin = false;
  for (let i = 0; i < user.length; i += 1) {
    if (user[i].mail === data.mail && user[i].pass === data.pass) {
      userLogin = user[i];
      console.log(user[i].mail);
      break;
    }
  };
  if (userLogin) {
    console.log(userLogin);
    res.status(200).send(userLogin.mail);
  } else {
    res.status(501).send('Error usuario o contraseña incorrecto');
  }
};