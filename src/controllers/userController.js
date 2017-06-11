import User from '../models/Users';

const userController = {

  list: (request, response, next) => {
    User.find({}).exec()
    .then(Users => {
      return response.json(Users);
    })
    .catch(err => {
      return next(err);
    });
  },

  show: (request, response, next) => {
    User.findById(request.params.id).exec()
    .then(Users => {
      return response.json(Users);
    })
    .catch(err => {
      return next(err);
    });
  },

  remove: (request, response, next) => {
    User.findByIdAndRemove(request.params.id).exec()
    .then(Users => {
      return response.json(Users);
    })
    .catch(err => {
      return next(err);
    });
  },

  create: (request, response, next) => {
    const user = new User(request.body);

    user.save()
    .then(storedUser => {
      return response.json(storedUser);
    })
    .catch(err => {
      return next(err);
    });
  },

  //eslint-disable-next-line
  update: (request, response, next) => {
    return ('updating stuff');
  }

};










export default userController;
