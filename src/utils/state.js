
class LocalState {

  static setCurrentCity(currentCity) {
    localStorage.setItem('currentCity', currentCity)
  }
  static getCurrentCity() {
    return localStorage.getItem('currentCity')
  }

  static setCurrentParty(currentParty) {
    localStorage.setItem('currentParty', currentParty)
  }
  static getCurrentParty() {
    return localStorage.getItem('currentParty')
  }

  static setCurrentCandidate(currentCandidate) {
    localStorage.setItem('currentCandidate', currentCandidate)
  }
  static getCurrentCandidate() {
    return localStorage.getItem('currentCandidate')
  }

}

export default LocalState