function verifyUser(name, email, book, description) {
    var name = name.trim();
    var book = book.trim();
    var description = description.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length <= 0 || !emailRegex.test(email) || book.length <= 0 || description <= 0)  {
        return false;
    } else {
        return true;
    }
}


module.exports = verifyUser;