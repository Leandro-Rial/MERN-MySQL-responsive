const db = require('../config/db');

const postsCtrl = {
    getPosts: async (req, res) => {
        try {

            db.query("SELECT * FROM posts", (err, result) => {
                if (err) {
                    console.log(err);
                }

                res.send(result)
            })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    createPost: async (req, res) => {
        try {

            const { title, user_name, post_text } = req.body;

            if(!title | !user_name | !post_text){
                return res.status(400).json({ msg: 'Please complete all the fields.' })
            }
            
            db.query("INSERT INTO posts (title, user_name, post_text) VALUES ( ?, ?, ? )", [title, user_name, post_text], (err, result) => {
                if (err) {
                    console.log(err);
                }

                console.log(result);
            })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
}

module.exports = postsCtrl