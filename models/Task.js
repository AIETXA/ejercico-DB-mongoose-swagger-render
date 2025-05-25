const mongoose = require('mongoose');

/*const TaskSchema = new mongoose.Schema({
    title: String,
    body: String,
    completed: Boolean,
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;*/

module.exports = {
    components:{
        schemas:{

            _id:{
                type:'objectId',
                description:"An id of a user",
                example: "6201064b0028de7866e2b2c4"
            },
        }
    }
}
