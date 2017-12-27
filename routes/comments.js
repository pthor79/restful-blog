const db = require('./index');

module.exports = {
    getComments(req, res) {
        res.status(200).send(db.store.posts[req.params.postId].comments);
    },
    addComments(req, res) {
        db.store.posts[req.params.postId].comments.push(req.body);
        res.status(201).send(req.body);
    },
    updateComments(req, res) {
        db.store.posts[req.params.postId].comments[req.params.commentId] = req.body;
        res.status(201).send(req.body);
    },
    removeComments(req, res) {
        db.store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
        res.status(201).send()
    }
};