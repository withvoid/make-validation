/* eslint-disable */
import express from 'express';

const router = express.Router();

router.post('/get-users', async (req, res) => {
  try {
    const validation = makeValidation(types => ({
      payload: req.body,
      checks: {
        firstName: { type: types.string },
        lastName: { type: types.string },
        type: {
          type: types.enum,
          options: { enum: { 0: 'admin', 1: 'user' } },
        },
      },
    }));
    if (!validation.success) return res.status(400).json(validation);

    // code below this won't be executed untill the user sends in the right
    // payload.
    const { firstName, lastName, type } = req.body;
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
});

export default router;
