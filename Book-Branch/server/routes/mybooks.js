const express = require('express');
const router = express.Router();

//Routes for mybooks

router.get("/", async (req, res, next) => {
    try {
      // Declare and verify payload from AUTHORIZATION HEADER
      const payload = jwt.verify(req.headers.authorization, process.env.JWT);
      const mybooks = await prisma.book.findUnique({
        where: {
          id: payload.id,
        },
      });
      // If found, return user's books
      if (mybooks) {
        return res.json(mybooks);
      }
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router; 