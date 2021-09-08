import { Request, Response } from "express";
import dbClient from "../../utils/client";

export async function createOneTrack(req: Request, res: Response) {
  const trackDetails = req.body;

  try {
    const newTrack = await dbClient.track.create({
      data: trackDetails,
    });
    res.json({
      msg: "album successfully added to DB",
      data: newTrack,
    });
  } catch (error) {
    console.error("what's the problem", error);

    res
      .status(401)
      .json({ msg: "You do not have permission to access this route" });
  }
}
