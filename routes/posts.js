const db = require('./index');

module.exports = {
    getPosts(req, res) {
        res.send(db.store.posts);
    },
    addPosts(req, res) {
        db.store.posts.push(req.body);
        res.status(201).send({ id: db.store.posts.length });
    },
    updatePosts(req, res) {
        db.store.posts[req.params.postId] = req.body;
        res.status(201).send(req.body);
    },
    removePosts(req, res) {
        db.store.posts.splice(req.params.postId, 1);
        res.status(201).send();
    },
};