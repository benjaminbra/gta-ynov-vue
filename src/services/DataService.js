import UserTypes from '../constants/UserTypes'

export default class DataService {
  getUserByEmail (email) {
    let userList = {
      'jean.salarie@supercomp.com': {
        firstname: 'Jean',
        lastname: 'Salarie',
        email: 'jean.salarie@supercomp.com',
        phone: '0000000000',
        address: '5 rue du bois brulé, 44000 Nantes',
        birth_date: '1994-12-05',
        type: UserTypes.UserTypes.SALARIE.value
      },
      'harry.responsable@supercomp.com': {
        firstname: 'Harry',
        lastname: 'Responsable',
        email: 'harry.responsable@supercomp.com',
        phone: '0000000000',
        address: '5 rue du bois brulé, 44000 Nantes',
        birth_date: '1994-12-05',
        type: UserTypes.UserTypes.RESPONSABLE_EQUIPE.value
      },
      'bill.drh@supercomp.com': {
        firstname: 'Bill',
        lastname: 'Drh',
        email: 'bill.drh@supercomp.com',
        phone: '0000000000',
        address: '5 rue du bois brulé, 44000 Nantes',
        birth_date: '1994-12-05',
        type: UserTypes.UserTypes.DRH.value
      }
    }
    return userList[email]
  }

  getUserById (id) {
    return [
      {
        firstname: 'Jean',
        lastname: 'Salarie',
        email: 'jean.salarie@supercomp.com',
        phone: '0000000000',
        address: '5 rue du bois brulé, 44000 Nantes',
        birth_date: '05/12/1994'
      },
      {
        firstname: 'Harry',
        lastname: 'Responsable',
        email: 'harry.responsable@supercomp.com',
        phone: '0000000000',
        address: '5 rue du bois brulé, 44000 Nantes',
        birth_date: '05/12/1994'
      },
      {
        firstname: 'Bill',
        lastname: 'Drh',
        email: 'bill.drh@supercomp.com',
        phone: '0000000000',
        address: '5 rue du bois brulé, 44000 Nantes',
        birth_date: '05/12/1994'
      }
    ]
  }

  getSalariePlanning (email, startDate, endDate) {
    return null
  }

  checkPasswordSalarie (email, password) {
    return true
  }

  updateUserById (id, user, callback) {
    callback()
  }
}
