const db = require('../util/database');

module.exports = class Exams {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.user = user;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM exams ');
  }

  static save(exams) {
    return db.execute(
      'INSERT INTO exams (title, body, user) VALUES (?, ?, ?)',
      [exams.title, exams.body, exams.user]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM exams WHERE id = ?', [id]);
  }
};
