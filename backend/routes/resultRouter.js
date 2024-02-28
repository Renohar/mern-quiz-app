import express from "express"


const router = express.Router()

router.get('/api/results', async (req, res) => {
    try {
      const { userID } = req.query;
      // Fetch and display user's quiz results
      res.json({ success: true, results: {} });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });


export default router