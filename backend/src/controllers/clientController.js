// Imports used

async function showAllClientsSaved(req, res) {
    res.status(200).send({
        message: "Found all clients",
        jsonArr: []
    });
}

module.exports = {
    showAllClientsSaved
};